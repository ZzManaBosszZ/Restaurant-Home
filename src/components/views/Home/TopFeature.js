function TopFeature() {
    return (
        <div className="feature-style-three-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 pr-80 pr-md-15 pr-xs-15">
                        <div className="reservation-form light">
                            <i className="fas fa-utensils"></i>
                            <h3>Book a table</h3>
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <select id="subject">
                                                <option value="1">1 Person</option>
                                                <option value="2">2 Person</option>
                                                <option value="4">3 Person</option>
                                                <option value="5">4 Person</option>
                                                <option value="6">5 Person</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="input-group date date-picker-one">
                                            <input type="text" className="form-control" id="date" placeholder="Date" />
                                            <span className="input-group-addon"><i className="fas fa-calendar-alt"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <select id="time">
                                                <option value="1">10:00 AM</option>
                                                <option value="1">11:00 AM</option>
                                                <option value="1">12:00 AM</option>
                                                <option value="1">1:00 AM</option>
                                                <option value="1">2:00 AM</option>
                                                <option value="1">3:00 AM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <button type="submit" name="submit" id="submit">
                                            Book A Table
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="relative default-padding-top">
                            <div className="food-swiper-nav">
                                <div className="food-cat-prev"></div>
                                <div className="food-cat-next"></div>
                            </div>

                            <div className="food-cat-items">
                                <h2 className="flex-title mb-35">
                                    <img src="assets/img/shape/fire.png" alt="Image Not Found" /> 
                                    Our Popular category</h2>
                                <div className="food-cat-carousel swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <img src="assets/img/menu/25.jpg" alt="Image Not Found" />
                                                <div className="overlay">
                                                    <span>Main Dishes</span>
                                                    <h5>Chicken Alfredo</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <img src="assets/img/menu/26.jpg" alt="Image Not Found" />
                                                <div className="overlay">
                                                    <span>Desserts</span>
                                                    <h5>Cheesecakes</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <img src="assets/img/menu/27.jpg" alt="Image Not Found" />
                                                <div className="overlay">
                                                    <span>Sea Food</span>
                                                    <h5>Salmon Fry</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <img src="assets/img/menu/28.jpg" alt="Image Not Found" />
                                                <div className="overlay">
                                                    <span>Beverage</span>
                                                    <h5>Hot chocolate</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopFeature;