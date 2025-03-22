import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Policy from "./pages/Policy";

const Navigator = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/checkout/:id" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default Navigator;