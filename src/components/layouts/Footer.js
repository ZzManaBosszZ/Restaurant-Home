function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-style-one bg-dark text-light">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-item mt-50">
                            <div className="f-item about">

                                <h4 className="widget-title">About Us</h4>
                                <p>
                                    Continued at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.
                                </p>

                                <ul className="footer-social">
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                            <div className="f-item link">
                                <h4 className="widget-title">Explore</h4>
                                <ul>
                                    <li>
                                        <a href="about-us.html">Compnay Profile</a>
                                    </li>
                                    <li>
                                        <a href="about-us.html">About</a>
                                    </li>
                                    <li>
                                        <a href="contact-us.html">Help Center</a>
                                    </li>
                                    <li>
                                        <a href="contact-us.html">Career</a>
                                    </li>
                                    <li>
                                        <a href="about-us.html">Features</a>
                                    </li>
                                    <li>
                                        <a href="contact-us.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-item  mt-50">
                            <div className="f-item contact">
                                <h4 className="widget-title">Contact Info</h4>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="content">
                                            175 10h Street, Office 375 Berlin, De 21562
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="content">
                                            <a href="tel:2151234567">+123 34598768</a> <br /> <a href="tel:2151234567">+554 34598734</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="content">
                                            <a href="mailto:name@email.com">food@restan.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-item mt-50">
                            <h4 className="widget-title">Newsletter</h4>
                            <p>
                                Join our subscribers list to get the latest news and special offers.
                            </p>
                            <div className="f-item newsletter">
                                <form action="#">
                                    <input type="email" placeholder="Your Email" className="form-control" name="email" />
                                    <button type="submit"> <i className="fas fa-arrow-right"></i></button>
                                </form>
                            </div>
                            <fieldset>
                                <input type="checkbox" id="privacy" name="privacy" />
                                <label htmlFor="privacy">I agree to the Privacy Policy</label>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-light">
                <div className="footer-bottom-shape">
                    <img src="/assets/img/shape/9.png" alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="footer-logo">
                                <img src="/assets/img/logo-light.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="col-lg-6 text-end">
                            <p>
                                © Copyright 2024 Restan. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;