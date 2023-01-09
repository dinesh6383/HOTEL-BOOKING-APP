import React from "react";
import { review } from "../Data/HotelData";

const Review = () => {
  return (
    <>
      <div className="mt-16">
        <p className="font-semibold text-3xl md:text-2xl xsm:xl text-center">
          Overheard from customers
        </p>
        <hr className="bg-slate-600 w-[20%] md:w-[45%] xsm:w-[50%] mx-auto mt-3 h-0.5" />
      </div>
      <div className="flex justify-center items-center flex-wrap mt-10">
        {review.map((rev, idx) => {
          return (
            <div
              className="w-[380px] h-[380px] flex flex-col justify-start items-center px-3 pt-6 shadow-xl mx-5 border-[0.5px] border-b-4 rounded-b-none border-b-sky-600 border-gray-400 rounded-lg md:mb-8"
              key={idx}
            >
              <p className="mb-5 text-sky-600 font-bold text-2xl">
                {rev.hotelName}
              </p>
              <p className="mb-5 text-gray-600 text-md">- {rev.location}</p>
              <p className="mb-5 text-xl font-bold text-center">{`"${rev.content}"`}</p>
              <p className="mb-10">{rev.user}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Review;
