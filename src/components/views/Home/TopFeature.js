function TopFeature() {
    return (
        <div class="feature-style-three-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 pr-80 pr-md-15 pr-xs-15">
                        <div class="reservation-form light">
                            <i class="fas fa-utensils"></i>
                            <h3>Book a table</h3>
                            <form action="#">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input class="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
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
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="input-group date date-picker-one">
                                            <input type="text" class="form-control" id="date" placeholder="Date" />
                                            <span class="input-group-addon"><i class="fas fa-calendar-alt"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
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
                                <div class="row">
                                    <div class="col-lg-12">
                                        <button type="submit" name="submit" id="submit">
                                            Book A Table
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="relative default-padding-top">
                            <div class="food-swiper-nav">
                                <div class="food-cat-prev"></div>
                                <div class="food-cat-next"></div>
                            </div>

                            <div class="food-cat-items">
                                <h2 class="flex-title mb-35">
                                    <img src="assets/img/shape/fire.png" alt="Image Not Found" /> 
                                    Our Popular category</h2>
                                <div class="food-cat-carousel swiper">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <a href="#">
                                                <img src="assets/img/menu/25.jpg" alt="Image Not Found" />
                                                <div class="overlay">
                                                    <span>Main Dishes</span>
                                                    <h5>Chicken Alfredo</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#">
                                                <img src="assets/img/menu/26.jpg" alt="Image Not Found" />
                                                <div class="overlay">
                                                    <span>Desserts</span>
                                                    <h5>Cheesecakes</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#">
                                                <img src="assets/img/menu/27.jpg" alt="Image Not Found" />
                                                <div class="overlay">
                                                    <span>Sea Food</span>
                                                    <h5>Salmon Fry</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a href="#">
                                                <img src="assets/img/menu/28.jpg" alt="Image Not Found" />
                                                <div class="overlay">
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