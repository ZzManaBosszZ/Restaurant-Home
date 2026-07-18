import Layout from "../../layouts";
import BreadCrumb from "../../layouts/BreadCrumb";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import config from "../../../config";
import { Link } from "react-router-dom";

function UserManagement() {
    const [users, setUsers] = useState([]);
    const [sortField, setSortField] = useState("id");
    const [sortDirection, setSortDirection] = useState("asc");

    //show list data
    useEffect(() => {
        const loadUsers = async () => {
            try {
                const response = await api.get(url.USER.LIST, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
                setUsers(response.data.data);
            } catch (error) {
                console.error("Error loading users", error);
            }
        };
        loadUsers();
    }, []);

    //search, filter
    const [searchUser, setSearchUser] = useState("");
    const [createdDate, setCreatedDate] = useState("");
    const handleSearchUserChange = (e) => {
        setSearchUser(e.target.value);
    };
    const handleCreatedDateChange = (e) => {
        setCreatedDate(e.target.value);
    };

    const handleSort = (field) => {
        const newDirection = sortField === field && sortDirection === "asc" ? "desc" : "asc";
        setSortField(field);
        setSortDirection(newDirection);
    };

    const sortedUsers = [...users]
        .filter((item) => {
            const userMatch = item.fullName.toLowerCase().includes(searchUser.toLowerCase());
            const createdDateMatch = createdDate ? new Date(item.createdDate) >= new Date(createdDate) : true;
            return userMatch && createdDateMatch;
        })
        .sort((a, b) => {
            if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1;
            if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1;
            return 0;
        });

    //paginate
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Number of items per page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginatedUsers = sortedUsers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);

    return (
        <Layout>
            <BreadCrumb title="User Management" />
            <br />

            <div className="card-header">
                <div className="row page-titles">
                    <div className="col-lg-6">
                        <input
                            type="text"
                            className="form-control input-rounded"
                            placeholder="Search User . . ."
                            value={searchUser}
                            onChange={handleSearchUserChange}
                            style={{ fontSize: '15px', padding: '12px' }}
                        />
                    </div>
                    <div className="col-lg-6">
                        <input
                            type="date"
                            className="form-control input-rounded"
                            value={createdDate}
                            onChange={handleCreatedDateChange}
                            style={{ fontSize: '15px', padding: '12px' }}
                        />
                    </div>
                </div>

                {/* <div className="mt-3 px-3">
                    <div className="d-flex align-items-center justify-content-end gap-3">
                        <Link to={config.routes.user_create} className="btn btn-primary d-flex align-items-center justify-content-center">
                            <i className="ti ti-plus"></i> Add New User
                        </Link>
                    </div>
                </div> */}
            </div>

            <br />
            <section className="content">
                <div className="row">
                    <div className="col-12">
                        <div className="box">
                            <div className="box-body">
                                <div className="table-responsive">
                                    <table className="table table-hover no-wrap">
                                        <thead>
                                            <tr>
                                                <th onClick={() => handleSort("fullName")}>Full Name {sortField === "fullName" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th onClick={() => handleSort("email")}>Email {sortField === "email" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                <th onClick={() => handleSort("phone")}>Phone {sortField === "phone" && (sortDirection === "asc" ? "🔼" : "🔽")}</th>
                                                {/* <th onClick={() => handleSort("createdDate")}>Created Date {sortField === "createdDate" && (sortDirection === "asc" ? "🔼" : "🔽")}</th> */}
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        {paginatedUsers.map((user, index) => (
                                            <tbody key={index}>
                                                <tr>
                                                    <td>{user.fullName}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone ? user.phone : "Not Add"}</td>
                                                    <td>
                                                        <Link to={`/user-detail/${user.id}`}>
                                                            <a className="text-info mr-10" data-toggle="tooltip" data-original-title="Edit">
                                                                <i className="ti-marker-alt"></i>
                                                            </a>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))}

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
        </Layout>
    );
}

export default UserManagement;
