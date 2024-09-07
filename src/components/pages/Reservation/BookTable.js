import { useState } from "react";
import LayoutPages from "../../layouts/LayoutPage";
import BreadCrumb from "../../layouts/BreadCrumb";
import '../../../public/css/bookTable.css';

function BookTable() {
    const breadcrumbPath = [
        { href: "/", label: "Home" },
        { href: "/book_table", label: "Reservation" }
    ];

    const [reservationDetails, setReservationDetails] = useState({
        location: '',
        date: '',
        time: '',
        customerName: '',
        phoneNumber: '',
        numberOfPeople: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReservationDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDepositPayment = () => {
        
        console.log("Proceeding to deposit payment", reservationDetails);
        window.location.href = '/deposit_payment';
    };

    const handleOrderFood = () => {
       
        console.log("Proceeding to order food", reservationDetails);
        window.location.href = '/order_food'; 
    };

    return (
        <LayoutPages showBreadCrumb={false}>
            <BreadCrumb title="Reservation" path={breadcrumbPath} />
            <div className="reservation-page-container">
                <h2>Table Reservation</h2>
                <form className="reservation-page-form">
                    <div className="reservation-page-form-group">
                        <label>Select Location:</label>
                        <select
                            name="location"
                            value={reservationDetails.location}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Choose a location</option>
                            <option value="Location 1">Cau Giay</option>
                            <option value="Location 2">Thanh Xuan</option>
                            <option value="Location 3">Ha Dong</option>
                        </select>
                    </div>

                    <div className="reservation-page-form-group">
                        <label>Select Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={reservationDetails.date}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="reservation-page-form-group">
                        <label>Select Time:</label>
                        <input
                            type="time"
                            name="time"
                            value={reservationDetails.time}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="reservation-page-form-group">
                        <label>Customer Name:</label>
                        <input
                            type="text"
                            name="customerName"
                            placeholder="Enter your name"
                            value={reservationDetails.customerName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="reservation-page-form-group">
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Enter your phone number"
                            value={reservationDetails.phoneNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="reservation-page-form-group">
                        <label>Number of People:</label>
                        <input
                            type="number"
                            name="numberOfPeople"
                            min="1"
                            value={reservationDetails.numberOfPeople}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="reservation-page-button-group">
                        <button
                            type="button"
                            className="reservation-page-btn"
                            onClick={handleDepositPayment}
                        >
                            Deposit Payment
                        </button>
                        <button
                            type="button"
                            className="reservation-page-btn"
                            onClick={handleOrderFood}
                        >
                            Order Food
                        </button>
                    </div>
                </form>
            </div>
        </LayoutPages>
    );
}

export default BookTable;
