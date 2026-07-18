import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import url from '../../../services/url';

function Menu() {
    const [foodItems, setFoodItems] = useState([]);
    const [categories, setCategories] = useState([]); // State to store categories
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch food items
        const loadFoodItems = async () => {
            try {
                const response = await api.get(url.FOOD.LIST);
                setFoodItems(response.data.data); // Save API data to state
            } catch (error) {
                console.error("Error loading food items:", error);
                setError("Error loading food items. Please try again later.");
            }
        };

        // Fetch categories
        const loadCategories = async () => {
            try {
                const response = await api.get(url.CATEGORY.LIST); // Replace with actual category API URL
                setCategories(response.data.data); // Save category data
            } catch (error) {
                console.error("Error loading categories:", error);
                setError("Error loading categories. Please try again later.");
            }
        };

        loadFoodItems();
        loadCategories();
    }, []);

    // Create a map from categoryId to categoryName
    const categoryMap = categories.reduce((map, category) => {
        map[category.id] = category.name; // map categoryId to category name
        return map;
    }, {});

    // Group food items by `categoryId` and update with category name
    const groupedFoods = {};
    foodItems.forEach(food => {
        const categoryId = food.categoryId || "Uncategorized";
        const categoryName = categoryMap[categoryId] || `Category ${categoryId}`; // Default to "Category {ID}" if not found
        
        if (!groupedFoods[categoryId]) {
            groupedFoods[categoryId] = {
                foods: [],
                categoryName,
            };
        }
        groupedFoods[categoryId].foods.push(food);
    });

    const categoryIds = Object.keys(groupedFoods);

    return (
        <div className="food-menu-style-three-area default-padding-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">Food Menu</h4>
                            <h2 className="title">Our Specials Food</h2>
                        </div>
                    </div>
                </div>
                <div className="food-menu-three-two-items">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="nav nav-tabs food-menu-nav style-three" id="nav-tab" role="tablist">
                                {categoryIds.map((categoryId, index) => (
                                    <button
                                        key={categoryId}
                                        className={`nav-link ${index === 0 ? 'active' : ''}`}
                                        id={`nav-id-${categoryId}`}
                                        data-bs-toggle="tab"
                                        data-bs-target={`#tab-${categoryId}`}
                                        type="button"
                                        role="tab"
                                        aria-controls={`tab-${categoryId}`}
                                        aria-selected={index === 0}
                                    >
                                        {groupedFoods[categoryId].categoryName}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="tab-content food-style-two-content" id="nav-tabContent">
                                {categoryIds.map((categoryId, index) => (
                                    <div
                                        key={categoryId}
                                        className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                                        id={`tab-${categoryId}`}
                                        role="tabpanel"
                                        aria-labelledby={`nav-id-${categoryId}`}
                                    >
                                        <div className="row">
                                            {groupedFoods[categoryId].foods
                                                .slice(0, 6) // Limit to 6 items
                                                .map((food, foodIndex) => (
                                                    <div key={foodIndex} className="col-xl-4 col-lg-6 col-md-6 mt-30">
                                                        <div className="food-menu-style-three">
                                                            <div className="thumb">
                                                                <img
                                                                    src={food.image || "assets/img/menu/default.jpg"}
                                                                    alt={food.name}
                                                                />
                                                                <div className="d-flex">
                                                                    <div className="food-review">
                                                                        <i className="fas fa-star"></i>
                                                                        <span>{food.star || 'N/A'}</span>
                                                                    </div>
                                                                    <div className="price">
                                                                        <span>${food.price || 0}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="info">
                                                                <h4>
                                                                    <a href="#">{food.name}</a>
                                                                </h4>
                                                                <p>{food.description}</p>
                                                                <a href="#" className="cart-btn-border">
                                                                    <i className="fas fa-shopping-cart"></i> Add to Cart
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
