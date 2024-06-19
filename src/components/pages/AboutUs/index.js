import LayoutPages from "../../layouts/LayoutPage";
function AboutUs() {
    return (
        <LayoutPages title="Home Page">
            <div class="brand-area overflow-hidden default-padding bg-cover text-center bg-gray" style={{backgroundImage: "url(assets/img/shape/1.png)"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h4 class="sub-title">OUR TRUSTED 8K HAPPY PARTNER</h4>
                            <div class="brand-style-one-carousel swiper mt-40">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <img src="assets/img/brand/1.png" alt="Thumb" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="assets/img/brand/2.png" alt="Thumb" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="assets/img/brand/3.png" alt="Thumb" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="assets/img/brand/4.png" alt="Thumb" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="assets/img/brand/5.png" alt="Thumb" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-style-one-area default-padding mb-80">
                <div class="about-thumb">
                    <div class="item" style={{backgroundImage: "url(assets/img/about/2.jpg)"}}></div>
                    <div class="item" style={{backgroundImage: "url(assets/img/about/3.jpg)"}}></div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-6">
                            <div class="about-style-one-info">
                                <img src="assets/img/shape/2.png" alt="Image Not Found" />
                                <h4 class="sub-heading">About us</h4>
                                <h2 class="title">We Invite You <br /> To Visit Our Restaurant</h2>
                                <p>
                                    A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.
                                </p>
                                {/* <a class="btn btn-theme btn-md animation mt-10" href="#">Discover More</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chef-area default-padding bg-gray text-center">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <div class="site-heading text-center">
                                <h4 class="sub-title">MASTER CHEFS</h4>
                                <h2 class="title">Meet Our Special Chefs</h2>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xl-4 col-lg-6">
                            <div class="chef-style-one">
                                <div class="chef-thumb">
                                    <img src="assets/img/team/1.jpg" alt="Image Not Found" />
                                    <div class="info">
                                        <h4><a href="#">Alexander Petllo</a></h4>
                                        <span>Assistant Chef</span>
                                    </div>
                                    <ul class="social">
                                        <li>
                                            <a href="#">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6">
                            <div class="chef-style-one">
                                <div class="chef-thumb">
                                    <img src="assets/img/team/2.jpg" alt="Image Not Found" />
                                    <div class="info">
                                        <h4><a href="#">Mendia Juxef</a></h4>
                                        <span>Burger King</span>
                                    </div>
                                    <ul class="social">
                                        <li>
                                            <a href="#">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6">
                            <div class="chef-style-one">
                                <div class="chef-thumb">
                                    <img src="assets/img/team/3.jpg" alt="Image Not Found" />
                                    <div class="info">
                                        <h4><a href="#">Petro William</a></h4>
                                        <span>Main Chef</span>
                                    </div>
                                    <ul class="social">
                                        <li>
                                            <a href="#">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="opening-hours-area default-padding overflow-hidden">
                <div class="container">
                    <div class="opening-hour-items">
                        <h2 class="text-fixed">Restan</h2>
                        <div class="shape">
                            <img src="assets/img/shape/4.png" alt="Image Not Found" />
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="opening-hours-thumb video-bg-live">
                                    <img src="assets/img/banner/7.jpg" alt="Image Not Found" />
                                    <div class="player" data-property="{videoURL:'0Fs-4GiNxQ8',containment:'.video-bg-live', showControls:false, autoPlay:true, zoom:0, loop:true, mute:true, startAt:654, opacity:1, quality:'default'}"></div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="opening-hours-info">
                                    <h3>Opening Hours</h3>
                                    <p>
                                        A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..
                                    </p>
                                    <ul class="opening-hours-table">
                                        <li>
                                            <h6>Sunday to Tuesday:</h6> <span>10:00 - 09:00</span>
                                        </li>
                                        <li>
                                            <h6>Wednesday to Thursday:</h6> <span>11:30 - 10:30</span>
                                        </li>
                                        <li>
                                            <h6>Friday & Saturday:</h6> <span>10:30  - 12:00</span>
                                        </li>
                                    </ul>
                                    <div class="call-to-action">
                                        <div class="icon">
                                            <img src="assets/img/icon/6.png" alt="Image Not Found" />
                                        </div>
                                        <div class="info">
                                            <p>Call Anytime</p>
                                            <h4><a href="#">+964733-378901</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutPages>
    );
}

export default AboutUs;