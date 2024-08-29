import LayoutPages from "../../layouts/LayoutPage";
import { useState, useEffect } from "react";
import '../../../public/css/cart.css';

function CartTab() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCartItems = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(cart);
    };
    loadCartItems();
  }, []);

  const handleQuantityChange = (id, newQuantity) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartItems(cart);
  };

  const handleRemoveItem = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartItems(cart);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <LayoutPages>
      <div className="validtheme-cart-area default-padding">
        <div className="container">
          <h2>Your Cart</h2>
          {cartItems.length > 0 ? (
            <div className="cart-items">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.image} alt={item.name} style={{ width: '100px' }} />
                      </td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        />
                      </td>
                      <td>
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="cart-total">
                <h3>Total Price: ${getTotalPrice()}</h3>
                <button onClick={() => window.location.href='/check_out'}>Check out</button>

              </div>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </LayoutPages>
  );
}

export default CartTab;
