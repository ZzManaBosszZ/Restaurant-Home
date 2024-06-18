import React from 'react'

function Blog() {
    return (
        <div class="blog-area home-blog default-padding bottom-less">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="site-heading text-center">
                            <h4 class="sub-title">News & Blog</h4>
                            <h2 class="title">Our Latest News & Blog</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="home-blog-style-one-item">
                            <img src="assets/img/blog/1.jpg" alt="Image not Found" />
                            <div class="content">
                                <div class="info">
                                    <div class="date"><strong>24</strong> Dec</div>
                                    <ul class="blog-meta">
                                        <li>
                                            By <a href="#">Md Sohag</a>
                                        </li>
                                        <li>
                                            <a href="#">Burger</a> ,
                                            <a href="#">Food</a>
                                        </li>
                                    </ul>
                                    <h4 class="title">
                                        <a href="#">Picked up a Brussels burger Sprouts with ham</a>
                                    </h4>
                                    <a href="#" class="btn-read-more">Read More <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="home-blog-style-one-item">
                            <img src="assets/img/blog/2.jpg" alt="Image not Found" />
                            <div class="content">
                                <div class="info">
                                    <div class="date"><strong>18</strong> Nov</div>
                                    <ul class="blog-meta">
                                        <li>
                                            By <a href="#">Md Sohag</a>
                                        </li>
                                        <li>
                                            <a href="#">Pizza</a> ,
                                            <a href="#">Food</a>
                                        </li>
                                    </ul>
                                    <h4 class="title">
                                        <a href="#">This prefabricated passive house is highly sustainable</a>
                                    </h4>
                                    <a href="#" class="btn-read-more">Read More <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog