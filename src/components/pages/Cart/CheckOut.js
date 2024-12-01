import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS của React-Toastify
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import LayoutPages from "../../layouts/LayoutPage";
import config from "../../../config";
import Payment from "../../Payment/index";
import "../../../public/css/checkout.css";

function CheckOut() {
  const [customerInfo, setCustomerInfo] = useState({});
  const [paymentDetails, setPaymentDetails] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await api.get(url.AUTH.PROFILE, {
          headers: { Authorization: `Bearer ${getAccessToken()}` }
        });
        setCustomerInfo(response.data.data);
      } catch (error) {
        console.error("Error loading profile:", error);
      }
    };

    const loadCartItems = () => {
      const cart = JSON.parse(localStorage.getItem("selectedCartItems")) || [];
      setCartItems(cart);
      const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setTotalPrice(total);
    };

    loadProfile();
    loadCartItems();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePaymentMethodChange = (e) => {
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      paymentMethod: e.target.value
    }));
  };

  const handlePaymentDetailsChange = (e) => {
    setPaymentDetails(e.target.value);
  };

  const handleSubmit = async (e) => {
    if (e?.preventDefault) {
      e.preventDefault(); // Chặn làm mới trang
    }
  
    const selectedCartItems =
      JSON.parse(localStorage.getItem("selectedCartItems")) || [];
  
    const createOrderPayload = {
      discount: customerInfo.discount || 0,
      foodQuantities: selectedCartItems.map((item) => ({
        foodId: item.id,
        quantity: item.quantity
      })),
      paymentMethod: customerInfo.paymentMethod,
      phone: customerInfo.phone, 
      address: customerInfo.address, 
    };
  
    try {
      const orderResponse = await api.post(
        url.ORDER.CREATE,
        createOrderPayload,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
            "Content-Type": "application/json"
          }
        }
      );
  
      if (orderResponse.status === 201) {
        const orderId = orderResponse.data.data.id;
  
        toast.success("Your order has been created successfully!");
  
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter(
          (item) =>
            !selectedCartItems.some(
              (selectedItem) => selectedItem.id === item.id
            )
        );
        localStorage.setItem("cart", JSON.stringify(cart));
  
        localStorage.removeItem("selectedCartItems");
  
        setTimeout(() => {
          navigate(`/order_confirm/${orderId}`); 
        }, 1000);
      } else {
        const errorText = await orderResponse.text();
        console.error("Error creating order:", errorText);
        toast.error(
          "There was an error creating your order. Please try again."
        );
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error(
        "There was a problem connecting to the server. Please try again."
      );
    }
  };
  

  const handlePayPalSuccess = async (details) => {
    await handleSubmit();
  };

  return (
    <LayoutPages showBreadCrumb={false}>
      <div className="checkout-area default-padding">
        <div className="container">
          <div className="checkout-content">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={customerInfo.fullName || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={customerInfo.phone || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={customerInfo.address || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Payment Method</label>
                <select
                  name="paymentMethod"
                  value={customerInfo.paymentMethod || ""}
                  onChange={handlePaymentMethodChange}
                >
                  <option value="card">Credit/Debit Card</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="paypal">PayPal</option>{" "}
                 
                </select>
              </div>
              {customerInfo.paymentMethod === "card" ||
              customerInfo.paymentMethod === "bank" ? (
                <div className="payment-details-container">
                  {customerInfo.paymentMethod === "card" && (
                    <div className="form-group">
                      <label htmlFor="paymentDetails">Card Details</label>
                      <input
                        type="text"
                        id="paymentDetails"
                        value={paymentDetails}
                        onChange={handlePaymentDetailsChange}
                        required
                      />
                    </div>
                  )}

                  {customerInfo.paymentMethod === "bank" && (
                    <div className="form-group">
                      <label htmlFor="paymentDetails">
                        Bank Transfer Instructions
                      </label>
                      <textarea
                        id="paymentDetails"
                        value={paymentDetails}
                        onChange={handlePaymentDetailsChange}
                        required
                      ></textarea>
                    </div>
                  )}
                </div>
              ) : null}
              <div className="order-summary_checkout">
                <h3>Order Summary</h3>
                <ul>
                  {cartItems
                    .filter((item) =>
                      JSON.parse(
                        localStorage.getItem("selectedCartItems") || []
                      ).some((selectedItem) => selectedItem.id === item.id)
                    )
                    .map((item) => (
                      <li key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          style={{ width: "50px", height: "50px", marginRight: "10px", borderRadius: "4px" }} 
                        />
                        <span>
                          {item.name} x {item.quantity} - ${item.price * item.quantity}
                        </span>
                      </li>
                    ))}
                    
                </ul>
                <p>Total: ${totalPrice}</p>
              </div>
              {customerInfo.paymentMethod === "paypal" && (
                <Payment
                selectedPaymentMethod={"paypal"}
                handleEventPayPal={handlePayPalSuccess}
                onPaymentMethodChange={handlePaymentMethodChange}
                price={totalPrice}
              />
              )}
              {customerInfo.paymentMethod !== "paypal" && (
                <div className="button-container">
                  <button type="submit" className="btn btn-primary">
                    Place Order
                  </button>
                </div>
              )}{" "}
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </LayoutPages>
  );
}

export default CheckOut;