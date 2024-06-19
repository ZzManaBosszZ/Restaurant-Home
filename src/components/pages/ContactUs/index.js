import LayoutPages from "../../layouts/LayoutPage";

function ContactUs() {
    return (
        <LayoutPages>
            <div class="contact-style-one-area default-padding overflow-hidden">
                <div class="container">
                    <div class="row align-center">

                        <div class="col-lg-10 offset-lg-1">

                            <div class="contact-style-one-info">
                                <ul>
                                    <li className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                        <div class="icon">
                                            <img src="assets/img/icon/phone.png" alt="Icon" />
                                        </div>
                                        <div class="content">
                                            <h5 class="title">Hotline</h5>
                                            <a href="#">+4733378901</a>
                                        </div>
                                    </li>
                                    <li class="wow fadeInUp" data-wow-delay="300ms" style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInUp' }}>
                                        <div class="icon">
                                            <img src="assets/img/icon/placeholder.png" alt="Icon" />
                                        </div>
                                        <div class="info">
                                            <h5 class="title">Our Location</h5>
                                            <p>
                                                55 Main Street, The Grand Avenue 2nd Block, New York City
                                            </p>
                                        </div>
                                    </li>
                                    <li class="wow fadeInUp" data-wow-delay="500ms" style={{ visibility: 'visible', animationDelay: '500ms', animationName: 'fadeInUp' }}>
                                        <div class="icon">
                                            <img src="assets/img/icon/email.png" alt="Icon" />
                                        </div>
                                        <div class="info">
                                            <h5 class="title">Official Email</h5>
                                            <a href="mailto:info@restan.com.com">info@restan.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-10 offset-lg-1">
                            <div class="contact-form-style-one">
                                <div class="heading text-center">
                                    <h5 class="sub-title">Keep in touch</h5>
                                    <h2 class="heading">Send us a Massage</h2>
                                </div>
                                <form action="https://validthemes.net/site-template/restan/assets/mail/contact.php" method="POST" class="contact-form contact-form">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input class="form-control" id="name" name="name" placeholder="Name" type="text" />
                                                <span class="alert-error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <input class="form-control" id="email" name="email" placeholder="Email*" type="email" />
                                                <span class="alert-error"></span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <input class="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
                                                <span class="alert-error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group comments">
                                                <textarea class="form-control" id="comments" name="comments" placeholder="Your Message *"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <button type="submit" name="submit" id="submit">
                                                <i class="fa fa-paper-plane"></i> Get in Touch
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 alert-notification">
                                        <div id="message" class="alert-msg"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="maps-area overflow-hidden">
                <div class="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0981036872977!2d105.779075575153!3d21.028760280620524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b32ecb92db%3A0x3964e6238a3bd088!2zOCBUw7RuIFRo4bqldCBUaHV54bq_dCwgTeG7uSDEkMOsbmgsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1718680185672!5m2!1svi!2s"></iframe>
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

export default ContactUs;