import NavigationBar from '../components/NavigatonBar';
import '../styles/index.css';
import logo from '../assets/logo.png';

const Policy = () => (
    <>
        <div className="container">
            <div className="top-strip">
                <img src={ logo } alt="Banner" className="logo m-3" />
                <NavigationBar activeIndex={2} />            
            </div>

            <div className="row about-us">
                <div className="col">
                    <p className="about-highlight">
                        Temukan berbagai produk terbaik dengan harga bersaing hanya di <strong>h.m.m</strong>! Dari kebutuhan sehari-hari hingga barang eksklusif, semuanya tersedia dalam satu genggaman.
                    </p>

                    <ul>
                        <li>Pilihan Produk Lengkap</li>
                        <li>Transaksi Aman & Mudah</li>
                        <li>Pengiriman Cepat ke Seluruh Indonesia</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
)

export default Policy;