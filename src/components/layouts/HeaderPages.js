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
                <a href="/" className="" >
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
                    <a href="/chef" className="" data-toggle="dropdown">
                      Our Chef
                    </a>
                    
                  </li>
                  <li>
                    <a href="/book_table">Reservation</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                 
                </ul>
              </li>
              <li className="dropdown">
                <a href="/menu" className="" data-toggle="dropdown">
                  Menu
                </a>
                
              </li>
              <li className="dropdown">
                <a href="/blog" className="" data-toggle="dropdown">
                  Blog
                </a>
                
              </li>
              <li className="dropdown">
                <a href="/shop" className="" data-toggle="dropdown">
                  Shop
                </a>
                
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
