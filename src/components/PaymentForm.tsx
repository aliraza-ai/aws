"use client";
import { useState } from "react";
import { loadStripe, StripeError } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("YOUR_PUBLISHABLE_KEY");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(
        error.message || "An error occurred while processing the payment."
      );
    } else {
      console.log("PaymentMethod:", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="card-element">
          Card Details
        </label>
        <div className="border border-gray-300 p-2 rounded">
          <CardElement
            id="card-element"
            options={{ style: { base: { fontSize: "16px" } } }}
          />
        </div>
      </div>
      {paymentError && <div className="text-red-500">{paymentError}</div>}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        type="submit"
      >
        Pay
      </button>
    </form>
  );
};

const PaymentPage = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl mb-4">Stripe Payment Form</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default function Payment() {
  return (
    <div>
      <PaymentPage />
    </div>
  );
}
