function HeaderPages() {
  return (
    <header>
      <nav className="navbar mobile-sidenav nav-top-margin navbar-sticky navbar-default validnavs navbar-fixed white no-background nav-border">
        <div className="container d-flex justify-content-between align-items-center">
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
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li className="dropdown megamenu-fw">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Home
                </a>
                <ul className="dropdown-menu megamenu-content" role="menu">
                  <li>
                    <div className="col-menu-wrap">
                      <div className="col-item">
                        <div className="menu-thumb">
                          <img
                            src="assets/img/demo/home-1.jpg"
                            alt="Image Not Found"
                          />
                          <div className="overlay">
                            <a href="index.html">Light Version</a>
                            <a href="index-dark.html">Dark Version</a>
                          </div>
                        </div>
                        <h6 className="title">
                          <a href="index.html">Home One</a>
                        </h6>
                      </div>
                      <div className="col-item">
                        <div className="menu-thumb">
                          <img
                            src="assets/img/demo/home-2.jpg"
                            alt="Image Not Found"
                          />
                          <div className="overlay">
                            <a href="index-2.html">Light Version</a>
                            <a href="index-2-dark.html">Dark Version</a>
                          </div>
                        </div>
                        <h6 className="title">
                          <a href="index-2.html">Home Two</a>
                        </h6>
                      </div>
                      <div className="col-item">
                        <div className="menu-thumb">
                          <img
                            src="assets/img/demo/home-3.jpg"
                            alt="Image Not Found"
                          />
                          <div className="overlay">
                            <a href="index-3.html">Light Version</a>
                            <a href="index-3-dark.html">Dark Version</a>
                          </div>
                        </div>
                        <h6 className="title">
                          <a href="index-3.html">Home Three</a>
                        </h6>
                      </div>
                      <div className="col-item">
                        <div className="menu-thumb">
                          <img
                            src="assets/img/demo/home-4.jpg"
                            alt="Image Not Found"
                          />
                          <div className="overlay">
                            <a href="index-4.html">Light Version</a>
                            <a href="index-4-dark.html">Dark Version</a>
                          </div>
                        </div>
                        <h6 className="title">
                          <a href="index-4.html">Home Four</a>
                        </h6>
                      </div>
                      <div className="col-item">
                        <div className="menu-thumb">
                          <img
                            src="assets/img/demo/home-5.jpg"
                            alt="Image Not Found"
                          />
                          <div className="overlay">
                            <a href="index-5.html">Light Version</a>
                            <a href="index-5-dark.html">Dark Version</a>
                          </div>
                        </div>
                        <h6 className="title">
                          <a href="index-5.html">Home Five</a>
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      Our Chef
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="chef.html">Chef Style One</a>
                      </li>
                      <li>
                        <a href="chef-details.html">Chef Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">Reservation</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="404.html">Error Page</a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      Dark Version
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="about-us-dark.html">About Us</a>
                      </li>
                      <li className="dropdown">
                        <a
                          href="#"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Our Chef
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="chef-dark.html">Chef Style One</a>
                          </li>
                          <li>
                            <a href="chef-details-dark.html">Chef Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="">Reservation</a>
                      </li>
                      <li>
                        <a href="contact-dark.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="404-dark.html">Error Page</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Menu
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="food-menu.html">Menu Style One</a>
                  </li>
                  <li>
                    <a href="food-menu-2.html">Menu Style Two</a>
                  </li>
                  <li>
                    <a href="food-menu-3.html">Menu Style Three</a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      Dark Version
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="food-menu-dark.html">Menu Style One</a>
                      </li>
                      <li>
                        <a href="food-menu-2-dark.html">Menu Style Two</a>
                      </li>
                      <li>
                        <a href="food-menu-3-dark.html">Menu Style Three</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="blog-standard.html">Blog Standard</a>
                  </li>
                  <li>
                    <a href="blog-with-sidebar.html">Blog With Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-2-colum.html">Blog Grid Two Colum</a>
                  </li>
                  <li>
                    <a href="blog-3-colum.html">Blog Grid Three Colum</a>
                  </li>
                  <li>
                    <a href="blog-single.html">Blog Single</a>
                  </li>
                  <li>
                    <a href="blog-single-with-sidebar.html">
                      Blog Single With Sidebar
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      Dark Version
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="blog-standard-dark.html">Blog Standard</a>
                      </li>
                      <li>
                        <a href="blog-with-sidebar-dark.html">
                          Blog With Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-2-colum-dark.html">Blog Grid Two Colum</a>
                      </li>
                      <li>
                        <a href="blog-3-colum-dark.html">
                          Blog Grid Three Colum
                        </a>
                      </li>
                      <li>
                        <a href="blog-single-dark.html">Blog Single</a>
                      </li>
                      <li>
                        <a href="blog-single-with-sidebar-dark.html">
                          Blog Single With Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/shop">Shop</a>
                  </li>
                  <li>
                    <a href="shop-single.html">Shop Single</a>
                  </li>
                  <li>
                    <a href="shop-single-thumb-only.html">Shop Single Two</a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      Dark Version
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="shop-dark.html">Shop</a>
                      </li>
                      <li>
                        <a href="shop-single-dark.html">Shop Single</a>
                      </li>
                      <li>
                        <a href="shop-single-thumb-only-dark.html">
                          Shop Single Two
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                
                <a href="/cart">
                  <i
                    className="fas fa-shopping-bag"
                    style={{ color: "white", fontSize:"20px" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="attr-right">
            <div className="attr-nav">
              <ul>
                <li className="button">
                  <a href="/book_table">Reservation</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="overlay-screen"></div>
      </nav>
    </header>
  );
}

export default HeaderPages;
