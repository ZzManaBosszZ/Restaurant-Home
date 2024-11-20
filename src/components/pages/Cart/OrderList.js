import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import LayoutPages from "../../layouts/LayoutPage";
import BreadCrumb from "../../layouts/BreadCrumb";
import "../../../public/css/OrderList.css";

function OrderList() {
  const breadcrumbPath = [
    { href: "/", label: "Home" },
    { href: "/orders", label: "Orders" },
  ];

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = Cookies.get("access_token");

      if (token) {
        try {
          const response = await axios.get("http://localhost:8080/api/v1/orders", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status === 200) {
            setOrders(response.data.data);  // Assuming the API returns an array of orders
          }
        } catch (error) {
          console.error("Error loading order list:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.error("Invalid or missing token");
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="loading">Loading order list...</div>;
  }

  if (orders.length === 0) {
    return (
      <LayoutPages showBreadCrumb={false}>
        <BreadCrumb title="Orders" path={breadcrumbPath} />
        <div className="empty-order-list-container">
          <p>No orders found.</p>
        </div>
      </LayoutPages>
    );
  }

  return (
    <LayoutPages showBreadCrumb={false}>
      <BreadCrumb title="Order List" path={breadcrumbPath} />
      <div className="order-list-container-page-main">
        <h2 className="page-title-main-section">Order List</h2>
        <div className="order-list-content-container">
          {orders.map((order) => (
            <div key={order.id} className="order-card-item-container">
              <div className="order-card-item-header">
                <h4 className="order-code">{order.orderCode}</h4>
                <p className={`order-status-tag-container order-status-tag-${order.status.toLowerCase()}`}>
                  <strong>Status:</strong> {order.status}
                </p>
              </div>

              <div className="order-info-details-container">
                <p className="order-total">
                  <strong>Total:</strong> ${order.total}
                </p>
              </div>

              <div className="order-actions">
                <Link to={`/order_confirm/${order.id}`} className="view-order-details-button">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="order-list-main-note-container">
          <h3>Note</h3>
          <p>
            Review the details of each order and track their status. If you have any issues,
            contact us at <strong>12345678</strong>.
          </p>
        </div>
      </div>
    </LayoutPages>
  );
}

export default OrderList;
