import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import LayoutPages from "../../layouts/LayoutPage";
import api from '../../../services/api';
import url from '../../../services/url';
import { getAccessToken } from '../../../utils/auth';
import BreadCrumb from "../../layouts/BreadCrumb";
import '../../../public/css/foodDetail.css';

function FoodShopDetail() {
    const { id } = useParams(); 
    const [foodDetail, setFoodDetail] = useState(null);
    const [relatedFoods, setRelatedFoods] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ rating: 0, message: '' });
    const [submitError, setSubmitError] = useState('');

    const loadData = useCallback(async () => {
        try {
            // Log ID hiện tại để debug
            console.log("Current Food ID:", id);
    
            // Gọi API lấy chi tiết món ăn
            const foodResponse = await api.get(url.FOOD.DETAIL.replace("{}", id));
            const foodData = foodResponse.data.data;
            setFoodDetail(foodData);
    
            // Sau khi lấy được chi tiết món ăn, gọi API để lấy review
            if (foodData && foodData.id) {
                const reviewResponse = await api.get(url.REVIEW.LIST.replace("{}", foodData.id));
                setReviews(reviewResponse.data.data);
            } else {
                console.error("Food not found for ID:", id);
            }
    
            // Lấy danh sách món ăn liên quan
            const relatedResponse = await api.get(url.FOOD.LIST);
            setRelatedFoods(relatedResponse.data.data.filter(food => food.id !== parseInt(id)));
    
        } catch (error) {
            console.error("Error fetching food detail or reviews:", error);
        }
    }, [id]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    if (!foodDetail) {
        return <div className="foodshop-detail-loading">Loading...</div>; 
    }

    // Handle add to cart
    const handleAddToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === foodDetail.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...foodDetail, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Item added to cart!");
    };

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        if (newReview.rating === 0) {
            setSubmitError("Rating is required.");
            return;
        }

        try {
            const reviewPayload = {              
                foodId: foodDetail.id,               
                rating: newReview.rating,
                message: newReview.message,
            };

            const response = await api.post(url.REVIEW.CREATE.replace("{}", id), reviewPayload, {
                headers: { Authorization: `Bearer ${getAccessToken()}` },
            });

            if (response.status === 200) {
                setNewReview({ rating: 0, message: '' });
                setSubmitError('');
                loadData(); // Reload the reviews after submission
            } else {
                setSubmitError("Failed to submit the review.");
            }
        } catch (error) {
            setSubmitError("An error occurred while submitting the review.");
        }
    };

    return (
        <LayoutPages showBreadCrumb={false}>
            <BreadCrumb title="Food Detail" path={[
                { href: "/", label: "Home" },
                { href: "/shop", label: "Shop" },
                { href: "", label: "Food Detail" }
            ]} />
            <div className="foodshop-detail-container">
                <div className="foodshop-detail-content">
                    <div className="foodshop-detail-image">
                        <div id="foodshop-carousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <a href={foodDetail.image} className="popup-gallery">
                                        <img src={foodDetail.image} alt={foodDetail.name} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="foodshop-detail-info">
                        <div className="foodshop-detail-summary">
                            <h2 className="foodshop-detail-title">{foodDetail.name}</h2>
                            <div className="foodshop-detail-price">
                                <span>${foodDetail.price}</span>
                            </div>
                            
                            <div className="foodshop-detail-actions">
                                <input type="number" id="quantity" step="1" name="quantity" min="0" placeholder="0" />
                                <button className="foodshop-detail-add-to-cart" onClick={handleAddToCart}>
                                    <i className="fas fa-shopping-cart"></i> Add to cart
                                </button>
                            </div>
                            <div className="foodshop-detail-delivery">
                                <i className="fas fa-box-open"></i>
                                <strong>2-day Delivery</strong>
                                <span>Speedy and reliable parcel delivery!</span>
                            </div>
                            <div className="foodshop-detail-meta">
                                <span className="foodshop-detail-category">
                                <strong>Category:</strong> {foodDetail.category?.name || 'N/A'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="foodshop-detail-tabs">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="tag-review" id="description-tab" data-bs-toggle="tab" data-bs-target="#description-content" type="button" role="tab" aria-controls="description-content" aria-selected="true">
                            Description
                        </button>
                        <button className="Tag-review" id="review-tab" data-bs-toggle="tab" data-bs-target="#review-content" type="button" role="tab" aria-controls="review-content" aria-selected="false">
                            Review
                        </button>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="description-content" role="tabpanel" aria-labelledby="description-tab">
                            <p>{foodDetail.description}</p>
                        </div>
                        <div className="tab-pane fade" id="review-content" role="tabpanel" aria-labelledby="review-tab">
                            <h4>{reviews.length} review for {foodDetail.name}</h4>
                            <div className="review-items">
                                {reviews.map(review => (
                                    <div className="item" key={foodDetail.id}>
                                        <div className="info">
                                            <div className="rating">
                                                {[...Array(5)].map((star, index) => (
                                                    <i key={index} className={`fas fa-star ${index < review.rating ? 'filled' : ''}`}></i>
                                                ))}
                                            </div>
                                            <div className="review-date">{new Date(review.createdDate).toLocaleDateString()}</div>
                                            <div className="review-author">
                                                <h5>{review.user?.fullName}</h5>
                                            </div>
                                            <p>{review.message}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                                <div className="review-form">
                                    <h4>Write a Review</h4>
                                    <form onSubmit={handleReviewSubmit}>
                                        <div className="rating">
                                            <span>Your Rating</span>
                                            {[...Array(5)].map((star, index) => (
                                                <i
                                                    key={index}
                                                    className={`fas fa-star ${index < newReview.rating ? 'filled' : ''}`}
                                                    onClick={() => setNewReview({ ...newReview, rating: index + 1 })}
                                                ></i>
                                            ))}
                                        </div>
                                        <div className="form-group">
                                            <label>Your Review</label>
                                            <textarea
                                                className="form-control"
                                                rows="4"
                                                value={newReview.message}
                                                onChange={(e) => setNewReview({ ...newReview, message: e.target.value })}
                                                required
                                            />
                                        </div>
                                        {submitError && <p className="text-danger">{submitError}</p>}
                                        <button type="submit" className="btn btn-primary">
                                            Submit Review
                                        </button>
                                    </form>
                                </div>
                         </div>
                    </div>
                </div>

                 <div className="foodshop-detail-related-products">
                    <h3>Related Products</h3>
                    <div className="related-products-carousel">
                        <ul className="vt-products columns-4">
                        {relatedFoods.length > 0 ? (
                                relatedFoods.slice(0, 4).map((food) => (
                                <li className="product" key={food.id}>
                                    <div className="product-contents">
                                        <div className="product-image">
                                            <a href={`/shop-detail/${food.id}`}>
                                                <img src={food.image} alt={food.name} />
                                            </a>
                                            <div className="shop-action">
                                                <ul>
                                                    <li className="wishlist">
                                                        <a href="#">
                                                            <span>Add to wishlist</span>
                                                        </a>
                                                    </li>
                                                    <li className="quick-view">
                                                        <a href={`/shop-detail/${food.id}`}>
                                                            <span>Quick view</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-caption">
                                            <div className="product-tags">
                                                <a href="#">{food.category}</a>
                                            </div>
                                            <h4 className="product-title">
                                                <a href={`/shop-detail/${food.id}`}>{food.name}</a>
                                            </h4>
                                            <div className="price">
                                                <span>${food.price}</span>
                                            </div>
                                            <a href="#" className="cart-btn" onClick={() => handleAddToCart(food)}>
                                                <i className="fas fa-shopping-bag"></i> Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </li> ))
                            ) : (
                                <p>No related products available.</p>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </LayoutPages>
    );
}

export default FoodShopDetail;