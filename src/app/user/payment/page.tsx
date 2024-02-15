"use client";

import { pricingData } from "@/constants";
import StripeTransaction from "@/utils/StripeTransaction";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import Swal from "sweetalert2";
import { CheckIcon } from "../../../../public";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const searchParams = new URLSearchParams(useSearchParams().toString());
  const planId = searchParams.get("planId") || "";

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  let selectedPlan = pricingData.find((plan) => plan.id.toString() === planId);

  if (!selectedPlan) {
    selectedPlan = pricingData[2];
  }

  const handleSubmit = async () => {
    setButtonDisabled(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      return;
    }

    try {
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
          text:
            error.message || "An error occurred while processing the payment.",
        });
      } else {
        const id = paymentMethod.id;
        const TransactionSuccess = await StripeTransaction(planId, id);
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
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <>
      <h1 className="font-bold text-3xl my-4">Payment Summary</h1>
      <div className="flex items-center justify-center w-full">
        <div className="w-4/5 md:flex justify-between p-3 rounded-lg drop-shadow-lg border border-blue-900 backdrop-blur-md">
          <div className="w-full">
            <div className="px-6 py-10 rounded-lg drop-shadow-lg bg-[#171C34] backdrop-blur-md flex flex-col gap-3">
              {/* <h1 className="font-bold text-2xl mb-3">Summary</h1> */}

              <h2 className="text-3xl md:text-4xl font-semibold">
                {selectedPlan.package}
              </h2>

              <ul className="mt-4">
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
              </ul>

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
                <Link
                  href={selectedPlan.link}
                  className={`flex gap-2 items-center w-max mt-4 bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] transition-all duration-300 py-3 px-9 text-white  font-semibold rounded-full ${
                    buttonDisabled
                      ? "cursor-not-allowed opacity-70"
                      : "cursor-pointer hover:opacity-75"
                  }`}
                  onClick={handleSubmit}
                >
                  {buttonDisabled && (
                    <div
                      className={`h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
                    ></div>
                  )}
                  <span>Pay Now</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PaymentPage: React.FC = () => {
  return (
    <div className="w-full py-4">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

const PaymentPageLayout = () => {
  const searchParams = new URLSearchParams(useSearchParams().toString());
  const planId = searchParams.get("planId") || "";

  let selectedPlan = pricingData.find((plan) => plan.id.toString() === planId);

  return (
    <div className="absolute top-14 right-0 md:px-20 md:py-10 p-6 w-full lg:w-[calc(100%-250px)] mx-auto text-white">
      <div className="text-base text-slate-400 font-light p-2 flex items-center gap-2">
        <Link href="/user/dashboard">Dashboard</Link>
        <FaChevronRight className="text-sm" />
        <Link href="/user/plans">Plans</Link>
        <FaChevronRight className="text-sm" />
        <Link href={`/user/payment?planId=${planId}`}>
          {selectedPlan?.package}
        </Link>
      </div>
      <PaymentPage />
    </div>
  );
};

export default PaymentPageLayout;
