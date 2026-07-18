import Layout from "../../layouts";
import BreadCrumb from "../../layouts/BreadCrumb";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import config from "../../../config";
function FoodList() {


    const [foods, setFoods] = useState([]);

    //show list data
    useEffect(() => {
        const loadFoods = async () => {
            try {
                const response = await api.get(url.FOOD.LIST, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
                setFoods(response.data.data);
                // console.log(response.data.data);
            } catch (error) { }
        };
        loadFoods();
    }, []);

    //search, filter
    const [searchName, setSearchName] = useState("");
    const [searchDescription, setSearchDescription] = useState("");
    const [createdDate, setCreatedDate] = useState("");
    const handleSearchNameChange = (e) => {
        setSearchName(e.target.value);
    };
    const handleSearchDescriptionChange = (e) => {
        setSearchDescription(e.target.value);
    };
    const handleCreatedDateChange = (e) => {
        setCreatedDate(e.target.value);
    };
    const filteredFoods = foods.filter((item) => {
        const nameMatch = item.name.toLowerCase().includes(searchName.toLowerCase());
        const descriptionMatch = item.description.toLowerCase().includes(searchDescription.toLowerCase());
        const createdDateMatch = createdDate ? new Date(item.createdDate) >= new Date(createdDate) : true;
        return nameMatch && descriptionMatch && createdDateMatch;
    });

    // delete data
    const handleDeleteData = async (id) => {
        const selectedDataIds = [id];

        const isConfirmed = await Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this Food?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "I'm sure",
        });
        if (isConfirmed.isConfirmed) {
            try {
                const deleteResponse = await api.delete(url.FOOD.DELETE, {
                    headers: { Authorization: `Bearer ${getAccessToken()}` },
                    "Content-Type": "application/json",
                    data: selectedDataIds,
                });
                if (deleteResponse.status === 200) {
                    setFoods((prevData) => prevData.filter((data) => !selectedDataIds.includes(data.id)));
                    Swal.fire({
                        text: "Delete Food Successfully.",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });
                }
            } catch (error) {
                if (error.response.status === 400) {
                    Swal.fire({
                        text: "This Food can't delete",
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });
                } else {
                    Swal.fire({
                        text: "An error occurred while deleting food",
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });
                }
            }
        }
    };

    //paginate
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Number of items per page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const paginatedFoods = filteredFoods.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);

    return (
        <Layout>
            <BreadCrumb title="Food List" />
            <div className="card-header">
                <div className="row page-titles">
                    <div className="col-lg-4">
                        <input
                            type="text"
                            className="form-control input-rounded"
                            placeholder="Search name food . . ."
                            value={searchName}
                            onChange={handleSearchNameChange}
                            style={{ fontSize: '15px', padding: '12px' }}
                        />
                    </div>
                    <div className="col-lg-4">
                        <input
                            type="text"
                            className="form-control input-rounded"
                            placeholder="Search description food . . ."
                            value={searchDescription}
                            onChange={handleSearchDescriptionChange}
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
                </div>

                <div className=" mt-3 px-3">
                    <div className="d-flex align-items-center justify-content-end gap-3">
                        <Link to={config.routes.food_create} className="btn btn-primary d-flex align-items-center justify-content-center">
                            <i className="ti ti-plus"></i> Add New Food
                        </Link>
                    </div>
                </div>
            </div>
            <section class="content">
                <div class="row fx-element-overlay">
                    {paginatedFoods.map((item, index) => {
                        return (
                            <div class="col-12 col-lg-6 col-xl-4">
                                <div class="box box-default">
                                    <div class="fx-card-item">
                                        <div class="fx-card-avatar fx-overlay-1 "> <img src={item.image} alt="user" />
                                            <div class="fx-overlay">
                                                <ul class="fx-info">
                                                    <li><Link to={`/food-detail/${item.id}`} className="btn btn-outline ">
                                                        <i className="ti ti-eye f-18"></i>
                                                    </Link></li>
                                                    <li><Link to={`/food-edit/${item.id}`} className="btn btn-outline">
                                                        <i className="ti-pencil-alt"></i>
                                                    </Link></li>
                                                    <li><a class="btn btn-outline" onClick={() => handleDeleteData(item.id)}><i class="ti-trash"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="fx-card-content text-left mb-0">
                                            <div class="product-text">
                                                <h2 class="pro-price text-blue">${item.price}</h2>
                                                <h4 class="box-title mb-0">{item.name}</h4>
                                                <br/>
                                                <small class="text-muted db">{item.description}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

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


        </Layout>
    );
}

export default FoodList;