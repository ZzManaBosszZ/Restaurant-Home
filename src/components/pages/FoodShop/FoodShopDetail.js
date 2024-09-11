import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import LayoutPages from "../../layouts/LayoutPage";
import api from '../../../services/api';
import url from '../../../services/url';
import { getAccessToken } from '../../../utils/auth';
import BreadCrumb from "../../layouts/BreadCrumb";
import '../../../public/css/foodDetail.css';

function FoodShopDetail() {
    const { id } = useParams(); // Lấy ID từ URL
    const [foodDetail, setFoodDetail] = useState(null);
    const [relatedFoods, setRelatedFoods] = useState([]);

    const loadData = useCallback(async () => {
        try {
            const response = await api.get(url.FOOD.DETAIL.replace("{}", id), {
                headers: { Authorization: `Bearer ${getAccessToken()}` }
            });
            setFoodDetail(response.data.data);
            
            // Load related foods
            const relatedResponse = await api.get(url.FOOD.LIST);
            setRelatedFoods(relatedResponse.data.data.filter(food => food.id !== id));
        } catch (error) {
            console.error("Error fetching food detail:", error);
        }
    }, [id]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    if (!foodDetail) {
        return <div className="foodshop-detail-loading">Loading...</div>; // Có thể thay thế bằng một component loading đẹp hơn
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
                            
                            {/* <p className="foodshop-detail-description">{foodDetail.description}</p> */}
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
                                    <strong>Category:</strong> {foodDetail.category}
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
                            <h4>1 review for “{foodDetail.name}”</h4>
                            <div className="review-items">
                                {/* Sample review item */}
                                <div className="item">
                                    <div className="thumb">
                                        <img src="assets/img/team/1.jpg" alt="Reviewer" />
                                    </div>
                                    <div className="info">
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                        <div className="review-date">April 8, 2021</div>
                                        <div className="review-author">
                                            <h5>Aleesha Brown</h5>
                                        </div>
                                        <p>Highly recommended. Will purchase more in future.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review-form">
                                <h4>Add a review</h4>
                                <div className="rating-select">
                                    <div className="stars">
                                        <span>
                                            <a className="star-1" href="#"><i className="fas fa-star"></i></a>
                                            <a className="star-2" href="#"><i className="fas fa-star"></i></a>
                                            <a className="star-3" href="#"><i className="fas fa-star"></i></a>
                                            <a className="star-4" href="#"><i className="fas fa-star"></i></a>
                                            <a className="star-5" href="#"><i className="fas fa-star"></i></a>
                                        </span>
                                    </div>
                                </div>
                                <form action="#" className="contact-form">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group comments">
                                                <textarea className="form-control" id="comments" name="comments" placeholder="Tell us about your experience *"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                                                <span className="alert-error"></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />
                                                <span className="alert-error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <button className="submit-review" type="submit" name="submit" id="submit">
                                                Post Review
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-12 alert-notification">
                                        <div id="message" className="alert-msg"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                 <div className="foodshop-detail-related-products">
                    <h3>Related Products</h3>
                    <div className="related-products-carousel">
                        <ul className="vt-products columns-4">
                            {relatedFoods.map((food) => (
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
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </LayoutPages>
    );
}

export default FoodShopDetail;
