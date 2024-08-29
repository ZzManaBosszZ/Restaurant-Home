import LayoutPages from "../../layouts/LayoutPage";

function ContactUs() {
    return (
        <LayoutPages>
            <div className="contact-style-one-area default-padding overflow-hidden">
                <div className="container">
                    <div className="row align-center">

                        <div className="col-lg-10 offset-lg-1">

                            <div className="contact-style-one-info">
                                <ul>
                                    <li classNameName="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                        <div className="icon">
                                            <img src="assets/img/icon/phone.png" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h5 className="title">Hotline</h5>
                                            <a href="#">+4733378901</a>
                                        </div>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="300ms" style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInUp' }}>
                                        <div className="icon">
                                            <img src="assets/img/icon/placeholder.png" alt="Icon" />
                                        </div>
                                        <div className="info">
                                            <h5 className="title">Our Location</h5>
                                            <p>
                                                55 Main Street, The Grand Avenue 2nd Block, New York City
                                            </p>
                                        </div>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="500ms" style={{ visibility: 'visible', animationDelay: '500ms', animationName: 'fadeInUp' }}>
                                        <div className="icon">
                                            <img src="assets/img/icon/email.png" alt="Icon" />
                                        </div>
                                        <div className="info">
                                            <h5 className="title">Official Email</h5>
                                            <a href="mailto:info@restan.com.com">info@restan.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact-form-style-one">
                                <div className="heading text-center">
                                    <h5 className="sub-title">Keep in touch</h5>
                                    <h2 className="heading">Send us a Massage</h2>
                                </div>
                                <form action="https://validthemes.net/site-template/restan/assets/mail/contact.php" method="POST" className="contact-form contact-form">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                                                <span className="alert-error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />
                                                <span className="alert-error"></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
                                                <span className="alert-error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group comments">
                                                <textarea className="form-control" id="comments" name="comments" placeholder="Your Message *"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <button type="submit" name="submit" id="submit">
                                                <i className="fa fa-paper-plane"></i> Get in Touch
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 alert-notification">
                                        <div id="message" className="alert-msg"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="maps-area overflow-hidden">
                <div className="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0981036872977!2d105.779075575153!3d21.028760280620524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b32ecb92db%3A0x3964e6238a3bd088!2zOCBUw7RuIFRo4bqldCBUaHV54bq_dCwgTeG7uSDEkMOsbmgsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1718680185672!5m2!1svi!2s"></iframe>
                </div>
            </div>
            <div className="opening-hours-area default-padding overflow-hidden">
                <div className="container">
                    <div className="opening-hour-items">
                        <h2 className="text-fixed">Restan</h2>
                        <div className="shape">
                            <img src="assets/img/shape/4.png" alt="Image Not Found" />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="opening-hours-thumb video-bg-live">
                                    <img src="assets/img/banner/7.jpg" alt="Image Not Found" />
                                    <div className="player" data-property="{videoURL:'0Fs-4GiNxQ8',containment:'.video-bg-live', showControls:false, autoPlay:true, zoom:0, loop:true, mute:true, startAt:654, opacity:1, quality:'default'}"></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="opening-hours-info">
                                    <h3>Opening Hours</h3>
                                    <p>
                                        A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..
                                    </p>
                                    <ul className="opening-hours-table">
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
                                    <div className="call-to-action">
                                        <div className="icon">
                                            <img src="assets/img/icon/6.png" alt="Image Not Found" />
                                        </div>
                                        <div className="info">
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