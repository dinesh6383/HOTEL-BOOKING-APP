import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { paymentInfo } from "../Data/HotelData";
import ProgressBar from "../components/ProgressBar";
import PaymentForm from "../components/PaymentForm";

const Payment = () => {
  return (
    <>
      <Header />
      <div className="w-[100%] h-6 flex justify-evenly items-center bg-gray-200 text-xs xsm:text-[9px] font-semibold text-gray-500">
        {paymentInfo.map((info, idx) => {
          return (
            <p key={idx} className="flex items-center">
              {info.icon} <span className="ml-2 xsm:ml-1">{info.value}</span>
            </p>
          );
        })}
      </div>
      <ProgressBar />
      <PaymentForm />
      <Footer />
    </>
  );
};

export default Payment;

//
