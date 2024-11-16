import PayPalComponent from "./Paypal";

function Payment({ stripePromise, handleEventStripe, handleEventPayPal, price, handlePaymentCancel, handlePaymentError, onPaymentMethodChange, selectedPaymentMethod }) {
    const handlePaymentMethodChange = (e) => {
        const method = e.target.value;
        onPaymentMethodChange(method);
    };

    return (
        <div className="form-group">
                <PayPalComponent
                    amount={price}
                    onSuccess={(details, data) => handleEventPayPal(details, data)}
                    onCancel={handlePaymentCancel}
                    onError={handlePaymentError}
                />
        </div>
    );
}

export default Payment;
