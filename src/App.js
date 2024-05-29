import "./App.css";
import "./sass/styles.scss";

import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import CartPage from "./pages/cartPage/CartPage";
import Footer from "./components/footer/Footer";

const App = () => (
  <div className="app">
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
