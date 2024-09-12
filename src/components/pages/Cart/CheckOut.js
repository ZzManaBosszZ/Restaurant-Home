import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import CSS của React-Toastify
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import LayoutPages from "../../layouts/LayoutPage";
import BreadCrumb from "../../layouts/BreadCrumb";
import config from "../../../config";
import Payment from "../../Payment/index";
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

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("credit");

  const handlePaymentMethodChange = (e) => {
    const method = e.target.value;
    setCustomerInfo(prevInfo => ({ ...prevInfo, paymentMethod: method }));
    setSelectedPaymentMethod(method); // Giả sử bạn có state selectedPaymentMethod
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prevInfo => ({ ...prevInfo, [name]: value }));
  };

  const handlePaymentDetailsChange = (e) => {
    setPaymentDetails(e.target.value);
  };

  const handleSubmit = async () => {
    // e.preventDefault();

    const selectedCartItems = JSON.parse(localStorage.getItem('selectedCartItems')) || [];

    const createOrderPayload = {
      discount: customerInfo.discount || 0,
      foodQuantities: selectedCartItems.map(item => ({
        foodId: item.id,
        quantity: item.quantity
      })),
      paymentMethod: selectedPaymentMethod,
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

  const handlePaymentCancel = (data) => {
    console.log("Payment canceled:", data);

    navigate(`/check_out`);
  };

  const handlePayPalSuccess = async (details) => {
    await handleSubmit();
  };

  return (
    <LayoutPages showBreadCrumb={false}>
      <div className="checkout-area default-padding">
        <div className="container">
          <div className="checkout-content">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={customerInfo.fullName || ''}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={customerInfo.phone || ''}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
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
                <label>Payment Method</label>
                <select
                  name="paymentMethod"
                  value={selectedPaymentMethod || ''}
                  onChange={handlePaymentMethodChange}
                >
                  <option value="card">Credit/Debit Card</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>

              {selectedPaymentMethod === 'card' && (
                <div className="form-group">
                  <label htmlFor="paymentDetails">Card Details</label>
                  <input
                    type="text"
                    id="paymentDetails"
                    value={paymentDetails}
                    onChange={handlePaymentDetailsChange}
                    required
                  />
                </div>
              )}

              {selectedPaymentMethod === 'bank' && (
                <div className="form-group">
                  <label htmlFor="paymentDetails">Bank Transfer Instructions</label>
                  <textarea
                    id="paymentDetails"
                    value={paymentDetails}
                    onChange={handlePaymentDetailsChange}
                    required
                  ></textarea>
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
              <br />

              <Payment
                selectedPaymentMethod={selectedPaymentMethod}
                handleEventPayPal={handlePayPalSuccess}
                handlePaymentCancel={handlePaymentCancel}
                onPaymentMethodChange={handlePaymentMethodChange}
                price={totalPrice}
              />

              {selectedPaymentMethod !== 'paypal' && <button type="submit" className="btn btn-primary">Place Order</button>}
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </LayoutPages>
  );
}

export default CheckOut;
