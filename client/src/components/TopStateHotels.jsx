import React from "react";
import { topStateHotel } from "../Data/HotelData";

const TopStateHotels = () => {
  return (
    <div className="mt-16 md:mt-80 sm:mt-[450px] xsm:mt-[430px] bg-">
      <p className="font-semibold text-3xl md:text-2xl xsm:xl text-center">
        Top destinations in India
      </p>
      <hr className="bg-slate-600 w-[25%] md:w-[40%] xsm:w-[50%] mx-auto mt-3 h-0.5" />
      <div className="flex justify-center items-center mt-7 flex-wrap md:pl-10">
        {topStateHotel.map((state, idx) => {
          return (
            <div className="mr-16 mt-5 md:mr-10" key={idx}>
              <img
                className="w-[150px] h-[150px] md:w-[110px] md:h-[110px] xsm:w-[80px] xsm:h-[80px] rounded-full cursor-pointer hover:shadow-xl hover:shadow-slate-400"
                src={state.img}
                alt="destination-img"
              ></img>
              <p className="text-center font-semibold mt-3 text-slate-600">
                {state.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopStateHotels;
