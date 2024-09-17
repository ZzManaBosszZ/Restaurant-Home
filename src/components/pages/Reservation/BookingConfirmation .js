import LayoutPages from "../../layouts/LayoutPage";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BookingConfirmation() {
  const [bookingDetails, setBookingDetails] = useState(null);
  const navigate = useNavigate(); // Add this line

  useEffect(() => {
    const loadBookingDetails = () => {
      const details = JSON.parse(localStorage.getItem("bookingDetails"));
      setBookingDetails(details);
    };
    loadBookingDetails();
  }, []);

  if (!bookingDetails) {
    return <p>Loading...</p>;
  }

  return (
    <LayoutPages showBreadCrumb={false}>
      <div className="confirmation-area default-padding">
        <div className="container">
          <div className="confirmation-content">
            <h2>Booking Confirmation</h2>
            <p><strong>Name:</strong> {bookingDetails.name}</p>
            <p><strong>Phone Number:</strong> {bookingDetails.phone}</p>
            <p><strong>Date:</strong> {bookingDetails.date}</p>
            <p><strong>Time:</strong> {bookingDetails.time}</p>
            <p><strong>Number of People:</strong> {bookingDetails.numberOfPeople}</p>
            <div className="button-container">
              <button onClick={() => navigate("/")} className="btn btn-primary">
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutPages>
  );
}

export default BookingConfirmation;
