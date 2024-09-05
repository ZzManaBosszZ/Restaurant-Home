import { useState, useEffect } from "react";
import LayoutPages from "../../layouts/LayoutPage";
import '../../../public/css/checkout.css';

function CheckOut() {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    paymentMethod: '',
  });

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentDetails, setPaymentDetails] = useState({});

  useEffect(() => {
    const loadCartItems = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(cart);
      calculateTotal(cart);
    };
    loadCartItems();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePaymentMethodChange = (e) => {
    const paymentMethod = e.target.value;
    setCustomerInfo(prevState => ({
      ...prevState,
      paymentMethod
    }));
    setPaymentDetails({});
  };

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const calculateTotal = (cart) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    setTotalPrice(total);
  };

  const renderPaymentDetails = () => {
    switch (customerInfo.paymentMethod) {
      case 'card':
        return (
          <div className="payment-details-section">
            <h4>Card Details</h4>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              onChange={handlePaymentDetailsChange}
            />
            <input
              type="text"
              name="cardHolder"
              placeholder="Card Holder Name"
              onChange={handlePaymentDetailsChange}
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date"
              onChange={handlePaymentDetailsChange}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              onChange={handlePaymentDetailsChange}
            />
          </div>
        );
      case 'bankTransfer':
        return (
          <div className="payment-details-section">
            <h4>Bank Transfer Details</h4>
            <p>Please transfer to the following account:</p>
            <p>Bank: ABC Bank</p>
            <p>Account Name: FoodRes</p>
            <p>Account Number: 123456789</p>
            <input
              type="text"
              name="transferReference"
              placeholder="Transfer Reference"
              onChange={handlePaymentDetailsChange}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const orderDetails = {
      customerInfo,
      paymentDetails,
      cartItems,
      totalPrice,
    };

    // Lưu thông tin vào localStorage
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    // Chuyển hướng đến trang Order
    window.location.href = '/order';
  };

  return (
    <LayoutPages showBreadCrumb={false}>
      <div className="checkout-container">
        <div className="checkout-content">
          <h2 className="checkout-title">Check Out</h2>
          <form onSubmit={handleSubmit}>
            <div className="customer-info-section">
              <h4>Customer Information</h4>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={customerInfo.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={customerInfo.phoneNumber}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={customerInfo.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="payment-method-section">
              <h4>Payment Method</h4>
              <select
                name="paymentMethod"
                value={customerInfo.paymentMethod}
                onChange={handlePaymentMethodChange}
                required
              >
                <option value="">Select Payment Method</option>
                <option value="card">Card</option>
                <option value="bankTransfer">Bank Transfer</option>
              </select>
              {renderPaymentDetails()}
            </div>

            <div className="order-summary-section">
              <h4>Order Summary</h4>
              <ul>
                {cartItems.map(item => (
                  <li key={item.id}>
                    {item.name} - ${item.price} x {item.quantity}
                  </li>
                ))}
              </ul>
              <h3>Total: ${totalPrice}</h3>
            </div>
            <div className="submit-check-button-container">
            <button type="submit" className="submit-button">Place Order</button>
            </div>
          </form>
        </div>
      </div>
    </LayoutPages>
  );
}

export default CheckOut;
