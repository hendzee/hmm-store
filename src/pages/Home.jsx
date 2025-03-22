import { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigatonBar';
import Items from '../components/Items';
import { getAllItem } from '../actions/item';
import { getSettings } from '../actions/setting';

import '../styles/index.css';

import { 
    FaCcMastercard, 
    FaRegHandshake, 
    FaRupiahSign  
} from "react-icons/fa6";
import Loading from '../components/Loading';


const Home = () => {
    const [ items, setItems ] = useState([]);
    const [ settings, setSettings ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const initData = async () => {
            try {
                const responseItems = await getAllItem();
                const responseSettings = await getSettings();

                setItems(responseItems);
                setSettings(responseSettings);
                
            } catch (error) {
            } finally {
                setLoading(false);
            }
        }

        initData();
    }, []);

    if (loading) return <Loading />

    return (
        <>
            <div className="container">
                <NavigationBar activeIndex={0} />            

                <div className="banner">
                    <img src={ settings.banner } alt="Banner" />
                </div>

                <h2 className="sub-title">
                    HOT PRODUCTS
                </h2>

                <div className="row items-container">
                    <Items
                        items={ items } 
                        showInfo={ true } 
                        showLabel={ true }
                        isOpenLink={ true } />
                </div>

                <h2 className="sub-title-normal">
                    KEUNGGULAN KAMI
                </h2>

                { setBenefits() }
            </div>
        </>
    )
}

// SET BENEFITS INFORMATION
const setBenefits = () => {
    return (
        <div className="benefits-wrapper">
            <div className="row">
                <div className="col-sm-4 col-xs-12 mt-2">
                    <div className="one-benefit-wrapper">
                        <FaRegHandshake className="mb-3" fontSize={32} />
                        <h4>Mudah</h4>
                        <p>
                            Bertransaksi di toko kami sangatlah mudah, kamu tinggal klick langsung kirim. 
                            Bahkan Kamu bisa melakukannya sambil ngopi.
                        </p>
                    </div>
                </div>

                <div className="col-sm-4 col-xs-12 mt-2">
                    <div className="one-benefit-wrapper">
                        <FaCcMastercard className="mb-3" fontSize={32} />
                        <h4>Pembayaran</h4>
                        <p>
                            Kalian bisa melakukan pembayaran melalui transfer bank ataupun 
                            menggunakan e-wallet seperti gopay dan sebagainya.
                        </p>
                    </div>
                </div>

                <div className="col-sm-4 col-xs-12 mt-2">
                    <div className="one-benefit-wrapper">
                        <FaRupiahSign className="mb-3" fontSize={28} />
                        <h4>Kompetitif</h4>
                        <p>
                            Temukan harga yang lebih terjangkau dengan barang dan kualitas yang sama pada barang yang kamu beli.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;