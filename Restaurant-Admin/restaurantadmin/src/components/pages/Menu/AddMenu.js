import { useState } from "react";
import Layout from "../../layouts";
import url from "../../../services/url";
import api from "../../../services/api";
import { getAccessToken } from "../../../utils/auth";
import { useNavigate } from "react-router-dom";
import config from "../../../config";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import BreadCrumb from "../../layouts/BreadCrumb";
import { Link } from "react-router-dom";

function AddMenu() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        image: null,
        description: "",
    });

    const [formErrors, setFormErrors] = useState({
        name: "",
        image: null,
        description: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "image" && files.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                setFormData((prevForm) => ({
                    ...prevForm,
                    image: files[0], // Store the actual file in the form state
                }));
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData((prevForm) => ({
                ...prevForm,
                [name]: value,
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
            newErrors.image = "Please choose an image.";
            valid = false;
        }
        if (formData.description === "") {
            newErrors.description = "Please enter description.";
            valid = false;
        }
        setFormErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const headers = {
                    Authorization: `Bearer ${getAccessToken()}`,
                };

                // Create FormData object
                const formDataToSend = new FormData();
                formDataToSend.append("name", formData.name);
                formDataToSend.append("image", formData.image);
                formDataToSend.append("description", formData.description);

                const response = await api.post(url.MENU.CREATE, formDataToSend, { headers });

                if (response && response.data) {
                    toast.success("Create Menu Successfully.", {
                        position: "top-right",
                        autoClose: 3000,
                    });

                    // Show a confirmation dialog using Swal
                    Swal.fire({
                        title: 'Do you want to add food to this menu?',
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes',
                        cancelButtonText: 'No'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate(config.routes.menu_food_create); // Navigate to the menu-food creation page
                        } else {
                            navigate(config.routes.menu); // Navigate to the menu list page
                        }
                    });
                }
            } catch (error) {
                const errorMessage = "An error occurred while creating the menu.";
                toast.error(errorMessage, {
                    position: "top-right",
                    autoClose: 5000,
                });
            }
        }
    };

    return (
        <Layout>
            <BreadCrumb title="Menu Create" />
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
                                                    <label className="font-weight-700 font-size-16">Menu Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
                                                        placeholder="Menu Name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        autoFocus />
                                                    {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Description About Menu</label>
                                                    <input
                                                        className={`form-control p-20 ${formErrors.description ? "is-invalid" : ""}`}
                                                        placeholder="Enter in this"
                                                        name="description"
                                                        rows="4"
                                                        value={formData.description}
                                                        onChange={handleInputChange} />
                                                    {formErrors.description && <div className="invalid-feedback d-block">{formErrors.description}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-3">
                                                <h4 className="box-title mt-20">Uploaded Image Preview</h4>
                                                <div className="product-img text-left">
                                                    <img id="imgPreview" src={formData.image ? URL.createObjectURL(formData.image) : ""} alt="Preview" className="mb-15" />
                                                    <p>Upload Another Image</p>
                                                    <div className="btn btn-info mb-20">
                                                        <input type="file" name="image" onChange={handleChange} accept=".jpg, .png, .jpeg" />
                                                        {formErrors.image && <div className="invalid-feedback">{formErrors.image}</div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-actions mt-10">
                                        <button type="submit" className="btn btn-primary"><i className="fa fa-check"></i>Add</button>
                                        <Link to={config.routes.menu}><button type="button" className="btn btn-danger">Cancel</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </Layout>
    );
}

export default AddMenu;
