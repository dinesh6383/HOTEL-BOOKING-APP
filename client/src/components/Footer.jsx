import React from "react";
import { FooterData } from "../Data/HotelData";

const Footer = () => {
  return (
    <div className="w-[100%] h-max bg-sky-200 py-5">
      <div className="text-center py-10 text-slate-600 sm:text-sm sm:px-5 sm:py-5">
        <p>
          Booking.com is part of Booking Holdings Inc., the world leader in
          online travel & related services.
        </p>
      </div>
      <div className="w-[100%] flex justify-evenly items-start sm:flex-col">
        {FooterData.map((data, idx) => {
          return (
            <div className="w-[100%] sm:mt-5" key={idx}>
              <div className="text-lg font-bold mb-3 text-center sm:text-sm">
                {data.title}
              </div>
              <div>
                {data.prods.map((prod, idx) => {
                  return (
                    <p
                      key={idx}
                      className="text-md text-slate-600 my-2 text-center sm:text-xs"
                    >
                      {prod}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
