import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import SuccessCard from "../components/SuccessCard";

const PaymentSuccess = () => {
  return (
    <>
      <Header />
      <ProgressBar confirm={true} />
      <div className="flex flex-col justify-center items-center py-10 bg-sky-50">
        <SuccessCard />
      </div>
      <Footer />
    </>
  );
};

export default PaymentSuccess;
