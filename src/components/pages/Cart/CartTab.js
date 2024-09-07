import LayoutPages from "../../layouts/LayoutPage";
import { useState, useEffect } from "react";
import axios from 'axios';  // Import Axios for API calls
import '../../../public/css/cart.css';

function CartTab() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const loadCartItems = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(cart);
    };
    loadCartItems();
  }, []);

  useEffect(() => {
    if (selectAll) {
      setSelectedItems(new Set(cartItems.map(item => item.id)));
    } else {
      setSelectedItems(new Set());
    }
  }, [selectAll, cartItems]);

  const handleQuantityChange = (id, newQuantity) => {
    let cart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(cart);
  };

  const handleRemoveItem = (id) => {
    let cart = cartItems.filter(item => item.id !== id);
    setCartItems(cart);
  };

  const handleSelectItem = (id) => {
    const newSelectedItems = new Set(selectedItems);
    if (newSelectedItems.has(id)) {
      newSelectedItems.delete(id);
    } else {
      newSelectedItems.add(id);
    }
    setSelectedItems(newSelectedItems);
  };

  const handleSelectAll = () => {
    setSelectAll(true);
  };

  const handleDeselectAll = () => {
    setSelectAll(false);
  };

  const getTotalPrice = () => {
    const total = cartItems
      .filter(item => selectedItems.has(item.id))
      .reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toFixed(2);
  };

  const handleCheckout = async () => {
    const selectedCartItems = cartItems.filter(item => selectedItems.has(item.id));
    const orderDetails = selectedCartItems.map(item => ({
      foodId: item.id,
      quantity: item.quantity,
      unitPrice: item.price,
      discount: item.discount || 0,
    }));

    try {
      // Replace 'http://localhost:8080/api/order-details' with your API endpoint
      const response = await axios.post('http://localhost:8080/api/order-details', {
        orderDetails,
      });

      if (response.status === 200) {
        console.log('Order details saved successfully!');
        window.location.href = '/check_out';  // Redirect to the checkout page
      } else {
        console.error('Failed to save order details');
      }
    } catch (error) {
      console.error('Error while saving order details:', error);
    }
  };

  return (
    <LayoutPages showBreadCrumb={false}>
      <div className="cart-tab-container">
        <div className="cart-tab-content">
          <h2 className="cart-tab-title">Your Cart</h2>
          {cartItems.length > 0 ? (
            <div className="cart-tab-items">
              <div className="cart-tab-select-actions">
                <label>
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={(e) => setSelectAll(e.target.checked)}
                  />
                  Select All Items
                </label>
              </div>
              <table className="cart-tab-table">
                <thead>
                  <tr>
                    <th className="cart-tab-header">Select</th>
                    <th className="cart-tab-header">Image</th>
                    <th className="cart-tab-header">Name</th>
                    <th className="cart-tab-header">Price</th>
                    <th className="cart-tab-header">Quantity</th>
                    <th className="cart-tab-header">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id} className="cart-tab-item">
                      <td className="cart-tab-select">
                        <input
                          type="checkbox"
                          checked={selectedItems.has(item.id)}
                          onChange={() => handleSelectItem(item.id)}
                        />
                      </td>
                      <td className="cart-tab-image">
                        <img src={item.image} alt={item.name} style={{ width: '100px' }} />
                      </td>
                      <td className="cart-tab-name">{item.name}</td>
                      <td className="cart-tab-price">${item.price}</td>
                      <td className="cart-tab-quantity">
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        />
                      </td>
                      <td className="cart-tab-actions">
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="cart-tab-total">
                <h3>Total Price: ${getTotalPrice()}</h3>
                {/* <button onClick={handleCheckout} href="/check_out">Check out</button> */}
                <button onClick={() => window.location.href='/check_out'}>Check out</button>

              </div>
            </div>
          ) : (
            <p className="cart-tab-empty">Your cart is empty.</p>
          )}
        </div>
      </div>
    </LayoutPages>
  );
}

export default CartTab;
