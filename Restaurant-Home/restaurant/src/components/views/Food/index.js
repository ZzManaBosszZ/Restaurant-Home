// import React from 'react'
// import LayoutPages from '../../../layouts/LayoutPage'

// function FoodShopDetail() {
//     return (
//         <LayoutPages>
//             <div className="validtheme-shop-single-area default-padding">
//                 <div className="container">
//                     <div className="product-details">
//                         <div className="row">

//                             <div className="col-lg-6">
//                                 <div className="product-thumb">
//                                     <div id="timeline-carousel" className="carousel slide" data-bs-ride="carousel">

//                                         <div className="carousel-inner item-box">
//                                             <div className="carousel-item active product-item">
//                                                 <a href="assets/img/shop/1.png" className="item popup-gallery">
//                                                     <img src="assets/img/shop/1.png" alt="Thumb" />
//                                                 </a>
//                                                 <span className="onsale theme">-16%</span>
//                                             </div>
//                                             <div className="carousel-item product-item">
//                                                 <a href="assets/img/shop/2.png" className="item popup-gallery">
//                                                     <img src="assets/img/shop/2.png" alt="Thumb" />
//                                                 </a>
//                                                 <span className="onsale theme">-25%</span>
//                                             </div>
//                                             <div className="carousel-item product-item">
//                                                 <a href="assets/img/shop/3.png" className="item popup-gallery">
//                                                     <img src="assets/img/shop/3.png" alt="Thumb" />
//                                                 </a>
//                                                 <span className="onsale theme">-33%</span>
//                                             </div>
//                                             <div className="carousel-item product-item">
//                                                 <a href="assets/img/shop/4.png" className="item popup-gallery">
//                                                     <img src="assets/img/shop/4.png" alt="Thumb" />
//                                                 </a>
//                                                 <span className="onsale theme">-50%</span>
//                                             </div>
//                                         </div>
                                        
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-lg-6">
//                                 <div className="single-product-contents">
//                                     <div className="summary-top-box">
//                                         <div className="product-tags">
//                                             <a href="#">Cheese</a>
//                                             <a href="#">Pizza</a>
//                                         </div>
//                                         <div className="review-count">
//                                             <div className="rating">
//                                                 <i className="fas fa-star"></i>
//                                                 <i className="fas fa-star"></i>
//                                                 <i className="fas fa-star"></i>
//                                                 <i className="fas fa-star"></i>
//                                                 <i className="fas fa-star-half-alt"></i>
//                                             </div>
//                                             <span>(8 Review)</span>
//                                         </div>
//                                     </div>
//                                     <h2 className="product-title">
//                                         Margherita Pizza
//                                     </h2>
//                                     <div className="price">
//                                         <span><del>$8.00</del></span>
//                                         <span>$5.00</span>
//                                     </div>
//                                     <div className="product-stock validthemes-in-stock">
//                                         <span>In Stock</span>
//                                     </div>
//                                     <p>
//                                         The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games. non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder
//                                     </p>
//                                     <div className="product-purchase-list">
//                                         <input type="number" id="quantity" step="1" name="quantity" min="0" placeholder="0" />
//                                         <a href="#" className="btn secondary btn-theme btn-sm animation">
//                                             <i className="fas fa-shopping-cart"></i>
//                                             Add to cart
//                                         </a>
//                                         <div className="shop-action">
//                                             <ul>
//                                                 <li className="wishlist">
//                                                     <a href="#"><span>Add to wishlist</span></a>
//                                                 </li>
//                                                 <li className="compare">
//                                                     <a href="#"><span>Compare</span></a>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                     <div className="product-estimate-delivary">
//                                         <i className="fas fa-box-open"></i>
//                                         <strong> 2-day Delivery</strong>
//                                         <span>Speedy and reliable parcel delivery!</span>
//                                     </div>
//                                     <div className="product-meta">
//                                         <span className="posted-in">
//                                             <strong>Category:</strong>
//                                             <a href="#">Computer</a> ,
//                                             <a href="#">Speaker</a>,
//                                             <a href="#">Headphone</a>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="single-product-bottom-info">
//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <div className="nav nav-tabs" id="nav-tab" role="tablist">
//                                     <button className="nav-link active" id="description-tab-control" data-bs-toggle="tab" data-bs-target="#description-tab" type="button" role="tab" aria-controls="description-tab" aria-selected="true">
//                                         Description
//                                     </button>
//                                     <button className="nav-link" id="review-tab-control" data-bs-toggle="tab" data-bs-target="#review-tab" type="button" role="tab" aria-controls="review-tab" aria-selected="false">
//                                         Review
//                                     </button>
//                                 </div>
//                                 <div className="tab-content tab-content-info" id="myTabContent">
//                                     <div className="tab-pane fade show active" id="description-tab" role="tabpanel" aria-labelledby="description-tab-control">
//                                         <p>
//                                             There is immense scope for organic production of vegetable crops in India since the agricultural sector has enormous organic resources like crop residues, livestock and other bio-products from agro industries. Organic farming is growing at a rapid pace among Indian farmers and entrepreneurs, particularly in rainfed and hilly areas where fertilizer consumption is less than 25 kg/ha/year [13].
//                                         </p>
//                                         <ul>
//                                             <li>Status of organic vegetable production</li>
//                                             <li>Feasibility of organic practices</li>
//                                             <li>Sustainability of organic farming</li>
//                                         </ul>
//                                     </div>
                            
//                                     <div className="tab-pane fade" id="review-tab" role="tabpanel" aria-labelledby="review-tab-control">
//                                         <h4>1 review for “Fresh Red Seedless”</h4>
//                                         <div className="review-items">
//                                             <div className="item">
//                                                 <div className="thumb">
//                                                     <img src="assets/img/team/1.jpg" alt="Thumb" />
//                                                 </div>
//                                                 <div className="info">
//                                                     <div className="rating">
//                                                         <i className="fas fa-star"></i>
//                                                         <i className="fas fa-star"></i>
//                                                         <i className="fas fa-star"></i>
//                                                         <i className="fas fa-star"></i>
//                                                         <i className="fas fa-star-half-alt"></i>
//                                                     </div>
//                                                     <div className="review-date">April 8, 2021</div>
//                                                     <div className="review-authro"><h5>Aleesha Brown
//                                                     </h5></div>
//                                                     <p>
//                                                         Highly recommended. Will purchase more in future.
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="review-form">
//                                             <h4>Add a review</h4>
//                                             <div className="rating-select">
//                                                 <div className="stars">
//                                                     <span>
//                                                         <a className="star-1" href="#"><i className="fas fa-star"></i></a>
//                                                         <a className="star-2" href="#"><i className="fas fa-star"></i></a>
//                                                         <a className="star-3" href="#"><i className="fas fa-star"></i></a>
//                                                         <a className="star-4" href="#"><i className="fas fa-star"></i></a>
//                                                         <a className="star-5" href="#"><i className="fas fa-star"></i></a>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                             <form action="#" className="contact-form">
//                                                 <div className="row">
//                                                     <div className="col-lg-12">
//                                                         <div className="form-group comments">
//                                                             <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *"></textarea>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="row">
//                                                     <div className="col-lg-6">
//                                                         <div className="form-group">
//                                                             <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
//                                                             <span className="alert-error"></span>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-lg-6">
//                                                         <div className="form-group">
//                                                             <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />
//                                                             <span className="alert-error"></span>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="row">
//                                                     <div className="col-lg-12">
//                                                         <button type="submit" name="submit" id="submit">
//                                                             Post Review
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-12 alert-notification">
//                                                     <div id="message" className="alert-msg"></div>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="related-products carousel-shadow">
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <h3>Related Products</h3>
//                                 <div className="vt-products text-center related-product-carousel swiper">
//                                     <div className="swiper-wrapper">
//                                         <div className="swiper-slide">
//                                             <div className="product">
//                                                 <div className="product-contents">
//                                                     <div className="product-image">
//                                                         <a href="shop-single.html">
//                                                             <img src="assets/img/shop/1.png" alt="Product" />
//                                                         </a>
//                                                         <div className="shop-action">
//                                                             <ul>
//                                                                 <li className="wishlist">
//                                                                     <a href="#"><span>Add to wishlist</span></a>
//                                                                 </li>
//                                                                 <li className="quick-view">
//                                                                     <a href="#"><span>Quick view</span></a>
//                                                                 </li>
//                                                             </ul>
//                                                         </div>
//                                                     </div>
//                                                     <div className="product-caption">
//                                                         <div className="product-tags">
//                                                             <a href="#">Cheese</a>
//                                                             <a href="#">Pizza</a>
//                                                         </div>
//                                                         <h4 className="product-title">
//                                                             <a href="shop-single.html">Margherita Pizza</a>
//                                                         </h4>
//                                                         <div className="price">
//                                                             <span>$12.00</span>
//                                                         </div>
//                                                         <a href="#" className="cart-btn"><i className="fas fa-shopping-bag"></i> Add to cart</a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>                                   
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </LayoutPages>
//     )
// }

// export default FoodShopDetail