import React from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutPages from '../../layouts/LayoutPage';

function PaymentCancel() {
  const navigate = useNavigate();

  const handlePayAgain = () => {
    navigate('/check_out'); // Change this to the relevant route for retrying payment
  };

  return (
    <LayoutPages showBreadCrumb={false}>
      <div className="checkout-area default-padding">
        <div className="container">
          <div className="payment-cancel-content">
            <h2>Payment Cancelled</h2>
            <p>We're sorry, but your payment has been cancelled. If you have any questions, please contact our support team.</p>
            <h4>You can Pay Again</h4>
            <button onClick={handlePayAgain} className="btn btn-primary">
              Actually Pay Again
            </button>
          </div>
        </div>
      </div>
    </LayoutPages>
  );
}

export default PaymentCancel;
