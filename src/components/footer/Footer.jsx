import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Footer = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  if (totalPrice === 0) return null;
  return (
    <footer className="footer">
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button className="button checkout-button">Checkout</button>
    </footer>
  );
};

export default Footer;
