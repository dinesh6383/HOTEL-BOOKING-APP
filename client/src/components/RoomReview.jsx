import React from "react";
import { reviews } from "../Data/HotelData";

const RoomReview = () => {
  return (
    <div className="bg-white ml-3 h-[513px] md:h-[300px] sm:h-max sm:py-3 rounded-lg shadow-lg w-max md:w-[100%] md:ml-0 md:mt-3 grid grid-cols-1 items-center md:grid-cols-2 sm:grid-cols-1 px-5">
      <p className="text-md font-semibold sm:mb-2 sm:ml-1">Guest Ratings</p>
      {reviews.map((rev, idx) => {
        return (
          <div
            key={idx}
            className="bg-slate-100 p-2 rounded-lg w-max sm:w-[100%] sm:mt-2"
          >
            <div className="mb-2 font-semibold flex items-center justify-between">
              <p>{rev.name}</p>
              <p className="text-xs text-gray-500">{rev.rating}%</p>
            </div>
            <div className="w-[200px] md:w-[180px] sm:w-[100%] mb-2 h-[5px] rounded-xl bg-gray-300">
              <div
                style={{ width: `${rev.rating}0%` }}
                className="h-[5px] rounded-xl bg-emerald-400"
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoomReview;
