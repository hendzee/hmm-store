import NavigationBar from '../components/NavigatonBar';
import '../styles/index.css';
import logo from '../assets/logo.png';
import { useParams } from 'react-router-dom'
import { getFullUri } from '../utility/convertUri';

const Checkout = () => {
    const { id } = useParams();
    const checkoutUri = getFullUri(id);

    return (
        <>
            <div className="container">
                <div className="top-strip">
                    <img src={ logo } alt="Banner" className="logo m-3" />
                    <NavigationBar />            
                </div>

                <iframe
                    src={ checkoutUri }
                    width="100%"
                ></iframe>        
            </div>
        </>
    )
}

export default Checkout;