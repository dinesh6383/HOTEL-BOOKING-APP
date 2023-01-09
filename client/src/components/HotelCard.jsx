import React, { useContext } from "react";
import { GrLocation } from "react-icons/gr";
import { BsStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import { Modal } from "../context/ModalContext";

const HotelCard = ({ hotel }) => {
  const { setShowModal } = useContext(Modal);
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const handleCheck = () => {
    const city = hotel.country;
    const hotelId = hotel._id;
    if (user) {
      navigate(`/hotel/${city}/${hotelId}`);
    } else {
      console.log("Login first check room next!");
      setShowModal("login");
    }
  };

  return (
    <div className="w-[725px] sm:w-[100%] h-max rounded-lg flex sm:flex-col p-2 border-[1.5px] border-slate-300 shadow-lg hover:shadow-2xl m-1">
      <div className="w-[450px] h-[250px] sm:w-[450px] xsm:w-[340px]">
        <img
          className="w-[100%] h-[100%] rounded-lg"
          src={hotel.image}
          alt={hotel.name}
        ></img>
      </div>
      <div className="ml-4 sm:ml-0 sm:mt-3">
        <p className="font-bold text-lg">{hotel.name.slice(0, 30)}..</p>
        <div className="flex mt-2 text-orange-400">
          {Array.from(Array(hotel.rating).keys()).map((val, idx) => {
            return <BsStarFill key={idx} />;
          })}
        </div>
        <p className="flex mt-2 items-center text-sky-600">
          <GrLocation />
          <span className="ml-1 text-xs"> {hotel.location} </span>
        </p>
        <div className="flex mt-2 flex-wrap">
          {hotel.extras.map((extra, idx) => {
            return (
              <p
                className="border-[1px] m-1 border-slate-600 text-xs p-[1.5px] text-gray-700 rounded-sm"
                key={idx}
              >
                {extra}
              </p>
            );
          })}
        </div>
        <p className="mt-2 text-sm">{hotel.description.slice(0, 80)}...</p>
        <div className="flex justify-between items-center h-max sm:mt-3 sm:mb-2">
          <p className="font-bold text-xl text-slate-700">
            ₹ {hotel.cheapestPrice}
          </p>
          <button
            onClick={handleCheck}
            className="p-2 rounded-md text-white bg-sky-600 font-semibold shadow-md"
          >
            Check availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
