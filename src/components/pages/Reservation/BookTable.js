import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../../config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment"; 
import api from "../../../services/api";
import { getAccessToken } from "../../../utils/auth";
import LayoutPages from "../../layouts/LayoutPage";
import BreadCrumb from "../../layouts/BreadCrumb";
import "../../../public/css/bookTable.css";

function BookTable() {
  const token = getAccessToken();
  const [bookingInfo, setBookingInfo] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    numberOfPerson: "",
    menuId: [],
  });

  const [menus, setMenus] = useState([]);
  const [existingBooking, setExistingBooking] = useState(null);
  const navigate = useNavigate();

  const breadcrumbPath = [
    { href: "/", label: "Home" },
    { href: "/book-table", label: "Book a Table" },
  ];

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await api.get("http://localhost:8083/api/v1/menus", {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        });
        if (response.status === 200) {
          setMenus(response.data.data); 
        }
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

   

    fetchMenus();
 
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedTime = moment(bookingInfo.time, "HH:mm").format("HH:mm:ss");

    const orderData = {
      name: bookingInfo.name,
      numberOfPerson: bookingInfo.numberOfPerson,
      phone: bookingInfo.phone,
      email: bookingInfo.email,
      time: formattedTime,
      date: bookingInfo.date,
      menuId: bookingInfo.menuId,
    };

    try {
      const response = await api.post("http://localhost:8083/api/v1/any/ordertables", orderData, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });

      if (response.status === 200) {
         
        toast.success("Your table has been booked successfully!");
        navigate(config.routes.bookingConfirm); 
   
      } else {
        toast.error("There was an error booking your table. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data.message || 'Something went wrong'}`);
      } else {
        toast.error("No response from server. Please try again.");
      }
    }
  };

  return (
    <LayoutPages showBreadCrumb={false}>
      <div className="booking-page-container">
        <div className="booking-page-content">
          <BreadCrumb path={breadcrumbPath} />
          <div className="booking-page-form-container">
            <h2 className="booking-page-title" id="booking-page-title">Book a Table</h2>
            <form className="booking-page-form" onSubmit={handleSubmit}>
              {["name", "phone", "email", "date", "time", "numberOfPerson"].map((field, index) => (
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
              <div className="booking-page-form-group">
                <label className="booking-page-form-label" htmlFor="menuId">Select Menu</label>
                <select
                  className="booking-page-form-input"
                  id="menuId"
                  name="menuId"
                  value={bookingInfo.menuId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a menu</option>
                  {menus.map(menu => (
                    <option key={menu.id} value={menu.id}>{menu.name}</option>
                  ))}
                </select>
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
