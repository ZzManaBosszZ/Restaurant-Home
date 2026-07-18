import Layout from "../../layouts";
import BreadCrumb from "../../layouts/BreadCrumb";
import useAxiosGet from "../../../hooks/useAxiosGet";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import url from "../../../services/url";
import api from "../../../services/api";
import NotFound from "../Other/NotFound";
import { getAccessToken } from "../../../utils/auth";
import config from "../../../config";
import Swal from "sweetalert2";

function FoodEdit() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);

    const foodData = useAxiosGet({
        path: url.FOOD.DETAIL.replace("{}", id),
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    // Call API categories
    const categoriesData = useAxiosGet({
        path: url.CATEGORY.LIST,
    });

    const categories = categoriesData.response || [];

    const foodDetail = useMemo(() => foodData.response || {}, [foodData.response]);

    useEffect(() => {
        if (foodDetail) {
            setFormData({
                id: foodDetail.id || null,
                name: foodDetail.name || "",
                image: foodDetail.image || null,
                price: foodDetail.price || null,
                description: foodDetail.description || "",
                quantity: foodDetail.quantity || "",
                categoryId: foodDetail.categoryId || null,
            });
    
            // Cập nhật URL ảnh hiển thị
            const imgElement = document.getElementById("imgPreview");
            if (imgElement && foodDetail.image) {
                imgElement.src = foodDetail.image;
            }
        }
    }, [foodDetail]);
    

    const [formData, setFormData] = useState({
        id: foodDetail.id,
        name: "",
        image: null,
        price: "",
        quantity: "",
        description: "",
        categoryId: [],
    });

    const [formErrors, setFormErrors] = useState({
        name: "",
        image: null,
        price: "",
        quantity: "",
        description: "",
        categoryId: [],
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
        if (formData.price <= 0 || formData.price == null) {
            newErrors.price = "Please enter price";
            valid = false;
        }
        if (formData.description === "") {
            newErrors.description = "Please enter description";
            valid = false;
        }
        if (formData.categoryId.length === 0) {
            newErrors.categoryId = "Please choose category";
            valid = false;
        }
        setFormErrors(newErrors);
        return valid;
    };


    const handleEditFood = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                setSubmitting(true);
                const headers = {
                    Authorization: `Bearer ${getAccessToken()}`,
                    "Content-Type": "multipart/form-data",
                };
                const createRequest = await api.put(url.FOOD.EDIT, formData, { headers });

                if (createRequest.status === 200) {
                    Swal.fire({
                        text: "Edit Food Successfully.",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Done",
                    });
                    setTimeout(() => {
                        navigate(config.routes.food_list); //chuyển đến trang food-list
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
            {foodData.errorStatus === 404 ? (
                <NotFound />
            ) : (
                <Layout>
                    <BreadCrumb title="Food Edit" />
                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <form onSubmit={handleEditFood}>
                                            <div className="form-body">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="font-weight-700 font-size-16">Food Name</label>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
                                                                placeholder="Food Name"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                autoFocus />
                                                            {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="font-weight-700 font-size-16">Category</label>
                                                            <select name="categoryId" className={`form-control ${formErrors.categoryId}`} value={formData.categoryId || ""} onChange={handleChange}>
                                                                <option value="">Please choose category</option>
                                                                {categories.map((category) => (
                                                                    <option value={category.id} key={category.id}>
                                                                        {category.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            {formErrors.categoryId && <div className="invalid-feedback d-block">{formErrors.categoryId}</div>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="font-weight-700 font-size-16">Price</label>
                                                            <div className="input-group">
                                                                <div className="input-group-addon"><i className="ti-money"></i></div>
                                                                <input
                                                                    type="number"
                                                                    name="price"
                                                                    className={`form-control ${formErrors.price ? "is-invalid" : ""}`}
                                                                    placeholder="270"
                                                                    value={formData.price}
                                                                    onChange={handleChange}
                                                                />
                                                                {formErrors.price && <div className="invalid-feedback d-block">{formErrors.price}</div>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="font-weight-700 font-size-16">Quantity</label>
                                                            <div className="input-group">
                                                                <div className="input-group-addon"><i className="ti-package"></i></div>
                                                                <input
                                                                    type="number"
                                                                    name="quantity"
                                                                    className={`form-control ${formErrors.quantity ? "is-invalid" : ""}`}
                                                                    placeholder="10"
                                                                    value={formData.quantity}
                                                                    onChange={handleChange}
                                                                />
                                                                {formErrors.quantity && <div className="invalid-feedback d-block">{formErrors.quantity}</div>}
                                                            </div>
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
                                                <Link to="/food-list">
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

export default FoodEdit;