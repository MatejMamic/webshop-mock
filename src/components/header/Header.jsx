import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  </header>
);

export default Header;
