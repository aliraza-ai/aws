"use client";

import React, { useState } from "react";
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
import { CheckIcon } from "../../../../public";
import Image from "next/image";
import { pricingData } from "@/constants";
import StripeTransaction from "@/utils/StripeTransaction";
import { FaChevronRight } from "react-icons/fa6";
import updatePlans from "@/utils/updatePlans";

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

        await updatePlans(selectedPlan!.package);
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
      <div className="flex items-center justify-center w-full">
        <div className="w-4/5 md:flex justify-between p-3 rounded-lg drop-shadow-lg border border-blue-900 backdrop-blur-md">
          <div className="w-full">
            <div className="px-6 py-10 rounded-lg drop-shadow-lg bg-[#171C34] backdrop-blur-md flex flex-col gap-3">
              {/* <h1 className="font-bold text-2xl mb-3">Summary</h1> */}

              <h2 className="text-3xl md:text-4xl font-semibold">
                {selectedPlan.package}
              </h2>

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
                <button
                  className="w-max mt-4 bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] transition-all duration-300 py-3 px-9 text-white font-semibold rounded-full hover:opacity-75"
                  onClick={() => handleSubmit}
                >
                  <Link href={selectedPlan.link} className="w-full">
                    Pay Now
                  </Link>
                </button>
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
