import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS của React-Toastify
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import LayoutPages from "../../layouts/LayoutPage";
import BreadCrumb from "../../layouts/BreadCrumb";
import config from "../../../config";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import "../../../public/css/bookTable.css";


function BookTable() {
  const [bookingInfo, setBookingInfo] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    numberOfPeople: "",
  });

  const navigate = useNavigate();

  const breadcrumbPath = [
    { href: "/", label: "Home" },
    { href: "/book-table", label: "Book a Table" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      const response = await api.post(
        "/any/ordertables",
        bookingInfo,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
            "Content-Type": "application/json",
          }
        }
      );

      if (response.status === 201) {
        toast.success("Your table has been booked successfully!");
        
        // Clear form data or redirect
        setBookingInfo({
          name: "",
          phone: "",
          date: "",
          time: "",
          numberOfPeople: "",
        });

        setTimeout(() => {
          navigate("/booking-confirmation"); // Navigate to booking confirmation page
        }, 3000);
      } else {
        const errorText = await response.text();
        console.error("Error booking table:", errorText);
        toast.error("There was an error booking your table. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("There was a problem connecting to the server. Please try again.");
    }
  };

  return (
    <LayoutPages showBreadCrumb={false}>
    <div className="booking-page-container">
      <div className="booking-page-content">
        <BreadCrumb path={breadcrumbPath} />
        <div className="booking-page-form-container">
          <h2 className="booking-page-title">Book a Table</h2>
          <form className="booking-page-form" onSubmit={handleSubmit}>
            <div className="booking-page-form-group">
              <label className="booking-page-form-label" htmlFor="name">Name</label>
              <input
                className="booking-page-form-input"
                type="text"
                id="name"
                name="name"
                value={bookingInfo.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="booking-page-form-group">
              <label className="booking-page-form-label" htmlFor="phone">Phone Number</label>
              <input
                className="booking-page-form-input"
                type="text"
                id="phone"
                name="phone"
                value={bookingInfo.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="booking-page-form-group">
              <label className="booking-page-form-label" htmlFor="date">Date</label>
              <input
                className="booking-page-form-input"
                type="date"
                id="date"
                name="date"
                value={bookingInfo.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="booking-page-form-group">
              <label className="booking-page-form-label" htmlFor="time">Time</label>
              <input
                className="booking-page-form-input"
                type="time"
                id="time"
                name="time"
                value={bookingInfo.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="booking-page-form-group">
              <label className="booking-page-form-label" htmlFor="numberOfPeople">Number of People</label>
              <input
                className="booking-page-form-input"
                type="number"
                id="numberOfPeople"
                name="numberOfPeople"
                value={bookingInfo.numberOfPeople}
                onChange={handleChange}
                required
              />
            </div>
            <div className="booking-page-button-container">
              <button type="submit" className="booking-page-submit-button">
                Book Table
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <ToastContainer />
  </LayoutPages>
  );
}

export default BookTable;
