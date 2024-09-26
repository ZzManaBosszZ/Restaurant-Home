import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment"; // Import moment.js
import api from "../../../services/api";
import { getAccessToken } from "../../../utils/auth";
import LayoutPages from "../../layouts/LayoutPage";
import BreadCrumb from "../../layouts/BreadCrumb";
import "../../../public/css/bookTable.css";

function BookTable() {
  const token = getAccessToken();
console.log("Access Token:", token);
  const [bookingInfo, setBookingInfo] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    numberOfPerson: "",
    menuId: 1,
  });

  const navigate = useNavigate();

  const breadcrumbPath = [
    { href: "/", label: "Home" },
    { href: "/book-table", label: "Book a Table" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert time to HH:mm:ss format
    const formattedTime = moment(bookingInfo.time, "HH:mm").format("HH:mm:ss");

   

    // Create order data to send to API
    const orderData = {
      name: bookingInfo.name,
      numberOfPerson: bookingInfo.numberOfPerson , // Ensure it's an integer
      phone: bookingInfo.phone,
      email: bookingInfo.email,
      time: formattedTime, // Use formatted time
      date: bookingInfo.date,
      menuId: bookingInfo.menuId,
    };

    try {
      const response = await api.post("http://localhost:8083/api/v1/any/ordertables", orderData, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    

      if (response.status === 200) {
        toast.success("Your table has been booked successfully!");
        // Reset the booking information
        setBookingInfo({
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          numberOfPerson: "",
          menuId: 1,
        });
        setTimeout(() => {
          navigate("/booking-confirmation");
        }, 3000);
      } else {
        const errorText = await response.text();
        console.error("Error booking table:", errorText);
        toast.error("There was an error booking your table. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        // Xử lý lỗi từ server
        console.log("Error from server:", error.response.data);
        if (error.response.status === 404) {
          toast.error(`Error 404: ${error.response.data.message || 'Not Found'}`);
        } else if (error.response.status === 401) {
          toast.error(`Error 401: ${error.response.data.message || 'Unauthorized'}`);
        } else {
          toast.error(`Error: ${error.response.data.message || 'Something went wrong'}`);
        }
      } else if (error.request) {
        // Yêu cầu đã được gửi nhưng không nhận được phản hồi
        console.log("Request made but no response received:", error.request);
        toast.error("No response from server. Please try again.");
      }  else {
        console.log("Request setup error:", error.message);
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
