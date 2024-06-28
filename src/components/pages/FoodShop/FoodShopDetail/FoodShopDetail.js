import React from 'react'
import LayoutPages from '../../../layouts/LayoutPage'

function FoodShopDetail() {
    return (
        <LayoutPages>
            <div class="validtheme-shop-single-area default-padding">
                <div class="container">
                    <div class="product-details">
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="product-thumb">
                                    <div id="timeline-carousel" class="carousel slide" data-bs-ride="carousel">

                                        <div class="carousel-inner item-box">
                                            <div class="carousel-item active product-item">
                                                <a href="assets/img/shop/1.png" class="item popup-gallery">
                                                    <img src="assets/img/shop/1.png" alt="Thumb" />
                                                </a>
                                                <span class="onsale theme">-16%</span>
                                            </div>
                                            <div class="carousel-item product-item">
                                                <a href="assets/img/shop/2.png" class="item popup-gallery">
                                                    <img src="assets/img/shop/2.png" alt="Thumb" />
                                                </a>
                                                <span class="onsale theme">-25%</span>
                                            </div>
                                            <div class="carousel-item product-item">
                                                <a href="assets/img/shop/3.png" class="item popup-gallery">
                                                    <img src="assets/img/shop/3.png" alt="Thumb" />
                                                </a>
                                                <span class="onsale theme">-33%</span>
                                            </div>
                                            <div class="carousel-item product-item">
                                                <a href="assets/img/shop/4.png" class="item popup-gallery">
                                                    <img src="assets/img/shop/4.png" alt="Thumb" />
                                                </a>
                                                <span class="onsale theme">-50%</span>
                                            </div>
                                        </div>
                                        <div class="carousel-indicators">
                                            <div class="product-gallery-carousel swiper">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <div class="item active" data-bs-target="#timeline-carousel" data-bs-slide-to="0" aria-current="true">
                                                            <img src="assets/img/shop/1.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="item" data-bs-target="#timeline-carousel" data-bs-slide-to="1">
                                                            <img src="assets/img/shop/2.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="item" data-bs-target="#timeline-carousel" data-bs-slide-to="2">
                                                            <img src="assets/img/shop/3.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="item" data-bs-target="#timeline-carousel" data-bs-slide-to="3">
                                                            <img src="assets/img/shop/4.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="single-product-contents">
                                    <div class="summary-top-box">
                                        <div class="product-tags">
                                            <a href="#">Cheese</a>
                                            <a href="#">Pizza</a>
                                        </div>
                                        <div class="review-count">
                                            <div class="rating">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star-half-alt"></i>
                                            </div>
                                            <span>(8 Review)</span>
                                        </div>
                                    </div>
                                    <h2 class="product-title">
                                        Margherita Pizza
                                    </h2>
                                    <div class="price">
                                        <span><del>$8.00</del></span>
                                        <span>$5.00</span>
                                    </div>
                                    <div class="product-stock validthemes-in-stock">
                                        <span>In Stock</span>
                                    </div>
                                    <p>
                                        The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games. non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder
                                    </p>
                                    <div class="product-purchase-list">
                                        <input type="number" id="quantity" step="1" name="quantity" min="0" placeholder="0" />
                                        <a href="#" class="btn secondary btn-theme btn-sm animation">
                                            <i class="fas fa-shopping-cart"></i>
                                            Add to cart
                                        </a>
                                        <div class="shop-action">
                                            <ul>
                                                <li class="wishlist">
                                                    <a href="#"><span>Add to wishlist</span></a>
                                                </li>
                                                <li class="compare">
                                                    <a href="#"><span>Compare</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-estimate-delivary">
                                        <i class="fas fa-box-open"></i>
                                        <strong> 2-day Delivery</strong>
                                        <span>Speedy and reliable parcel delivery!</span>
                                    </div>
                                    <div class="product-meta">
                                        <span class="sku">
                                            <strong>SKU:</strong> BE45VGRT
                                        </span>
                                        <span class="posted-in">
                                            <strong>Category:</strong>
                                            <a href="#">Computer</a> ,
                                            <a href="#">Speaker</a>,
                                            <a href="#">Headphone</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="single-product-bottom-info">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="description-tab-control" data-bs-toggle="tab" data-bs-target="#description-tab" type="button" role="tab" aria-controls="description-tab" aria-selected="true">
                                        Description
                                    </button>

                                    <button class="nav-link" id="information-tab-control" data-bs-toggle="tab" data-bs-target="#information-tab" type="button" role="tab" aria-controls="information-tab" aria-selected="false">
                                        Additional Information
                                    </button>

                                    <button class="nav-link" id="review-tab-control" data-bs-toggle="tab" data-bs-target="#review-tab" type="button" role="tab" aria-controls="review-tab" aria-selected="false">
                                        Review
                                    </button>

                                </div>
                                <div class="tab-content tab-content-info" id="myTabContent">
                                    <div class="tab-pane fade show active" id="description-tab" role="tabpanel" aria-labelledby="description-tab-control">
                                        <p>
                                            There is immense scope for organic production of vegetable crops in India since the agricultural sector has enormous organic resources like crop residues, livestock and other bio-products from agro industries. Organic farming is growing at a rapid pace among Indian farmers and entrepreneurs, particularly in rainfed and hilly areas where fertilizer consumption is less than 25 kg/ha/year [13].
                                        </p>
                                        <ul>
                                            <li>Status of organic vegetable production</li>
                                            <li>Feasibility of organic practices</li>
                                            <li>Sustainability of organic farming</li>
                                            <li>Organic certification</li>
                                            <li>Prospects and constraints of organic vegetable production</li>
                                        </ul>
                                    </div>
                                    <div class="tab-pane fade" id="information-tab" role="tabpanel" aria-labelledby="information-tab-control">
                                        <div class="table-responsive">
                                            <table class="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td>Weight</td>
                                                        <td>240 Ton</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dimensions</td>
                                                        <td>20 × 30 × 40 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Colors</td>
                                                        <td>Black, Blue, Green</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="review-tab" role="tabpanel" aria-labelledby="review-tab-control">
                                        <h4>1 review for “Fresh Red Seedless”</h4>
                                        <div class="review-items">
                                            <div class="item">
                                                <div class="thumb">
                                                    <img src="assets/img/team/1.jpg" alt="Thumb" />
                                                </div>
                                                <div class="info">
                                                    <div class="rating">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star-half-alt"></i>
                                                    </div>
                                                    <div class="review-date">April 8, 2021</div>
                                                    <div class="review-authro"><h5>Aleesha Brown
                                                    </h5></div>
                                                    <p>
                                                        Highly recommended. Will purchase more in future.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="thumb">
                                                    <img src="assets/img/team/2.jpg" alt="Thumb" />
                                                </div>
                                                <div class="info">
                                                    <div class="rating">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star-half-alt"></i>
                                                    </div>
                                                    <div class="review-date">April 8, 2021</div>
                                                    <div class="review-authro"><h5>Sarah Albert</h5></div>
                                                    <p>
                                                        Great product quality!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-form">
                                            <h4>Add a review</h4>
                                            <div class="rating-select">
                                                <div class="stars">
                                                    <span>
                                                        <a class="star-1" href="#"><i class="fas fa-star"></i></a>
                                                        <a class="star-2" href="#"><i class="fas fa-star"></i></a>
                                                        <a class="star-3" href="#"><i class="fas fa-star"></i></a>
                                                        <a class="star-4" href="#"><i class="fas fa-star"></i></a>
                                                        <a class="star-5" href="#"><i class="fas fa-star"></i></a>
                                                    </span>
                                                </div>
                                            </div>
                                            <form action="#" class="contact-form">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="form-group comments">
                                                            <textarea class="form-control" id="comments" name="comments" placeholder="Tell Us About Project *"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <input class="form-control" id="name" name="name" placeholder="Name" type="text" />
                                                            <span class="alert-error"></span>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <input class="form-control" id="email" name="email" placeholder="Email*" type="email" />
                                                            <span class="alert-error"></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <button type="submit" name="submit" id="submit">
                                                            Post Review
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 alert-notification">
                                                    <div id="message" class="alert-msg"></div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="related-products carousel-shadow">
                        <div class="row">
                            <div class="col-md-12">
                                <h3>Related Products</h3>
                                <div class="vt-products text-center related-product-carousel swiper">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="product">
                                                <div class="product-contents">
                                                    <div class="product-image">
                                                        <a href="shop-single.html">
                                                            <img src="assets/img/shop/1.png" alt="Product" />
                                                        </a>
                                                        <div class="shop-action">
                                                            <ul>
                                                                <li class="wishlist">
                                                                    <a href="#"><span>Add to wishlist</span></a>
                                                                </li>
                                                                <li class="quick-view">
                                                                    <a href="#"><span>Quick view</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="product-caption">
                                                        <div class="product-tags">
                                                            <a href="#">Cheese</a>
                                                            <a href="#">Pizza</a>
                                                        </div>
                                                        <h4 class="product-title">
                                                            <a href="shop-single.html">Margherita Pizza</a>
                                                        </h4>
                                                        <div class="price">
                                                            <span>$12.00</span>
                                                        </div>
                                                        <a href="#" class="cart-btn"><i class="fas fa-shopping-bag"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="product">
                                                <div class="product-contents">
                                                    <div class="product-image">
                                                        <span class="onsale">Sale!</span>
                                                        <a href="shop-single.html">
                                                            <img src="assets/img/shop/2.png" alt="Product" />
                                                        </a>
                                                        <div class="shop-action">
                                                            <ul>
                                                                <li class="wishlist">
                                                                    <a href="#"><span>Add to wishlist</span></a>
                                                                </li>
                                                                <li class="quick-view">
                                                                    <a href="#"><span>Quick view</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="product-caption">
                                                        <div class="product-tags">
                                                            <a href="#">Creamy</a>
                                                            <a href="#">Burger</a>
                                                        </div>
                                                        <h4 class="product-title">
                                                            <a href="shop-single.html">Beef Burger</a>
                                                        </h4>
                                                        <div class="price">
                                                            <span><del>$8.00</del></span>
                                                            <span>$5.00</span>
                                                        </div>
                                                        <a href="#" class="cart-btn"><i class="fas fa-shopping-bag"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="product">
                                                <div class="product-contents">
                                                    <div class="product-image">
                                                        <a href="shop-single.html">
                                                            <img src="assets/img/shop/3.png" alt="Product" />
                                                        </a>
                                                        <div class="shop-action">
                                                            <ul>
                                                                <li class="wishlist">
                                                                    <a href="#"><span>Add to wishlist</span></a>
                                                                </li>
                                                                <li class="quick-view">
                                                                    <a href="#"><span>Quick view</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="product-caption">
                                                        <div class="product-tags">
                                                            <a href="#">Beef</a>
                                                            <a href="#">Steak</a>
                                                        </div>
                                                        <h4 class="product-title">
                                                            <a href="shop-single.html">Grilled Flank Steak</a>
                                                        </h4>
                                                        <div class="price">
                                                            <span>$14.00</span>
                                                        </div>
                                                        <a href="#" class="cart-btn"><i class="fas fa-shopping-bag"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="product">
                                                <div class="product-contents">
                                                    <div class="product-image">
                                                        <a href="shop-single.html">
                                                            <img src="assets/img/shop/5.png" alt="Product" />
                                                        </a>
                                                        <div class="shop-action">
                                                            <ul>
                                                                <li class="wishlist">
                                                                    <a href="#"><span>Add to wishlist</span></a>
                                                                </li>
                                                                <li class="quick-view">
                                                                    <a href="#"><span>Quick view</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="product-caption">
                                                        <div class="product-tags">
                                                            <a href="#">BBQ</a>
                                                            <a href="#">Meat</a>
                                                        </div>
                                                        <h4 class="product-title">
                                                            <a href="shop-single.html">Barbecue Chicken</a>
                                                        </h4>
                                                        <div class="price">
                                                            <span>$6.00</span>
                                                        </div>
                                                        <a href="#" class="cart-btn"><i class="fas fa-shopping-bag"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="product">
                                                <div class="product-contents">
                                                    <div class="product-image">
                                                        <a href="shop-single.html">
                                                            <img src="assets/img/shop/8.png" alt="Product" />
                                                        </a>
                                                        <div class="shop-action">
                                                            <ul>
                                                                <li class="wishlist">
                                                                    <a href="#"><span>Add to wishlist</span></a>
                                                                </li>
                                                                <li class="quick-view">
                                                                    <a href="#"><span>Quick view</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="product-caption">
                                                        <div class="product-tags">
                                                            <a href="#">Food</a>
                                                            <a href="#">Roll</a>
                                                        </div>
                                                        <h4 class="product-title">
                                                            <a href="shop-single.html">Vegetable Roll</a>
                                                        </h4>
                                                        <div class="price">
                                                            <span>$8.00</span>
                                                        </div>
                                                        <a href="#" class="cart-btn"><i class="fas fa-shopping-bag"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutPages>
    )
}

export default FoodShopDetail