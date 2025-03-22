import { useState, useEffect, } from 'react';
import { Link, useParams } from 'react-router-dom';

import '../styles/index.css';
import { FaShieldHalved } from "react-icons/fa6";
import Items from '../components/Items';
import NavigationBar from '../components/NavigatonBar';
import Loading from '../components/Loading';
import { getDetailItem } from '../actions/item';
import parse from "html-react-parser";
import formatCurrency from '../utility/fotmatCurrency';
import logo from '../assets/logo.png';
import { encode } from '../utility/convertUri';

const ProductDetails = () => {
    const [tabInfo, setTabInfo] = useState(0);
    const [detailItem, setDetailItem] = useState([]);
    const [encodedUri, setEncodedUri] = useState('');
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const initData = async () => {
            try {
                const response = await getDetailItem(id);

                const encodeUri = await encode(response.checkoutUrl);

                setEncodedUri(encodeUri);

                setDetailItem(response);
            } catch (error) {
                
            } finally {
                setLoading(false)
            }
        }

        initData();
    }, [])

    const activeButtonClass = "info-tab-button";
    const inActiveButtonClass = "info-tab-button tab-inactive";

    if (loading) return <Loading />

    let convertImages = [];

    if (detailItem.images && detailItem.images.length) {
        convertImages = detailItem.images.map(e => { return { image: e } })
    }

    return(
        <>
            <div className="container">
                <div className="top-strip">
                    <img src={ logo } alt="Banner" className="logo m-3" />
                    <NavigationBar activeIndex={2} />            
                </div>
                
                <div className="description-container pt-5">
                    <div className="row">
                        <div className="col-md-5">
                            {
                                loading 
                                ? null 
                                : (<><img src={ detailItem.images[0] } alt="Image" className="item-img-one d-none d-md-block" /></>)
                            }
                        </div>
                        <div className="col-md-7">
                            <div className="info-tab">
                                <div className={ tabInfo == 0 ? activeButtonClass : inActiveButtonClass } 
                                    onClick={() => { setTabInfo(0)}}>
                                    Info
                                </div>
                                <div className={ tabInfo == 1 ? activeButtonClass : inActiveButtonClass } 
                                    onClick={() => {setTabInfo(1)}}>
                                    Kelebihan
                                </div>
                            </div>
                            { tabInfo == 0 ? setInfo(detailItem) : setMoreInfo(detailItem) }
                        </div>
                    </div>

                </div>

                <div className="row items-container">
                    <Items items={ convertImages } />
                </div>

                { setFooterDescription(encodedUri) }
            </div>
        </>
    )
}

const setInfo = (detailItem) => (
    <>
        <h1>{ detailItem.name }</h1>
        <h2>
            { 'IDR ' + formatCurrency(detailItem.price)}
        </h2>
        <div className="info-with-label">
            <p className="me-1">Stock: </p>
            { setLabel() }
        </div>
        <p>
            { detailItem.info }
        </p>
    </>
);

const setMoreInfo = (detailItem) => {
    if (!detailItem.additionalInfo) return;

    return(
        <>
            { parse(detailItem.additionalInfo) }
        </>
    )
}

// SET FOOTER DESCRIPTION
const setFooterDescription = (encodedUri) => {

    return (
        <>
            <div className="description-container pt-5">
                <div className="row">
                    <Link className="col-md-6 text-center button-footer-wrapper" to={`/checkout/${ encodedUri }`}>
                        <div className="custom-button mb-5">
                            Beli Sekarang
                        </div>
                    </Link>

                    <div className="col-md-6">                    
                        <div className="description-container-title mb-3">
                            <FaShieldHalved className="me-2 pb-1" size={22}/>
                            <h3>Disclaimer</h3>
                        </div>

                        <p>
                            Warna produk pada gambar mungkin sedikit berbeda dengan warna aslinya. Ukuran produk yang tertera mungkin memiliki toleransi sedikit perbedaan. Aksesori tambahan yang ditampilkan pada gambar mungkin tidak termasuk dalam paket pembelian. Garansi dan layanan purna jual mungkin berbeda-beda tergantung pada merek dan toko.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

// SET LABEL
const setLabel = () => {
    return (
        <div className="item-label-small label-green">
            Tersedia
        </div>
    )
}


export default ProductDetails;