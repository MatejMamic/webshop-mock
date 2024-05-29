import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  // Function to handle quantity change
  const handleQuantityChange = (event, itemId) => {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(itemId, newQuantity);
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <p>
                    {item.title} - ${item.price}
                    <select
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(e, item.id)}
                    >
                      {[...Array(10)].map((_, index) => (
                        <option key={index} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </select>
                  </p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="product-image"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartPage;
