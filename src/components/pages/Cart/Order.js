import LayoutPages from "../../layouts/LayoutPage";
import { useState, useEffect } from "react";

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
    <LayoutPages>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <p><strong>Name:</strong> {orderDetails.customerInfo.name}</p>
        <p><strong>Phone Number:</strong> {orderDetails.customerInfo.phoneNumber}</p>
        <p><strong>Address:</strong> {orderDetails.customerInfo.address}</p>
        <p><strong>Payment Method:</strong> {orderDetails.customerInfo.paymentMethod}</p>
        <h3>Total Bill: ${orderDetails.totalPrice}</h3>
        <ul>
          {orderDetails.cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <button onClick={handleSubmitOrder}>Submit Order</button>
      </div>
    </LayoutPages>
  );
}

export default Order;
