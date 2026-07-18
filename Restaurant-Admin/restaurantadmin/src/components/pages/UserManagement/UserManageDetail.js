import Layout from "../../layouts";
import BreadCrumb from "../../layouts/BreadCrumb";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";

function UserManagementDetail() {
    const { userId } = useParams();
    const [userData, setUserData] = useState({});
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of orders per page

    // Fetch User Detail and Order History
    const loadData = useCallback(async () => {
        try {
            const userDetailRequest = await api.get(url.USER.DETAIL.replace("{}", userId), {
                headers: { Authorization: `Bearer ${getAccessToken()}` },
            });
            setUserData(userDetailRequest.data.data.user);
            setOrders(userDetailRequest.data.data.orders);
        } catch (error) {
            console.error("Failed to fetch user detail:", error);
        }
    }, [userId]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    // Pagination Logic
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedOrders = orders?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    ) || [];
    
    const totalPages = Math.ceil(orders.length / itemsPerPage) || 0;

    return (
        <Layout>
            <BreadCrumb title="User Management Detail" />
            <section className="content">
                <div className="row">
                    <div className="col-xxxl-4 col-12">
                        <div className="box">
                            <div className="box-body">
                                <div className="d-flex align-items-center">
                                    <img className="mr-10 rounded-circle avatar avatar-xl b-2 border-primary" src="../images/avatar/1.jpg" alt="" />
                                    <div>
                                        <h4 className="mb-0">{userData?.fullName || "N/A"}</h4>
                                        <span className="font-size-14 text-info">Customer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-body border-bottom">
                                <div className="d-flex align-items-center">
                                    <i className="fa fa-phone mr-10 font-size-24"></i>
                                    <h4 className="mb-0">+84 {userData?.phone || "Not Added"}</h4>
                                </div>
                            </div>
                            <div className="box-body border-bottom">
                                <div className="d-flex align-items-center">
                                    <i className="fa fa-map-marker mr-10 font-size-24"></i>
                                    <h4 className="mb-0 text-black">{userData?.address || "Not Added"}</h4>
                                </div>
                            </div>
                            <div className="box-body border-bottom">
                                <div className="d-flex align-items-center">
                                    <i className="fa fa-envelope mr-10 font-size-24"></i>
                                    <h4 className="mb-0 text-black">{userData?.email || "Not Added"}</h4>
                                </div>
                            </div>
                        </div>

                        {/* Order History Section */}
                        <div className="box mt-3">
                            <div className="box-header no-border d-flex justify-content-between align-items-center">
                                <h4 className="box-title">Order History</h4>
                                <span className="badge badge-primary" style={{ fontSize: "16px", padding: "10px 20px" }}>
                                    Total Orders: {orders.length}
                                </span>
                            </div>
                            <div className="box-body">
                                <table className="table table-bordered">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedOrders.map((order) => (
                                            <tr key={order.id}>
                                                <td>{order.id}</td>
                                                <td>{new Date(order.createdDate).toLocaleDateString()}</td>
                                                <td>{order.status}</td>
                                                <td>${order.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="pagination d-flex justify-content-center mt-3">
                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <button
                                            key={index + 1}
                                            className={`page-item btn ${currentPage === index + 1 ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
                                            onClick={() => handlePageChange(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default UserManagementDetail;
