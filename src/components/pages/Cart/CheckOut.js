import { useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";

function CheckOut() {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    paymentMethod: ""
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const orderResponse = await api.post(url.ORDER.CREATE, {
        name: customerInfo.name,
        phoneNumber: customerInfo.phoneNumber,
        address: customerInfo.address,
        paymentMethod: customerInfo.paymentMethod,
        totalPrice: totalPrice
      }, {
        headers: {
          'Authorization': `Bearer ${getAccessToken()}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (orderResponse.status === 200) {
        console.log('Order created successfully.');
        localStorage.removeItem('cart'); // Xóa giỏ hàng sau khi đặt hàng
        window.location.href = '/order'; // Điều hướng đến trang đơn hàng nếu cần
      } else {
        const errorText = await orderResponse.text();
        console.error('Error creating order:', errorText);
        alert('Error creating order. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={customerInfo.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={customerInfo.phoneNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={customerInfo.address}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="paymentMethod">Payment Method:</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={customerInfo.paymentMethod}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="card">Card</option>
          <option value="bank_transfer">Bank Transfer</option>
        </select>
      </div>
      <div>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
      <button type="submit">Place Order</button>
    </form>
  );
}

export default CheckOut;
