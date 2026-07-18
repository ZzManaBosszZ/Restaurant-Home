import LayoutPages from "../../layouts/LayoutPage";
import { useState, useEffect } from "react";
import '../../../public/css/order.css';

function Order() {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const loadOrderDetails = () => {
      const details = JSON.parse(localStorage.getItem('orderDetails'));
      setOrderDetails(details);
    };
    loadOrderDetails();
  }, []);

  const handleSubmitOrder = () => {
    // Gửi thông tin order đến admin hoặc xử lý logic cần thiết
    alert('Order submitted successfully!');
    // Xóa thông tin đơn hàng khỏi localStorage sau khi submit thành công
    localStorage.removeItem('orderDetails');
  };

  if (!orderDetails) {
    return <p>Loading...</p>;
  }

  return (
    <LayoutPages showBreadCrumb={false}>
      <div className="order-summary">
        <div className="order-summary-content">
          <h2 className="order-summary-title">Order Summary</h2>
          <div className="order-summary-info">
            <p><strong>Name:</strong> {orderDetails.customerInfo.name}</p>
            <p><strong>Phone Number:</strong> {orderDetails.customerInfo.phoneNumber}</p>
            <p><strong>Address:</strong> {orderDetails.customerInfo.address}</p>
            <p><strong>Payment Method:</strong> {orderDetails.customerInfo.paymentMethod}</p>
          </div>
          <h3 className="order-summary-total">Total Bill: ${orderDetails.totalPrice}</h3>
          <div className="order-summary-items">
            <ul>
              {orderDetails.cartItems.map(item => (
                <li key={item.id}>
                  {item.name} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          </div>
          <div className="submit-order-button-container">
            <button onClick={handleSubmitOrder} className="submit-order-button">Submit Order</button>
          </div>
        </div>
      </div>
    </LayoutPages>
  );
}

export default Order;
