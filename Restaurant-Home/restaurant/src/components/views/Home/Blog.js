import React from 'react'

function Blog() {
    return (
        <div className="blog-area home-blog default-padding bottom-less">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">News & Blog</h4>
                            <h2 className="title">Our Latest News & Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="home-blog-style-one-item">
                            <img src="assets/img/blog/1.jpg" alt="Image not Found" />
                            <div className="content">
                                <div className="info">
                                    <div className="date"><strong>24</strong> Dec</div>
                                    <ul className="blog-meta">
                                        <li>
                                            By <a href="#">Md Sohag</a>
                                        </li>
                                        <li>
                                            <a href="#">Burger</a> ,
                                            <a href="#">Food</a>
                                        </li>
                                    </ul>
                                    <h4 className="title">
                                        <a href="#">Picked up a Brussels burger Sprouts with ham</a>
                                    </h4>
                                    <a href="#" className="btn-read-more">Read More <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="home-blog-style-one-item">
                            <img src="assets/img/blog/2.jpg" alt="Image not Found" />
                            <div className="content">
                                <div className="info">
                                    <div className="date"><strong>18</strong> Nov</div>
                                    <ul className="blog-meta">
                                        <li>
                                            By <a href="#">Md Sohag</a>
                                        </li>
                                        <li>
                                            <a href="#">Pizza</a> ,
                                            <a href="#">Food</a>
                                        </li>
                                    </ul>
                                    <h4 className="title">
                                        <a href="#">This prefabricated passive house is highly sustainable</a>
                                    </h4>
                                    <a href="#" className="btn-read-more">Read More <i className="fas fa-arrow-right"></i></a>
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