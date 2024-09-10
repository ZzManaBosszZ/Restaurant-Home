import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import LayoutPages from "../../layouts/LayoutPage";
import BreadCrumb from "../../layouts/BreadCrumb";
import config from "../../../config";

function CheckOut() {
  const [customerInfo, setCustomerInfo] = useState({});
  const [paymentDetails, setPaymentDetails] = useState('');
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [totalPrice, setTotalPrice] = useState(cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0));
  
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await api.get(url.AUTH.PROFILE, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
        setCustomerInfo(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error loading profile:", error);
      }
    };
    loadProfile();
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

    const createOrderPayload = {
      discount: customerInfo.discount || 0, // Discount nếu có
      foodQuantities: cartItems.map(item => ({
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
        Swal.fire({
          title: 'Order Created',
          text: 'Your order has been created successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        setTimeout(() => {
          navigate(config.routes.order); //chuyển đến trang order-history
      }, 3000);

      } else {
        const errorText = await orderResponse.text();
        console.error('Error creating order:', errorText);

        Swal.fire({
          title: 'Error',
          text: 'There was an error creating your order. Please try again.',
          icon: 'error',
          confirmButtonText: 'Retry'
        });
      }
    } catch (error) {
      console.error('Network error:', error);

      Swal.fire({
        title: 'Network Error',
        text: 'There was a problem connecting to the server. Please try again.',
        icon: 'error',
        confirmButtonText: 'Retry'
      });
    }
  };

  return (
    <LayoutPages showBreadCrumb={true}>
      <BreadCrumb title="Checkout" path={breadcrumbPath} />
      <div className="checkout-area default-padding">
        <div className="container">
          <div className="checkout-content">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
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
                  value={customerInfo.paymentMethod || ''}
                  onChange={handlePaymentMethodChange}
                >
                  <option value="card">Credit/Debit Card</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>

              {customerInfo.paymentMethod === 'card' && (
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

              {customerInfo.paymentMethod === 'bank' && (
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
                  {cartItems.map(item => (
                    <li key={item.id}>
                      {item.name} x {item.quantity} - ${item.price * item.quantity}
                    </li>
                  ))}
                </ul>
                <p>Total: ${totalPrice}</p>
              </div>

              <button type="submit" className="btn btn-primary">Place Order</button>
            </form>
          </div>
        </div>
      </div>
    </LayoutPages>
  );
}

export default CheckOut;
