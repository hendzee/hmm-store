import { FaBox, FaTag } from "react-icons/fa6";
import { Link } from "react-router-dom";
import formatCurrency from "../utility/fotmatCurrency";

const Items = ({ items, showInfo = false, showLabel = false, isOpenLink = false }) => {
    if (!items) return null;
    if (!items.length) return null;

    const renderItems = items.map((e, index) => {
        let itemClass = "one-item-container mt-4";

        if (isOpenLink) {
            return (
                <div key={index} className="col-sm-4 col-6">
                        <Link to={`/product-details/${e._id}`}>    
                            <div className={ itemClass }>
                                { showLabel ? availableLable(e.stock) : null }
                                <img src={ e.images[0] } className="item-img" />
                            </div>

                            {
                                showInfo ? setInfo(e) : null
                            }

                        </Link>
                    </div>
            )
        }
        
        return (
            <div key={index} className="col-sm-4 col-6">
                <div className={ itemClass }>
                    { showLabel ? availableLable(e.stock) : null }
                    <img src={ e.image } className="item-img" />
                </div>

                {
                    showInfo ? setInfo(e) : null
                }

            </div>
        )
    });

    return (
        <>{ renderItems }</>
    )
}

const setInfo = (info) => {

    return (
        <>
            <div className="item-info">
                <div className="item-title cut-title">
                    { info.name }
                </div>

                <div className="item-second-wrapper">
                    <FaBox className="me-3" />
                    { 'Stock: ' + info.stock }
                </div>

                <div className="item-third-wrapper">
                    <FaTag className="me-3" />
                    { 'IDR ' + formatCurrency(info.price) }
                </div>
            </div>
        </>
    )
}

// SET LABEL ON ITEM
const availableLable = (available) => {
    if (!available) {
        return (
            <div className="item-label label-red">
                Tidak Tersedia
            </div>
        )
    }

    return (
        <div className="item-label label-green">
            Tersedia
        </div>
    )
}

export default Items;