import React, { useContext } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { roomContext } from "../context/RoomContext";

const SuccessCard = () => {
  const { hotel, rooms, total } = useContext(roomContext);
  const navigate = useNavigate();
  const handlehome = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="py-10 px-16 rounded-lg shadow-lg bg-sky-200 flex justify-between items-center flex-col border-[2px] border-sky-300">
      <p className="font-bold text-3xl xsm:text-xl">Booking Confirmed!</p>
      <div className="border-gray-50 my-7 border-[2px] p-2 rounded-lg bg-emerald-100 shadow-lg">
        <IoCheckmarkDoneCircle style={{ fontSize: "100px", color: "green" }} />
      </div>
      <div className="text-center">
        <p className="text-2xl font-semibold">{hotel?.name}</p>
        <p className="text-lg font-semibold text-gray-500 mb-3">
          {hotel?.location}
        </p>
        <div className="flex items-center justify-center mb-5">
          {rooms?.map((num, idx) => {
            return (
              <span
                key={idx}
                className="p-3 mr-2 text-xl font-semibold border-gray-300 shadow-lg border-[3px] rounded-lg"
              >
                {num}
              </span>
            );
          })}
        </div>
        <p className="text-4xl font-bold">
          ₹ <span>{total}</span>
        </p>
      </div>
      <button
        onClick={handlehome}
        className="w-[100%] bg-sky-800 text-xl mt-5 p-2 font-bold text-white rounded-lg shadow-lg"
      >
        HOME
      </button>
    </div>
  );
};

export default SuccessCard;
