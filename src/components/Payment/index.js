import PayPalComponent from "./Paypal";

function Payment({ stripePromise, handleEventStripe, handleEventPayPal, price, handlePaymentCancel, handlePaymentError, onPaymentMethodChange, selectedPaymentMethod }) {

    return (
        <div>
            {selectedPaymentMethod === "paypal" && (
                <PayPalComponent
                    amount={price}
                    onSuccess={(details, data) => handleEventPayPal(details, data)}
                    onCancel={handlePaymentCancel}
                    onError={handlePaymentError}
                />
            )}
        </div>
    );
}

export default Payment;
