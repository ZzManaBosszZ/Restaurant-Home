import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Thay đổi từ useHistory sang useNavigate
import { ToastContainer } from "react-toastify";
import LayoutPages from "../../layouts/LayoutPage";
import BreadCrumb from "../../layouts/BreadCrumb";
import "../../../public/css/booking_list.css";

function BookingList() {
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate(); // Khai báo navigate

    useEffect(() => {
        // Lấy thông tin đặt bàn từ local storage
        const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
        setBookings(savedBookings);
    }, []);

    const handleBookingClick = (bookingId) => {
        // Chuyển hướng đến trang booking_confirm khi nhấp vào booking
        navigate(`/booking_confirm/${bookingId}`); // Sử dụng navigate để điều hướng
    };

    return (
        <LayoutPages showBreadCrumb={false}>
            <BreadCrumb path={[{ href: "/", label: "Home" }, { href: "/booking-list", label: "My Bookings" }]} />

            <div id="booking-list-container">
                <h2 id="booking-list-title">My Bookings</h2>

                {bookings.length === 0 ? (
                    <p id="no-bookings">No bookings found.</p>
                ) : (
                    <ul id="booking-list-items">
                        {bookings.map((booking) => (
                            <li 
                                key={booking.id} 
                                id="booking-list-item"
                                onClick={() => handleBookingClick(booking.id)} // Thay đổi ở đây
                            >
                                <p id="booking-list-item-id">Booking ID: <span>{booking.id}</span></p>
                                <p id="booking-list-item-date">Date: <span>{booking.date}</span></p>
                                <p id="booking-list-item-status">Status: <span>{booking.status}</span></p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <ToastContainer />
        </LayoutPages>
    );
}

export default BookingList;
