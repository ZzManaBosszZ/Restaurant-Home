import React from "react";

function CartIcon({ cart }) {
  return (
    <div className="cart-icon">
      <a href="/cart">
        <i className="fas fa-shopping-bag"></i>
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </a>
    </div>
  );
}

export default CartIcon;
