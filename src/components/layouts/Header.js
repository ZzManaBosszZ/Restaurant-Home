// import { Link, NavLink } from "react-router-dom";
// import config from "../../config/index";
// import { isLoggedIn, getDecodedToken, removeAccessToken } from "../../utils/auth";

function Header() {
    // const decodedToken = getDecodedToken();

    // const handleLogout = () => {
    //     removeAccessToken();
    // };
    return (
        <header>
            <nav class="navbar mobile-sidenav brand-center-style-two dark-layout brand-center navbar-default validnavs">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i class="fa fa-bars"></i>
                        </button>
                        <a class="navbar-brand" href="index.html">
                            <img src="assets/img/logo-light.png" class="logo logo-display" alt="Logo" />
                            <img src="assets/img/logo-light.png" class="logo logo-scrolled" alt="Logo" />
                        </a>
                    </div>
                    <div class="collapse navbar-collapse" id="navbar-menu">

                        <img src="assets/img/logo-light.png" alt="Logo" />
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i class="fa fa-times"></i>
                        </button>

                        <ul class="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                            <li class="dropdown megamenu-fw">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Home</a>
                                <ul class="dropdown-menu megamenu-content" role="menu">
                                    <li>
                                        <div class="col-menu-wrap">
                                            <div class="col-item">
                                                <div class="menu-thumb">
                                                    <img src="assets/img/demo/home-1.jpg" alt="Image Not Found" />
                                                    <div class="overlay">
                                                        <a href="index.html">Light Version</a>
                                                        <a href="index-dark.html">Dark Version</a>
                                                    </div>
                                                </div>
                                                <h6 class="title"><a href="index.html">Home One</a></h6>
                                            </div>
                                            <div class="col-item">
                                                <div class="menu-thumb">
                                                    <img src="assets/img/demo/home-2.jpg" alt="Image Not Found" />
                                                    <div class="overlay">
                                                        <a href="index-2.html">Light Version</a>
                                                        <a href="index-2-dark.html">Dark Version</a>
                                                    </div>
                                                </div>
                                                <h6 class="title"><a href="index-2.html">Home Two</a></h6>
                                            </div>
                                            <div class="col-item">
                                                <div class="menu-thumb">
                                                    <img src="assets/img/demo/home-3.jpg" alt="Image Not Found" />
                                                    <div class="overlay">
                                                        <a href="index-3.html">Light Version</a>
                                                        <a href="index-3-dark.html">Dark Version</a>
                                                    </div>
                                                </div>
                                                <h6 class="title"><a href="index-3.html">Home Three</a></h6>
                                            </div>
                                            <div class="col-item">
                                                <div class="menu-thumb">
                                                    <img src="assets/img/demo/home-4.jpg" alt="Image Not Found" />
                                                    <div class="overlay">
                                                        <a href="index-4.html">Light Version</a>
                                                        <a href="index-4-dark.html">Dark Version</a>
                                                    </div>
                                                </div>
                                                <h6 class="title"><a href="index-4.html">Home Four</a></h6>
                                            </div>
                                            <div class="col-item">
                                                <div class="menu-thumb">
                                                    <img src="assets/img/demo/home-5.jpg" alt="Image Not Found" />
                                                    <div class="overlay">
                                                        <a href="index-5.html">Light Version</a>
                                                        <a href="index-5-dark.html">Dark Version</a>
                                                    </div>
                                                </div>
                                                <h6 class="title"><a href="index-5.html">Home Five</a></h6>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Pages</a>
                                <ul class="dropdown-menu">
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Our Chef</a>
                                        <ul class="dropdown-menu">
                                            <li><a href="chef.html">Chef Style One</a></li>
                                            <li><a href="chef-details.html">Chef Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="reservation.html">Reservation</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="404.html">Error Page</a></li>
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Dark Version</a>
                                        <ul class="dropdown-menu">
                                            <li><a href="about-us-dark.html">About Us</a></li>
                                            <li class="dropdown">
                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Our Chef</a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="chef-dark.html">Chef Style One</a></li>
                                                    <li><a href="chef-details-dark.html">Chef Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="reservation-dark.html">Reservation</a></li>
                                            <li><a href="contact-dark.html">Contact Us</a></li>
                                            <li><a href="404-dark.html">Error Page</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown megamenu-fw">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Home</a>
                                <ul class="dropdown-menu megamenu-content" role="menu">
                                    <li>
                                        <div class="col-menu-wrap">
                                            <div class="col-item">
                                                <div class="menu-thumb">
                                                    <img src="assets/img/demo/home-1.jpg" alt="Image Not Found" />
                                                    <div class="overlay">
                                                        <a href="index.html">Light Version</a>
                                                        <a href="index-dark.html">Dark Version</a>
                                                    </div>
                                                </div>
                                                <h6 class="title"><a href="index.html">Home One</a></h6>
                                            </div>
                                            <div class="col-item">
                                                <div class="menu-thumb">
                                                    <img src="assets/img/demo/home-2.jpg" alt="Image Not Found" />
                                                    <div class="overlay">
                                                        <a href="index-2.html">Light Version</a>
                                                        <a href="index-2-dark.html">Dark Version</a>
                                                    </div>
                                                </div>
                                                <h6 class="title"><a href="index-2.html">Home Two</a></h6>
                                            </div>
                                            <div class="col-item">
                                                <div class="menu-thumb">
                                                    <img src="assets/img/demo/home-3.jpg" alt="Image Not Found" />
                                                    <div class="overlay">
                                                        <a href="index-3.html">Light Version</a>
                                                        <a href="index-3-dark.html">Dark Version</a>
                                                    </div>
                                                </div>
                                                <h6 class="title"><a href="index-3.html">Home Three</a></h6>
                                            </div>
                                            <div class="col-item">
                                                <div class="menu-thumb">
                                                    <img src="assets/img/demo/home-4.jpg" alt="Image Not Found" />
                                                    <div class="overlay">
                                                        <a href="index-4.html">Light Version</a>
                                                        <a href="index-4-dark.html">Dark Version</a>
                                                    </div>
                                                </div>
                                                <h6 class="title"><a href="index-4.html">Home Four</a></h6>
                                            </div>
                                            <div class="col-item">
                                                <div class="menu-thumb">
                                                    <img src="assets/img/demo/home-5.jpg" alt="Image Not Found" />
                                                    <div class="overlay">
                                                        <a href="index-5.html">Light Version</a>
                                                        <a href="index-5-dark.html">Dark Version</a>
                                                    </div>
                                                </div>
                                                <h6 class="title"><a href="index-5.html">Home Five</a></h6>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Blog</a>
                                <ul class="dropdown-menu">
                                    <li><a href="blog-standard.html">Blog Standard</a></li>
                                    <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
                                    <li><a href="blog-2-colum.html">Blog Grid Two Colum</a></li>
                                    <li><a href="blog-3-colum.html">Blog Grid Three Colum</a></li>
                                    <li><a href="blog-single.html">Blog Single</a></li>
                                    <li><a href="blog-single-with-sidebar.html">Blog Single With Sidebar</a></li>
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Dark Version</a>
                                        <ul class="dropdown-menu">
                                            <li><a href="blog-standard-dark.html">Blog Standard</a></li>
                                            <li><a href="blog-with-sidebar-dark.html">Blog With Sidebar</a></li>
                                            <li><a href="blog-2-colum-dark.html">Blog Grid Two Colum</a></li>
                                            <li><a href="blog-3-colum-dark.html">Blog Grid Three Colum</a></li>
                                            <li><a href="blog-single-dark.html">Blog Single</a></li>
                                            <li><a href="blog-single-with-sidebar-dark.html">Blog Single With Sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Shop</a>
                                <ul class="dropdown-menu">
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="shop-single.html">Shop Single</a></li>
                                    <li><a href="shop-single-thumb-only.html">Shop Single Two</a></li>
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Dark Version</a>
                                        <ul class="dropdown-menu">
                                            <li><a href="shop-dark.html">Shop</a></li>
                                            <li><a href="shop-single-dark.html">Shop Single</a></li>
                                            <li><a href="shop-single-thumb-only-dark.html">Shop Single Two</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="overlay-screen"></div>
                </div>
            </nav>
        </header>
    );
}
export default Header;