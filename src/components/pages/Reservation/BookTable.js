import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import url from "../../../services/url";
import api from "../../../services/api";
import { getAccessToken } from "../../../utils/auth";
import LayoutPages from "../../layouts/LayoutPage";
import BreadCrumb from "../../layouts/BreadCrumb";
import "../../../public/css/bookTable.css";

function BookTable() {
  const [bookingInfo, setBookingInfo] = useState({
    full_name: "", 
    phone: "",
    email: "",
    date: "",
    time: "",
    numberOfPerson: "",
    menuId: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [menus, setMenus] = useState([]);
  const [isMenuVisible, setIsMenuVisible] = useState(false); // State to toggle menu visibility
  const navigate = useNavigate();

  const breadcrumbPath = [
    { href: "/", label: "Home" },
    { href: "/book-table", label: "Book a Table" },
  ];

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await api.get("http://localhost:8080/api/v1/menus", {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        });
        if (response.status === 200) {
          setMenus(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    const loadProfile = async () => {
      try {
        const response = await api.get(url.AUTH.PROFILE, {
          headers: { Authorization: `Bearer ${getAccessToken()}` }
        });
        const customerInfo = response.data.data;
        setBookingInfo((prevInfo) => ({
          ...prevInfo,
          full_name: customerInfo.full_name || '',
          phone: customerInfo.phone || '',
          email: customerInfo.email || '',
        }));
      } catch (error) {
        console.error("Error loading profile:", error);
      }
    };

    fetchMenus();
    loadProfile();

  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (isSubmitting) return; 
  
    const selectedDate = moment(bookingInfo.date, "YYYY-MM-DD");
    const today = moment().startOf('day');
    if (!selectedDate.isSameOrAfter(today)) {
      toast.error("You cannot book a table in the past. Please select a valid date.");
      return;
    }
  
    if (parseInt(bookingInfo.numberOfPerson, 10) > 20) {
      toast.error("The number of people cannot exceed 20.");
      return;
    }
  
    setIsSubmitting(true);
  
    const formattedTime = moment(bookingInfo.time, "HH:mm").format("HH:mm:ss");
  
    const orderData = {
      name: bookingInfo.full_name,
      numberOfPerson: bookingInfo.numberOfPerson,
      phone: bookingInfo.phone,
      email: bookingInfo.email,
      time: formattedTime,
      date: bookingInfo.date,
      menuId: bookingInfo.menuId,
    };
  
    try {
      const response = await api.post("http://localhost:8080/api/v1/any/ordertables", orderData, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
  
      if (response.status === 200) {
        toast.success("Your table has been booked successfully!");
        const booking = {
          id: response.data.data.id,
          full_name: bookingInfo.full_name,
          numberOfPerson: bookingInfo.numberOfPerson,
          phone: bookingInfo.phone,
          email: bookingInfo.email,
          time: formattedTime,
          date: bookingInfo.date,
          menuId: bookingInfo.menuId,
        };
  
        const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
        existingBookings.push(booking);
        localStorage.setItem("bookings", JSON.stringify(existingBookings));
  
        setTimeout(() => {
          navigate(`/booking_confirm/${response.data.data.id}`);
        }, 2000);
      } else {
        toast.error("There was an error booking your table. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data.message || 'Something went wrong'}`);
      } else {
        toast.error("No response from server. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <LayoutPages showBreadCrumb={false}>
      <div className="booking-page-container">
        <div className="booking-page-content">
          <BreadCrumb path={breadcrumbPath} />
          <div className="booking-page-form-container">
            <h2 className="booking-page-title" id="booking-page-title">Book a Table</h2>
            <form className="booking-page-form" onSubmit={handleSubmit}>
              {["full_name", "phone", "email", "date", "time", "numberOfPerson"].map((field, index) => (
                <div key={index} className="booking-page-form-group">
                  <label className="booking-page-form-label" htmlFor={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                  </label>
                  <input
                    className="booking-page-form-input"
                    type={field === "email" ? "email" : field === "date" ? "date" : field === "time" ? "time" : "text"}
                    id={field}
                    name={field}
                    value={bookingInfo[field]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}

              {/* Select Menu Section */}
              <div className="booking-page-form-group">
                <label className="booking-page-form-label" htmlFor="menuId">Select Menu</label>
                <a href="#!" id="show-menu-link" onClick={toggleMenuVisibility}>
                  {isMenuVisible ? "Hide menu list" : "Show menu list"}
                </a>
                {isMenuVisible && (
                  <div className="menu-list-container">
                    <button
                      className="close-menu-button"
                      onClick={toggleMenuVisibility}
                    >
                      ×
                    </button>
                    <ul className="menu-list">
                      {menus.map((menu) => (
                        <li key={menu.id} className="menu-item">
                          <img
                            src={menu.image}
                            alt={menu.name}
                            className="menu-item-image"
                          />
                          <span className="menu-item-name">{menu.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <select
                  className="booking-page-form-input"
                  id="menuId"
                  name="menuId"
                  value={bookingInfo.menuId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a menu</option>
                  {menus.map((menu) => (
                    <option key={menu.id} value={menu.id}>{menu.name}</option>
                  ))}
                </select>
              </div>

              <div className="booking-page-button-container">
                <button type="submit" className="booking-page-submit-button" disabled={isSubmitting}>
                  {isSubmitting ? "Booking..." : "Book Table"}
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
