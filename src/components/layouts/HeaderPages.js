import React, { useEffect, useState } from 'react';
import config from '../../config';

function HeaderPages({ onCartUpdate }) { 
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(totalItems);
    };

    updateCartCount();

    window.addEventListener('storage', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  useEffect(() => {
    if (onCartUpdate) { 
      onCartUpdate(cartCount);
    }
  }, [cartCount, onCartUpdate]); 

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
            <a className="navbar-brand" href={config.routes.home}>
              <img src="/assets/img/logo-light.png" className="logo logo-display" alt="Logo" />
              <img src="/assets/img/logo-light.png" className="logo logo-scrolled" alt="Logo" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown megamenu-fw">
                <a href={config.routes.home}>Home</a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages</a>
                <ul className="dropdown-menu">
                  <li><a href={config.routes.aboutus}>About Us</a></li>
                  <li><a href={config.routes.chef}>Our Chef</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Reservation</a>
                    <ul className="dropdown-menu submenu">
                      <li><a href={config.routes.bookTable}>New</a></li>
                      <li><a href={config.routes.bookingList}>View</a></li>
                    </ul>
                  </li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href={config.routes.menu}>Menu</a></li>
              <li className="dropdown"><a href={config.routes.blog}>Blog</a></li>
              <li className="dropdown"><a href={config.routes.shop}>Shop</a></li>
              <li style={{ position: "relative" }}>
                <a href={config.routes.cartTab}>
                  <i className="fas fa-shopping-bag" style={{ color: "white", fontSize: "20px" }}></i>
                  <span style={{
                    position: "absolute",
                    top: "20px",
                    right: "-10px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "1px 7px",
                    fontSize: "12px",
                  }}>
                    {cartCount}
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="attr-right">
            <div className="attr-nav">
              <ul>
                <li className="button"><a href={config.routes.bookTable}>Reservation</a></li>
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
