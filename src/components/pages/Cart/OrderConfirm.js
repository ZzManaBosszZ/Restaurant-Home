

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import LayoutPages from "../../layouts/LayoutPage";
import BreadCrumb from "../../layouts/BreadCrumb";
import '../../../public/css/orderConfirm.css';

function OrderConfirm() {
  const { id } = useParams();
  const breadcrumbPath = [
    { href: "/", label: "Home" },
    { href: "/orders", label: "Orders" },
  ];

  const [orderDetail, setOrderDetail] = useState(null);

  const fetchOrderDetail = async () => {
    const token = Cookies.get("access_token");
    if (token) {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/orders/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          setOrderDetail(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching order detail:", error);
      }
    }
  };

  useEffect(() => {
    fetchOrderDetail();
  }, [id]);

  if (!orderDetail) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <LayoutPages showBreadCrumb={false}>
      <BreadCrumb title="Order Confirmation" path={breadcrumbPath} />
      <div className="order-confirm-container">
        <h2>Order Confirmation</h2>
        <div className="order-confirm-details">
          <table>
            <tbody>
              <tr>
                <td><strong>Order Code:</strong></td>
                <td>{orderDetail.orderCode}</td>
              </tr>
              <tr>
                <td><strong>Status:</strong></td>
                <td>{orderDetail.status}</td>
              </tr>
              <tr>
                <td><strong>Total:</strong></td>
                <td>${orderDetail.total}</td>
              </tr>
              <tr>
                <td><strong>Customer Name:</strong></td>
                <td>{orderDetail.orderDetail.user.fullName}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{orderDetail.orderDetail.user.email}</td>
              </tr>
              <tr>
                <td><strong>Phone:</strong></td>
                <td>{orderDetail.orderDetail.user.phone }</td>
              </tr>
              <tr>
                <td><strong>Address:</strong></td>
                <td>{orderDetail.orderDetail.user.address }</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="order-items">
          <h3>Order Items</h3>
          {orderDetail.orderDetail.foodOrderDetails.map((item) => (
            <div key={item.id} className="order-item">
              <img src={item.food.image} alt={item.food.name} />
              <div>
                <p><strong>{item.food.name}</strong></p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.unitPrice}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="order-confirm-note">
          <h3>Note Information</h3>
          <p>
            Your order has been successfully placed. Please review the details carefully. 
            If you have any issues, contact us at <strong>12345678</strong>.
          </p>
          <p>
            Ensure to track the status of your order in your account or via the provided 
            email updates. Thank you for choosing us!
          </p>
        </div>

        <div className="button_confirm-container">
          <button
            className="button-confirm-page"
            onClick={() => (window.location.href = "/shop")}
          >
            Okay, I understand <i className="fa-regular fa-face-smile-wink"></i>
          </button>
        </div>
      </div>
    </LayoutPages>
  );
}

export default OrderConfirm;
