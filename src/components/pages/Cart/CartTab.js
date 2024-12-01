import LayoutPages from "../../layouts/LayoutPage";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../public/css/cart.css";


function CartTab() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCartItems = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(cart);
    };
    loadCartItems();
  }, []);

  useEffect(() => {
    if (selectAll) {
      setSelectedItems(new Set(cartItems.map((item) => item.id)));
    } else {
      setSelectedItems(new Set());
    }
  }, [selectAll, cartItems]);

  const handleQuantityChange = (id, newQuantity) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);

    if (newQuantity > 0) {
      const newSelectedItems = new Set(selectedItems);
      newSelectedItems.add(id);
      setSelectedItems(newSelectedItems);
    }
  };

  const handleRemoveItem = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
    setSelectedItems((prev) => {
      const newSelectedItems = new Set(prev);
      newSelectedItems.delete(id);
      return newSelectedItems;
    });
  };

  const handleRowClick = (id) => {
    const newSelectedItems = new Set(selectedItems);
    if (newSelectedItems.has(id)) {
      newSelectedItems.delete(id);
    } else {
      newSelectedItems.add(id);
    }
    setSelectedItems(newSelectedItems);
  };

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
  };

  const getTotalPrice = () => {
    const total = cartItems
      .filter((item) => selectedItems.has(item.id))
      .reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toFixed(2);
  };

  const handleCheckout = () => {
    const selectedCartItems = cartItems.filter((item) =>
      selectedItems.has(item.id)
    );
    localStorage.setItem("selectedCartItems", JSON.stringify(selectedCartItems));
    navigate("/check_out");
  };

  const totalPrice = parseFloat(getTotalPrice());

  return (
    <LayoutPages showBreadCrumb={false}>
      <div className="cart-tab-container">
        <div className="cart-tab-content">
          <h2 className="cart-tab-title">Your Cart</h2>
          {cartItems.length > 0 ? (
            <div className="cart-tab-items">
              <div className="cart-tab-select-actions">
                <label>
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                  />
                  Select All Items
                </label>
              </div>
              <table className="cart-tab-table">
                <thead>
                  <tr>
                    <th className="cart-tab-header">Select</th>
                    <th className="cart-tab-header">Image</th>
                    <th className="cart-tab-header">Name</th>
                    <th className="cart-tab-header">Price</th>
                    <th className="cart-tab-header">Quantity</th>
                    <th className="cart-tab-header">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className={`cart-tab-item ${
                        selectedItems.has(item.id) ? "selected" : ""
                      }`}
                      onClick={() => handleRowClick(item.id)}
                    >
                      <td className="cart-tab-select">
                        <input
                          type="checkbox"
                          checked={selectedItems.has(item.id)}
                          onChange={() => handleRowClick(item.id)}
                          onClick={(e) => e.stopPropagation()} 
                        />
                      </td>
                      <td className="cart-tab-image">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td className="cart-tab-name">{item.name}</td>
                      <td className="cart-tab-price">${item.price}</td>
                      <td className="cart-tab-quantity">
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          onChange={(e) =>
                            handleQuantityChange(item.id, parseInt(e.target.value))
                          }
                          onClick={(e) => e.stopPropagation()} 
                        />
                      </td>
                      <td className="cart-tab-actions">
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); 
                            handleRemoveItem(item.id);
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="cart-tab-total">
                <h3>Total Price: ${totalPrice}</h3>
                <button
                  onClick={totalPrice > 0 ? handleCheckout : undefined}
                  disabled={totalPrice === 0}
                  style={{
                    backgroundColor: totalPrice > 0 ? "#007bff" : "#ccc",
                    cursor: totalPrice > 0 ? "pointer" : "not-allowed",
                  }}
                >
                  Check out
                </button>
              </div>
            </div>
          ) : (
            <div className="cart-tab-empty">
              <img
                src="/assets/img/cart_emty.png"
                alt="Empty Cart"
                id="cart-empty-image"
              />
              <h3 id="cart-empty-title">Your cart is empty!</h3>
              <p className="cart-empty-text">Looks like you haven’t added anything to your cart yet.</p>
              <button
                className="cart-empty-button"
                onClick={() => navigate("/shop")}
              >
                Start Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </LayoutPages>
  );
}

export default CartTab;
