import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Layout from '../../layouts';
import BreadCrumb from '../../layouts/BreadCrumb';
import api from '../../../services/api';
import url from '../../../services/url';
import { getAccessToken } from '../../../utils/auth';
import config from '../../../config';
import { ToastContainer, toast } from 'react-toastify'; // Import React-Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import React-Toastify styles

export default function CategoryCreate() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
    });

    const [formErrors, setFormErrors] = useState({
        name: "",
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = "Please enter name.";
            valid = false;
        } else if (formData.name.length < 3) {
            newErrors.name = "Name must be at least 3 characters.";
            valid = false;
        } else if (formData.name.length > 255) {
            newErrors.name = "Name must be less than 255 characters.";
            valid = false;
        }

        setFormErrors(newErrors);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const headers = {
                    Authorization: `Bearer ${getAccessToken()}`,
                };
                const response = await api.post(url.CATEGORY.CREATE, formData, { headers });

                if (response && response.data) {
                    toast.success("Create Category Successfully.", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setTimeout(() => {
                        navigate(config.routes.category_list);
                    }, 3000);
                }
            } catch (error) {
                if (error.response && error.response.data === 400 && error.response.data.message === "Category already exists") {
                    toast.warning("The name of this Category already exists", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    toast.error("Create Category Failed", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            }
        }
    };

    return (
        <Layout>
            <ToastContainer /> {/* Add ToastContainer here */}
            <BreadCrumb title="Category Create" />
            <section className="content">
                <div className="row">
                    <div className="col-12">
                        <div className="box">
                            <div className="box-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Category Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
                                                        placeholder="Category Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        autoFocus
                                                    />
                                                    {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-actions mt-10">
                                        <button type="submit" className="btn btn-primary"><i className="fa fa-check"></i>Add</button>
                                        <Link to={config.routes.category_list}><button type="button" className="btn btn-danger">Cancel</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
