import NavigationBar from '../components/NavigatonBar';
import '../styles/index.css';
import logo from '../assets/logo.png';

const AboutUs = () => (
    <>
        <div className="container">
            <div className="top-strip">
                <img src={ logo } alt="Banner" className="logo m-3" />
                <NavigationBar activeIndex={1} />            
            </div>

            <div className="row about-us">
                <div className="col-md-6">
                    <h1>Produk berkualitas harga Kompetitif</h1>
                </div>

                <div className="col-md-6">
                    <p className="about-highlight">
                        Kami adalah toko dropshiper yang menjual berbagai macam barang, mulai dari pakaian, barang  elektronik dan lainnya. 
                    </p>

                    <p>
                        Tujuan kami adalah membantu mempertemukan para pemilik usaha dengan para pembeli supaya mereka mendapatkan keuntungan masing-masing. Pembeli mendapatkan barang yang diinginkan dengan harga yang bersaing, dan pemilik usaha bisa menjualkan barang yang dimilikinya.
                    </p>
                </div>
            </div>
        </div>
    </>
)

export default AboutUs;