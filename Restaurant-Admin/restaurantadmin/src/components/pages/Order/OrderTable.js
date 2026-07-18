import Layout from "../../layouts";
import BreadCrumb from "../../layouts/BreadCrumb";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import Swal from "sweetalert2";
import config from "../../../config";
import { Link } from "react-router-dom";
function OrderTable() {

    const [orderTable, setOrderTable] = useState([]);
    const [sortField, setSortField] = useState("id");
    const [sortDirection, setSortDirection] = useState("asc");

    //show list data
    useEffect(() => {
        const loadMenus = async () => {
            try {
                const response = await api.get(url.ORDER_TABLE.LIST, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
                setOrderTable(response.data.data);
                // console.log(response.data.data);
            } catch (error) { }
        };
        loadMenus();
    }, []);

    //search, filter
    const [searchName, setSearchName] = useState("");
    const [createdDate, setCreatedDate] = useState("");
    const handleSearchNameChange = (e) => {
        setSearchName(e.target.value);
    };
    const handleCreatedDateChange = (e) => {
        setCreatedDate(e.target.value);
    };

    const handleSort = (field) => {
        const newDirection = sortField === field && sortDirection === "asc" ? "desc" : "asc";
        setSortField(field);
        setSortDirection(newDirection);
    };
    const sortedOrderTables = [...orderTable]
        .filter((item) => {
            const nameMatch = item.name.toLowerCase().includes(searchName.toLowerCase());
            const createdDateMatch = createdDate ? new Date(item.createdDate) >= new Date(createdDate) : true;
            return nameMatch && createdDateMatch;
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

    const paginatedOrderTables = sortedOrderTables.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(sortedOrderTables.length / itemsPerPage);

    return (
        <Layout>
            <BreadCrumb title="Order List" />
            <br />

            <div className="card-header">
                <div className="row page-titles">
                    <div className="col-lg-6">
                        <input
                            type="text"
                            className="form-control input-rounded"
                            placeholder="Search name Menu . . ."
                            value={searchName}
                            onChange={handleSearchNameChange}
                            style={{ fontSize: '15px', padding: '12px' }}
                        />
                    </div>
                    <br />
                    <div className="col-lg-6">
                        <input
                            type="date" // use type "datetime-local" for date and time
                            className="form-control input-rounded"
                            value={createdDate}
                            onChange={handleCreatedDateChange}
                            style={{ fontSize: '15px', padding: '12px' }}
                        />
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
                                                <th onClick={() => handleSort("name")}>Customer Name {sortField === "name" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th onClick={() => handleSort("email")}>Email {sortField === "email" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th onClick={() => handleSort("phone")}>Phone {sortField === "phone" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th onClick={() => handleSort("numberOfPerson")}>Number of Person {sortField === "numberOfPerson" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th onClick={() => handleSort("date")}>Date {sortField === "date" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th onClick={() => handleSort("status")}>Status {sortField === "status" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        {paginatedOrderTables.map((item, index) => {
                                            return (
                                                <tbody>
                                                    <tr>
                                                        <td>{item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.phone}</td>
                                                        <td>{item.numberOfPerson}</td>
                                                        <td>{new Date(item.date).toLocaleDateString()}</td>
                                                        <td>
                                                            <span className={`badge badge-pill ${item.status === 'accepted' ? 'badge-success' : item.status === 'pending' ? 'badge-warning' : 'badge-secondary'}`}>
                                                                {item.status}
                                                            </span>
                                                        </td>
                                                        <td>
                                                        <Link to={`/ordertable-detail/${item.id}`}>
                                                            <a href="javascript:void(0)" class="text-info mr-10" data-toggle="tooltip" data-original-title="Edit">
                                                                <i class="ti-marker-alt"></i>
                                                            </a>
                                                            </Link>
                                                            {/* <a href="javascript:void(0)" class="text-danger" data-original-title="Delete" data-toggle="tooltip">
                                                                <i class="ti-trash"></i>
                                                            </a> */}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            );
                                        })}
                                    </table>
                                </div>
                            </div>
                            <br />
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
            <div style={{ marginTop: '98px' }}></div>
        </Layout>
    )
}

export default OrderTable