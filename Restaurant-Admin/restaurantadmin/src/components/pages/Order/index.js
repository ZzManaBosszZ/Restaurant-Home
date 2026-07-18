import Layout from "../../layouts";
import BreadCrumb from "../../layouts/BreadCrumb";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import { Link } from "react-router-dom";
function OrderList() {

    const [order, setOrder] = useState([]);
    const [sortField, setSortField] = useState("id");
    const [sortDirection, setSortDirection] = useState("asc");

    const hashCode = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0; // Convert to 32-bit integer
        }
        return Math.abs(hash);
    };

    // Generate the Order code based on the hashed orderCode
    const generateOrderCode = (orderCode) => {
        const hash = hashCode(orderCode);
        const orderNumber = hash % 1000; // Ensure a 6-digit number
        return `ODR${orderNumber.toString().padStart(3, '0')}`;
    };

    //show list data
    useEffect(() => {
        const loadMenus = async () => {
            try {
                const response = await api.get(url.ORDER.LIST, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
                setOrder(response.data.data);
                // console.log(response.data.data);
            } catch (error) { }
        };
        loadMenus();
    }, []);

    //search, filter
    const [searchOrder, setSearchOrder] = useState("");
    const [searchStatus, setSearchStatus] = useState("");
    const [createdDate, setCreatedDate] = useState("");
    const handleSearchOrderChange = (e) => {
        setSearchOrder(e.target.value);
    };

    const handleSearchStatusChange = (e) => {
        setSearchStatus(e.target.value);
    };

    const handleCreatedDateChange = (e) => {
        setCreatedDate(e.target.value);
    };

    const handleSort = (field) => {
        const newDirection = sortField === field && sortDirection === "asc" ? "desc" : "asc";
        setSortField(field);
        setSortDirection(newDirection);
    };
    const sortedOrders = [...order]
        .filter((item) => {
            const orderMatch = item.createdBy.toLowerCase().includes(searchOrder.toLowerCase());
            const statusMatch = searchStatus ? item.status.toLowerCase() === searchStatus.toLowerCase() : true; // Kiểm tra trạng thái chính xác
            const createdDateMatch = createdDate
                ? new Date(item.createdDate).toISOString().split('T')[0] === createdDate
                : true;
            return orderMatch && createdDateMatch && statusMatch;
        })
        .sort((a, b) => {
            if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1;
            if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1;
            return 0;
        });

    //paginate
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Number of items per page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedOrders = sortedOrders.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);

    return (
        <Layout>
            <BreadCrumb title="Order List" />
            <br />

            <div className="card-header">
                <div className="row page-titles">
                    <div className="col-lg-4">
                        <input
                            type="text"
                            className="form-control input-rounded"
                            placeholder="Search Customer . . ."
                            value={searchOrder}
                            onChange={handleSearchOrderChange}
                            style={{ fontSize: '15px', padding: '12px' }}
                        />
                    </div>
                    <div className="col-lg-4">
                        <input
                            type="date" // use type "datetime-local" for date and time
                            className="form-control input-rounded"
                            value={createdDate}
                            onChange={handleCreatedDateChange}
                            style={{ fontSize: '15px', padding: '12px' }}
                        />
                    </div>
                    <div className="col-lg-4">
                        <select
                            className="form-control input-rounded"
                            value={searchStatus}
                            onChange={handleSearchStatusChange}
                            style={{ fontSize: '15px', padding: '12px' }}
                        >
                            <option value="">All</option>
                            <option value="paid">Paid</option>
                            <option value="pending">Pending</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>

                </div>


            </div>

            <br />
            <section class="content">
                <div class="row">
                    <div class="col-12">
                        <div class="box">
                            <div class="box-body">
                                <div class="table-responsive">
                                    <table id="" class="table table-hover no-wrap product-order" data-page-size="10">
                                        <thead>
                                            <tr>
                                                <th onClick={() => handleSort("createdBy")}>Customer Name {sortField === "createdBy" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th onClick={() => handleSort("order_code")}>Order Code {sortField === "order_code" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th onClick={() => handleSort("total")}>Total {sortField === "total" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th onClick={() => handleSort("createdDate")}>Created Date {sortField === "createdDate" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th onClick={() => handleSort("status")}>Status {sortField === "status" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        {paginatedOrders.map((item, index) => {
                                            return (
                                                <tbody>
                                                    <tr>
                                                        <td>{item.createdBy}</td>
                                                        <td>{generateOrderCode(item.orderCode)}</td> {/* Sử dụng mã đơn hàng đã được hash từ orderCode */}
                                                        <td>{item.total}$</td>
                                                        <td>{new Date(item.createdDate).toLocaleDateString()}</td>
                                                        <td>
                                                            <span className={`badge badge-pill ${item.status === 'paid' ? 'badge-success' : item.status === 'pending' ? 'badge-warning' : 'badge-secondary'}`}>
                                                                {item.status}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <Link to={`/order-detail/${item.id}`}>
                                                                <a class="text-info mr-10" data-toggle="tooltip" data-original-title="Edit">
                                                                    <i class="ti-marker-alt"></i>
                                                                </a>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            );
                                        })}
                                    </table>
                                </div>
                            </div>
                            {/* Pagination Controls */}
                            <div className="pagination">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index + 1}
                                        className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ marginTop: "50px" }}></div>
        </Layout>
    )
}

export default OrderList