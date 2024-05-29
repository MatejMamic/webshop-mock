import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      <h2>{product.title}</h2>
      <p>{product.price}$</p>
      <img src={product.image} alt={product.title} style={{ width: "100px" }} />
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
