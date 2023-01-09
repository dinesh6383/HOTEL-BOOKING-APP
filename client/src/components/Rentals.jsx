import React from "react";
import { rentals } from "../Data/HotelData";

const Rentals = () => {
  return (
    <>
      <div className="mt-16">
        <p className="font-semibold text-3xl md:text-2xl xsm:xl text-center">
          Explore more travel vacation rentals
        </p>
        <hr className="bg-slate-600 w-[25%] md:w-[50%] xsm:w-[50%] mx-auto mt-3 h-0.5" />
      </div>
      <div className="flex justify-center items-center flex-wrap mt-10">
        {rentals.map((rent, idx) => {
          return (
            <div
              className=" mr-10 py-2 pb-3 px-2 rounded-xl bg-zinc-100 shadow-xl md:mb-7 sm:w-[70%] sm:mr-0 xsm:w-[80%]"
              key={idx}
            >
              <div className="">
                <img
                  className="rounded-xl rounded-b-none w-[250px] sm:w-[350px]"
                  src={rent.img}
                  alt="rent-img"
                ></img>
              </div>
              <div className="text-center font-semibold mt-3 text-slate-800">
                <p>{rent.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Rentals;
