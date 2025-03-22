import { Link } from 'react-router-dom';
import { FaHouse, FaShield, FaStar } from "react-icons/fa6";

const NavigationBar = ({ activeIndex = 0 }) => {

    const classNameDefault = "";
    const classNameActive = "active-link";

    return (
        <>
            <div className="d-none d-md-block">
                <div className="navigator-container m-3">
                    <Link to='/' className={ activeIndex == 0 ? classNameActive : classNameDefault }>
                        <div className="navigator-title">
                            <FaHouse size={16} className="me-2 pb-1" />
                            <div>Home</div>
                        </div>
                    </Link>

                    <Link to='/about' className={ activeIndex == 1 ? classNameActive : classNameDefault }>
                        <div className="navigator-title">
                            <FaStar size={16} className="me-2 pb-1" />
                            <div>About Us</div>
                        </div>
                    </Link>
                    
                    <Link to='/policy' className={ activeIndex == 2 ? classNameActive : classNameDefault }>
                        <div className="navigator-title">
                            <FaShield size={16} className="me-2 pb-1" />
                            <div>Policy</div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="d-block d-md-none">
                <div className="navigator-container-bottom p-4 mb-2 me-2 ml-2">
                    <Link to='/' className={ activeIndex == 0 ? classNameActive : classNameDefault }>
                        <div className="navigator-title">
                            <FaHouse size={16} className="me-2 pb-1" />
                            <div>Home</div>
                        </div>
                    </Link>

                    <Link to='/about' className={ activeIndex == 1 ? classNameActive : classNameDefault }>
                        <div className="navigator-title">
                            <FaStar size={16} className="me-2 pb-1" />
                            <div>About Us</div>
                        </div>
                    </Link>
                    
                    <Link to='/product-details' className={ activeIndex == 2 ? classNameActive : classNameDefault }>
                        <div className="navigator-title">
                            <FaShield size={16} className="me-2 pb-1" />
                            <div>Policy</div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NavigationBar;