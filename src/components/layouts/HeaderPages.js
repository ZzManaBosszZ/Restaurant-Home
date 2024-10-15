import React, { useEffect, useState } from 'react';

function HeaderPages({ onCartUpdate }) { // Thêm onCartUpdate vào tham số
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

  // Gọi hàm này khi giỏ hàng được cập nhật
  useEffect(() => {
    if (onCartUpdate) { // Kiểm tra xem onCartUpdate có được truyền vào không
      onCartUpdate(cartCount);
    }
  }, [cartCount, onCartUpdate]); // Thêm onCartUpdate vào dependencies

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
            <a className="navbar-brand" href="/">
              <img src="/assets/img/logo-light.png" className="logo logo-display" alt="Logo" />
              <img src="/assets/img/logo-light.png" className="logo logo-scrolled" alt="Logo" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown megamenu-fw">
                <a href="/">Home</a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages</a>
                <ul className="dropdown-menu">
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/chef">Our Chef</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Reservation</a>
                    <ul className="dropdown-menu submenu">
                      <li><a href="/book_table">New</a></li>
                      <li><a href="/booking_list">View</a></li>
                    </ul>
                  </li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="/menu">Menu</a></li>
              <li className="dropdown"><a href="/blog">Blog</a></li>
              <li className="dropdown"><a href="/shop">Shop</a></li>
              <li style={{ position: "relative" }}>
                <a href="/cart">
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
                <li className="button"><a href="/book_table">Reservation</a></li>
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
