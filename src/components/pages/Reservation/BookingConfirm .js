import LayoutPages from "../../layouts/LayoutPage";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../layouts/BreadCrumb";
import "../../../public/css/booking_confirm.css";

function BookingConfirm() {
  const { id } = useParams();
  const breadcrumbPath = [
    { href: "/", label: "Home" },
    { href: "/booking", label: "Booking" }
  ];

  const [bookingDetail, setBookingDetail] = useState(null);

  const loadBookingDetail = async () => {
    try {
      const response = await api.get(`http://localhost:8080/api/v1/any/ordertables/${id}`);
      if (response.status === 200 && response.data.status) {
        setBookingDetail(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching booking detail:", error);
    }
  };

  useEffect(() => {
    loadBookingDetail();
  }, [id]);

  if (!bookingDetail) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <LayoutPages showBreadCrumb={false}>
      <BreadCrumb title="Booking Confirmation" path={breadcrumbPath} />
      <div className="booking-confirm-container">
        <h2>Booking Confirmation</h2>
        <div className="booking-confirm-details">
          <table>
            <tbody>
              <tr>
                <td><strong>Table Number:</strong></td>
                <td>{bookingDetail.id}</td>
              </tr>
              <tr>
                <td><strong>Name:</strong></td>
                <td>{bookingDetail.name}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{bookingDetail.email}</td>
              </tr>
              <tr>
                <td><strong>Phone:</strong></td>
                <td>{bookingDetail.phone}</td>
              </tr>
              <tr>
                <td><strong>Date:</strong></td>
                <td>{new Date(bookingDetail.date).toLocaleDateString("vi-VN")}</td>
              </tr>
              <tr>
                <td><strong>Time:</strong></td>
                <td>{bookingDetail.time}</td>
              </tr>
              <tr>
                <td><strong>Number of People:</strong></td>
                <td>{bookingDetail.numberOfPerson}</td>
              </tr>
              <tr>
                <td><strong>Menu:</strong></td>
                <td>{bookingDetail.menuName}</td>
              </tr>
              <tr>
                <td><strong>Booking Status:</strong></td>
                <td>{bookingDetail.status}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="booking-confirm-note">
          <h3>Note information</h3>
          <p>
            We would like to confirm that your table reservation has been successfully received. 
            Please review the information below carefully. If you notice any discrepancies, 
            do not hesitate to contact us immediately at our hotline <strong>12345678</strong> 
            for prompt assistance.
          </p>
          <p>
            Kindly remember to arrive on time for your check-in. We will hold your table for 
            a maximum of <strong>20 minutes</strong>. If you exceed this timeframe, we regretfully 
            may need to release your table for other guests.
          </p>
          <p>
            We hope you have a wonderful experience at our restaurant. Wishing you a fantastic day!
          </p>
        </div>

        <div className="button_confirm-container">
          <button
            className="button-confirm-page"
            onClick={() => (window.location.href = "/")}
          >
            Okay, I understand <i className="fa-regular fa-face-smile-wink"></i>
          </button>
        </div>
      </div>
    </LayoutPages>
  );
}

export default BookingConfirm;
