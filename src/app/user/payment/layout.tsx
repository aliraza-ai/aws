"use client";

import React, { useState, ReactNode } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("YOUR_PUBLISHABLE_KEY");

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");

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
      billing_details: {
        name: name,
        email: email,
        address: {
          line1: address,
        },
      },
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
    <form
      onSubmit={handleSubmit}
      className="px-6 py-10 rounded-lg drop-shadow-lg border border-blue-900 backdrop-blur-md"
    >
      <div className="mb-4">
        <label
          className="block mb-2 font-bold text-white"
          htmlFor="card-element"
        >
          Cardholder's Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold text-white" htmlFor="email">
          E-mail
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold text-white" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className=" contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
          placeholder="Enter your address"
        />
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 font-bold text-white"
          htmlFor="card-element"
        >
          Card Details
        </label>
        <div className="!text-white py-4 p-2 rounded-full bg-gradient-to-b from-[#0F1333] to-[#1D203F] ">
          <CardElement
            id="card-element"
            options={{
              style: { base: { fontSize: "16px", color: "#ffffff" } },
            }}
          />
        </div>
      </div>
      {paymentError && <div className="text-red-500">{paymentError}</div>}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        type="submit"
      >
        Pay Now
      </button>
    </form>
  );
};

const PaymentPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <main>{children}</main>
      <div className="absolute top-14 right-0 md:px-20 md:py-10 p-6 w-full lg:w-[calc(100%-250px)] mx-auto text-white">
        <PaymentPage />
      </div>
    </div>
  );
};

export default Layout;
