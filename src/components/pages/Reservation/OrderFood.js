import { useState, useEffect } from "react";
import axios from "axios";
import url from "../../../services/url";
import LayoutPages from "../../layouts/LayoutPage";
import "../../../public/css/orderFood.css"; 

function OrderFood() {
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${url.BASE_URL}/${url.CATEGORY.LIST}`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch foods based on selected category
  useEffect(() => {
    const fetchFoods = async () => {
      if (selectedCategory) {
        try {
          const response = await axios.get(`${url.BASE_URL}/${url.FOOD.LIST}`, {
            params: { categoryId: selectedCategory },
          });
          setFoods(response.data);
        } catch (error) {
          console.error("Error fetching foods:", error);
        }
      }
    };
    fetchFoods();
  }, [selectedCategory]);

  // Handle category selection change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <LayoutPages>
      <div className="order-food-page">
        <h2>Order Your Food</h2>

        {/* Category Selection */}
        <div className="category-selection">
          <label>Select Category: </label>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Display Foods */}
        <div className="food-list">
          {foods.length > 0 ? (
            foods.map((food) => (
              <div key={food.id} className="food-item">
                <img src={food.image} alt={food.name} className="food-image" />
                <h3>{food.name}</h3>
                <p>{food.description}</p>
                <p>Price: ${food.price}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            ))
          ) : (
            <p>No foods available for the selected category</p>
          )}
        </div>
      </div>
    </LayoutPages>
  );
}

export default OrderFood;
