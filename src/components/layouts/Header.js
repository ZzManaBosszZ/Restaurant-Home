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
      <nav className="navbar mobile-sidenav brand-center-style-two dark-layout brand-center navbar-default validnavs">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="index.html">
              <img
                src="assets/img/logo-light.png"
                className="logo logo-display"
                alt="Logo"
              />
              <img
                src="assets/img/logo-light.png"
                className="logo logo-scrolled"
                alt="Logo"
              />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <img src="assets/img/logo-light.png" alt="Logo" />
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i className="fa fa-times"></i>
            </button>

            <ul
              className="nav navbar-nav navbar-center"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li className="dropdown megamenu-fw">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                  Home
                </a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li className="dropdown">
                    <a href="/chef" className="">
                      Our Chef
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Reservation
                    </a>
                    <ul className="dropdown-menu submenu">
                      <li>
                        <a href="/book_table">New</a>
                      </li>
                      <li>
                        <a href="/booking_list">View</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </li>

              <li className="dropdown megamenu-fw">
                <a href="/menu" className="dropdown-toggle" data-toggle="dropdown">
                  Menu
                </a>
              </li>
              <li className="dropdown">
                <a href="/blog" className="dropdown-toggle" data-toggle="dropdown">
                  Blog
                </a>
              </li>
              <li className="dropdown">
                <a href="/shop" className="dropdown-toggle" data-toggle="dropdown">
                  Shop
                </a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="overlay-screen"></div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
