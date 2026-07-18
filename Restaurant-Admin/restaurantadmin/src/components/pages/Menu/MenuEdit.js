import React from 'react'
import { useState, useEffect, useMemo } from "react";
import useAxiosGet from '../../../hooks/useAxiosGet';
import { useParams, useNavigate } from "react-router-dom";
import api from '../../../services/api';
import url from '../../../services/url';
import { getAccessToken } from '../../../utils/auth';
import config from '../../../config';
import Swal from 'sweetalert2';
import Layout from '../../layouts';
import NotFound from '../Other/NotFound';
import BreadCrumb from '../../layouts/BreadCrumb';
import { Link } from 'react-router-dom';

function MenuEdit() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [submitting, setSubmitting] = useState(false);

    const menuData = useAxiosGet({
        path: url.MENU.DETAIL.replace("{}", id),
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const menuDetail = useMemo(() => menuData.response || {}, [menuData.response]);

    useEffect(() => {
        if (menuDetail) {
            setFormData({
                id: menuDetail.id || null,
                name: menuDetail.name || "",
                image: menuDetail.image || null,
                description: menuDetail.description || "",
            });

            // Cập nhật URL ảnh hiển thị
            const imgElement = document.getElementById("imgPreview");
            if (imgElement && menuDetail.image) {
                imgElement.src = menuDetail.image;
            }
        }
    }, [menuDetail]);


    const [formData, setFormData] = useState({
        id: menuDetail.id,
        name: "",
        image: null,
        description: "",

    });

    const [formErrors, setFormErrors] = useState({
        id: menuDetail.id,
        name: "",
        image: null,
        description: "",
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        let newValue = value;

        if (name === "image" && files.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                // Cập nhật ảnh hiển thị khi người dùng chọn ảnh mới
                const imgElement = document.getElementById("imgPreview");
                if (imgElement) {
                    imgElement.src = reader.result;
                }

                // Cập nhật trạng thái với ảnh mới
                setFormData((prevForm) => ({
                    ...prevForm,
                    image: files[0], // Lưu file ảnh thực trong trạng thái của form
                }));

                // Xóa lỗi ảnh nếu có
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: "",
                }));
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData((prevForm) => ({
                ...prevForm,
                [name]: newValue,
            }));
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                [name]: "",
            }));
        }
    };


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
        if (!formData.image) {
            newErrors.image = "Please choose image food";
            valid = false;
        }
        if (formData.description === "") {
            newErrors.description = "Please enter description";
            valid = false;
        }
        setFormErrors(newErrors);
        return valid;
    };


    const handleEditMenu = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                setSubmitting(true);
                const headers = {
                    Authorization: `Bearer ${getAccessToken()}`,
                    "Content-Type": "multipart/form-data",
                };
                const createRequest = await api.put(url.MENU.EDIT, formData, { headers });

                if (createRequest.status === 200) {
                    Swal.fire({
                        text: "Edit Menu Successfully.",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });
                    setTimeout(() => {
                        navigate(config.routes.menu); //chuyển đến trang menu-list
                    }, 3000);

                }
            } catch (error) {
                Swal.fire({
                    text: "Error! An error occurred. Please try again later!",
                    icon: "error",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Done",
                });
            } finally {
                setSubmitting(false);
            }
        }
    };

    return (
        <>
            {menuData.errorStatus === 404 ? (
                <NotFound />
            ) : (
                <Layout>
                    <BreadCrumb title="Menu Edit" />
                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <form onSubmit={handleEditMenu}>
                                            <div className="form-body">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="font-weight-700 font-size-16">Menu Name</label>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
                                                                placeholder="Menu Name"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                autoFocus />
                                                            {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="font-weight-700 font-size-16">Ingredients and Description</label>
                                                            <input
                                                                className={`form-control p-20 ${formErrors.price ? "is-invalid" : ""}`}
                                                                placeholder="Enter in this"
                                                                name="description"
                                                                rows="4"
                                                                value={formData.description}
                                                                onChange={handleChange} />
                                                            {formErrors.description && <div className="invalid-feedback d-block">{formErrors.description}</div>}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <h4 class="box-title mt-20">Uploaded Image Preview</h4>
                                                        <div class="product-img text-left">
                                                            <img id="imgPreview" src="" alt="Preview" class="mb-15"></img>
                                                            <p>Upload Another Image</p>
                                                            <div class="btn btn-info mb-20">
                                                                <input type="file" name="image" onChange={handleChange} accept=".jpg, .png, .etc" />
                                                                {formErrors.image && <div className="invalid-feedback">{formErrors.image}</div>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-actions mt-10">
                                                <button type="submit" class="btn btn-primary"><i class="fa fa-check"></i>Save</button>
                                                <Link to={config.routes.menu}>
                                                    <button type="button" className="btn btn-danger">
                                                        Cancel
                                                    </button>
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            )}
        </>
    );
}
export default MenuEdit;
