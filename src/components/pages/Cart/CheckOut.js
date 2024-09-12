import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import LayoutPages from "../../layouts/LayoutPage";
import BreadCrumb from "../../layouts/BreadCrumb";
import config from "../../../config";
import '../../../public/css/checkout.css';

function CheckOut() {
  const [customerInfo, setCustomerInfo] = useState({});
  const [paymentDetails, setPaymentDetails] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await api.get(url.AUTH.PROFILE, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
        setCustomerInfo(response.data.data);
        console.log(response.data.data); // Thêm kiểm tra dữ liệu nếu cần
      } catch (error) {
        console.error("Error loading profile:", error);
      }
    };

    const loadCartItems = () => {
      const cart = JSON.parse(localStorage.getItem('selectedCartItems')) || [];
      setCartItems(cart);
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setTotalPrice(total);
    };

    loadProfile();
    loadCartItems();
  }, []);

  const breadcrumbPath = [
    { href: "/", label: "Home" },
    { href: "/checkout", label: "Checkout" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prevInfo => ({ ...prevInfo, [name]: value }));
  };

  const handlePaymentMethodChange = (e) => {
    setCustomerInfo(prevInfo => ({ ...prevInfo, paymentMethod: e.target.value }));
  };

  const handlePaymentDetailsChange = (e) => {
    setPaymentDetails(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedCartItems = JSON.parse(localStorage.getItem('selectedCartItems')) || [];

    const createOrderPayload = {
      discount: customerInfo.discount || 0,
      foodQuantities: selectedCartItems.map(item => ({
        foodId: item.id,
        quantity: item.quantity
      }))
    };

    try {
      const orderResponse = await api.post(url.ORDER.CREATE, createOrderPayload, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          'Content-Type': 'application/json'
        }
      });

      if (orderResponse.status === 201) {
        toast.success('Your order has been created successfully!');

        // Remove selected items from local storage cart
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => !selectedCartItems.some(selectedItem => selectedItem.id === item.id));
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Clear selected items from local storage
        localStorage.removeItem('selectedCartItems');

        setTimeout(() => {
          navigate(config.routes.order); // Navigate to order history page
        }, 3000);
      } else {
        const errorText = await orderResponse.text();
        console.error('Error creating order:', errorText);
        toast.error('There was an error creating your order. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      toast.error('There was a problem connecting to the server. Please try again.');
    }
  };

  return (
    <LayoutPages showBreadCrumb={false}>     
      <div className="checkout-area default-padding">
        <div className="container">
          <div className="checkout-content">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={customerInfo.name || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={customerInfo.phoneNumber || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={customerInfo.address || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Payment Method:</label>
                <select
                  name="paymentMethod"
                  value={customerInfo.paymentMethod || ''}
                  onChange={handlePaymentMethodChange}
                  required
                >
                  <option value="">Select Payment Method</option>
                  <option value="card">Card</option>
                  <option value="bankTransfer">Bank Transfer</option>
                </select>
              </div>
              {customerInfo.paymentMethod === 'card' && (
                <div className="form-group">
                  <label htmlFor="cardDetails">Card Details:</label>
                  <input
                    type="text"
                    id="cardDetails"
                    name="cardDetails"
                    value={paymentDetails}
                    onChange={handlePaymentDetailsChange}
                    required
                  />
                </div>
              )}
              {customerInfo.paymentMethod === 'bankTransfer' && (
                <div className="form-group">
                  <label htmlFor="transferInstructions">Transfer Instructions:</label>
                  <input
                    type="text"
                    id="transferInstructions"
                    name="transferInstructions"
                    value={paymentDetails}
                    onChange={handlePaymentDetailsChange}
                    required
                  />
                </div>
              )}
              <div className="order-summary">
                <h3>Order Summary</h3>
                <ul>
                  {cartItems.filter(item => JSON.parse(localStorage.getItem('selectedCartItems') || []).some(selectedItem => selectedItem.id === item.id)).map(item => (
                    <li key={item.id}>
                      {item.name} x {item.quantity} - ${item.price * item.quantity}
                    </li>
                  ))}
                </ul>
                <p>Total: ${totalPrice}</p>
              </div>
              <div className="checkout-button">
                <button type="submit" className="btn btn-primary">Place Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </LayoutPages>
  );
}

export default CheckOut;
