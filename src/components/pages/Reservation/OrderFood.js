// src/pages/OrderFood.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderFood = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8083/api/v1/food/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchFoods = async () => {
      if (selectedCategory) {
        try {
          const response = await axios.get(`http://localhost:8083/api/v1/food/category/${selectedCategory}`);
          setFoods(response.data);
        } catch (error) {
          console.error('Error fetching foods:', error);
        }
      }
    };

    fetchFoods();
  }, [selectedCategory]);

  return (
    <div>
      <h1>Order Food</h1>
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory || ''}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <div>
        {foods.map((food) => (
          <div key={food.id}>
            <h2>{food.name}</h2>
            <p>{food.description}</p>
            <p>${food.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderFood;
