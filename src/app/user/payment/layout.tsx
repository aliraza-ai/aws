"use client";

import React, { useState, ReactNode, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Swal from "sweetalert2";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { CheckIcon } from "../../../../public";
import Image from "next/image";
import { pricingData } from "@/constants";
import StripeTransaction from "@/utils/StripeTransaction";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '');

const CheckoutForm: React.FC = () => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const searchParams = new URLSearchParams(useSearchParams().toString());
  const planId = searchParams.get("planId") || "";

  let selectedPlan = pricingData.find((plan) => plan.id.toString() === planId);

  if (!selectedPlan) {
    selectedPlan = pricingData[2];
  }

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
      Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: error.message || "An error occurred while processing the payment.",
      });
    } else {
      // console.log("PaymentMethod:", paymentMethod);
      const id = paymentMethod.id;
      const TransactionSuccess = await StripeTransaction(planId, id)
      if (TransactionSuccess.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: TransactionSuccess.message,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: TransactionSuccess.message,
        });
      }
    }
  };

  return (
    <>
      <h1 className="font-bold text-3xl my-4">Payment Summary</h1>
      <div className="md:flex justify-between p-3 rounded-lg drop-shadow-lg border border-blue-900 backdrop-blur-md">
        {/* <form onSubmit={handleSubmit} className="md:w-[350px] ">
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
            <label
              className="block mb-2 font-bold text-white"
              htmlFor="address"
            >
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
          {selectedPlan.link && (
            <button className="w-[350px] mt-4 bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] transition-all duration-300 py-3 px-9 text-white font-semibold rounded-full hover:opacity-75" onClick={() => handleSubmit}>
              <Link href={selectedPlan.link} className="w-[350px]">
                Pay Now
              </Link>
            </button>
          )}
        </form> */}

        <div className="w-full">
          <div className="px-6 py-10 rounded-lg drop-shadow-lg bg-[#171C34] backdrop-blur-md flex flex-col gap-3">
            {/* <h1 className="font-bold text-2xl mb-3">Summary</h1> */}

            <h1 className="text-3xl md:text-4xl font-semibold">
              {selectedPlan.package}
            </h1>

            <div className="mt-4">
              {selectedPlan.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex text-[whitesmoke] gap-2 mb-2 items-center text-[16px] w-full"
                >
                  <div className="saturate-[3] object-cover w-4 h-4">
                    <Image
                      src={CheckIcon}
                      alt="Check Icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  {feature}
                </li>
              ))}
            </div>

            <div className="flex text-[whitesmoke] text-sm md:text-lg xl:text-xl font-semibold justify-between">
              <p>Duration</p>
              {selectedPlan.duration}
            </div>

            <div className="font-semibold text-base md:text-xl text-white flex justify-between">
              Price
              <div className="text-xl md:text-3xl text-[whitesmoke]">
                {selectedPlan.price}
                <span className="text-base md:text-lg text-[whitesmoke]">
                  {selectedPlan.currency}
                </span>
              </div>
            </div>

            {selectedPlan.link && (
              <button className="w-full mt-4 bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] transition-all duration-300 py-3 px-9 text-white font-semibold rounded-full hover:opacity-75" onClick={() => handleSubmit}>
                <Link href={selectedPlan.link} className="w-full">
                  Pay Now
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const PaymentPage: React.FC = () => {
  return (
    <div className="lg:max-w-[60%] lg:mx-auto p-4">
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
  const router = useRouter();
  const sessionTokens = typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;

  useEffect(() => {
    if (!sessionTokens) {
      router.push("/auth/login");
    }
  }, [sessionTokens, router]);

  if (!sessionTokens) {
    return null;
  }

  return (
    <div className="layout">
      <main>{children}</main>
      <div className="absolute top-14 right-0 md:px-0 md:py-10 p-6 w-full lg:w-[calc(100%-250px)] mx-auto text-white">
        <PaymentPage />
      </div>
    </div>
  );
};

export default Layout;
