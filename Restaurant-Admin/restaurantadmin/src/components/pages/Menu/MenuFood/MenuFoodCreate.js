import React, { useState, useEffect } from "react";
import Select from "react-select";
import Layout from "../../../layouts";
import url from "../../../../services/url";
import api from "../../../../services/api";
import { getAccessToken } from "../../../../utils/auth";
import { useNavigate } from "react-router-dom";
import config from "../../../../config";
import BreadCrumb from "../../../layouts/BreadCrumb";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; // Import React-Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import React-Toastify styles

function MenuFoodCreate() {
    const navigate = useNavigate();
    const [menus, setMenu] = useState([]);
    const [foods, setFoods] = useState([]);

    const loadData = async () => {
        try {
            const headerConfig = {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            };

            const [menuResponse, foodsResponse] = await Promise.all([
                api.get(url.MENU.LIST, headerConfig),
                api.get(url.FOOD.LIST, headerConfig),
            ]);

            setMenu(menuResponse.data.data);
            setFoods(foodsResponse.data.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const [formData, setFormData] = useState({
        foodId: [],
        menuId: null,
    });

    const [formErrors, setFormErrors] = useState({
        foodId: "",
        menuId: "",
    });

    const handleChange = (selectedOptions, actionMeta) => {
        const { name } = actionMeta;
        if (name === "foodId") {
            setFormData((prevForm) => ({
                ...prevForm,
                foodId: selectedOptions || [], // Update selected food items
            }));
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                foodId: "",
            }));
        } else if (name === "menuId") {
            setFormData((prevForm) => ({
                ...prevForm,
                menuId: selectedOptions ? selectedOptions.value : null,
            }));
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                menuId: "",
            }));
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};
        if (!formData.menuId) {
            newErrors.menuId = "Please choose a Menu";
            valid = false;
        }
        if (formData.foodId.length === 0) {
            newErrors.foodId = "Please choose Food";
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
                    "Content-Type": "application/json", // Make sure content-type matches your data format
                };

                // Transform form data to match backend expectations
                const transformedData = {
                    ...formData,
                    foodId: formData.foodId.map(food => food.value), // Assuming backend expects an array of Long values
                };

                const response = await api.post(url.MENU_FOOD.CREATE, transformedData, { headers });

                if (response && response.data) {
                    toast.success("Create Menu Food Successfully.", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setTimeout(() => {
                        navigate(config.routes.menu); // Navigate to the menu list page
                    }, 3000);
                }
            } catch (error) {
                toast.error("Create Menu Food error", {
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
    };

    // Convert menu and food data for React Select
    const menuOptions = menus.map(menu => ({ value: menu.id, label: menu.name }));
    const foodOptions = foods.map(food => ({ value: food.id, label: food.name, image: food.image }));

    return (
        <Layout>
            <ToastContainer /> {/* Add ToastContainer here */}
            <BreadCrumb title="Menu-Food Create" />
            <br />
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
                                                    <label className="font-weight-700 font-size-16">Menu</label>
                                                    <Select
                                                        name="menuId"
                                                        className={`form-control ${formErrors.menuId ? "is-invalid" : ""}`}
                                                        options={menuOptions}
                                                        onChange={handleChange}
                                                        value={menuOptions.find(option => option.value === formData.menuId)}
                                                    />
                                                    {formErrors.menuId && <div className="invalid-feedback d-block">{formErrors.menuId}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="font-weight-700 font-size-16">Food</label>
                                                    <Select
                                                        name="foodId"
                                                        className={`form-control ${formErrors.foodId ? "is-invalid" : ""}`}
                                                        options={foodOptions}
                                                        onChange={handleChange}
                                                        isMulti
                                                        value={formData.foodId.map(id => foodOptions.find(option => option.value === id.value))}
                                                    />
                                                    {formErrors.foodId && <div className="invalid-feedback d-block">{formErrors.foodId}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h4 className="box-title mt-20">Image Foods Preview</h4>
                                                <div className="product-img text-left">
                                                    <div className="selected-food-images d-flex flex-wrap">
                                                        {formData.foodId.map(food => (
                                                            <div key={food.value} className="food-image-container" style={{ marginRight: "20px", textAlign: "center" }}>
                                                                <img
                                                                    src={food.image} // Assuming `food.image` contains the URL of the image
                                                                    alt={food.label}
                                                                    className="food-image"
                                                                    style={{ width: "200px", height: "200px", objectFit: "cover" }} // Increased size for the images
                                                                />
                                                                <p>{food.label}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-actions mt-10">
                                            <button type="submit" className="btn btn-primary"><i className="fa fa-check"></i>Add</button>
                                            <Link to={config.routes.menu}><button type="button" className="btn btn-danger">Cancel</button></Link>
                                        </div>
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

export default MenuFoodCreate;