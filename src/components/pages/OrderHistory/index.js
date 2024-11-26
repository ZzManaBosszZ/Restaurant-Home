import React, { useState, useEffect } from 'react';
import LayoutPages from '../../layouts/LayoutPage';
import api from '../../../services/api';
import { getAccessToken } from '../../../utils/auth';
import url from '../../../services/url'; 
import "../../../public/css/orderhistory.css";

function Orders() {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadOrders = async () => {
            try {
                const response = await api.get("http://localhost:8080/api/v1/orders/history", {
                    headers: { Authorization: `Bearer ${getAccessToken()}` },
                });
                setOrders(response.data.data); 
            } catch (error) {
                console.error("Error loading orders:", error);
                setError("Error loading orders. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        loadOrders();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <LayoutPages>
            <div className="orders-container">
                <h1>Orders List</h1>

                {error && <p className="error">{error}</p>}

                {orders.length > 0 ? (
                    <div className="orders-list">
                        {orders.map((order) => (
                            <div className="orders-item" key={order.id}>
                                <h4>Order #{order.id}</h4>
                                <p>Status: {order.status}</p>
                                <p>Amount: ${order.total}</p>
                                {order.createdDate ? (
                                        <p>Created at: {new Date(order.createdDate).toLocaleString()}</p>
                                    ) : (
                                        <p>Created at: N/A</p>
                                    )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No orders found.</p>
                )}
            </div>
        </LayoutPages>
    );
}

export default Orders;