import React, { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { roomContext } from "../context/RoomContext";
import { useNavigate } from "react-router-dom";
import { searchContext } from "../context/SearchContext";

const SelectedRooms = () => {
  const { persons } = useContext(searchContext);
  const { rooms, total } = useContext(roomContext);
  const navigate = useNavigate();
  const handlePayment = () => {
    if (persons.room === rooms?.length) {
      navigate("/payment");
    }
  };

  return (
    <div className="mt-5 h-max w-max  bg-white shadow-lg rounded-md p-5 xsm:p-3 sm:w-[100%]">
      <p className="font-semibold text-[16px] text-gray-500 sm:text-[18px]">
        TOTAL ROOMS BOOKED :<span className="text-black"> {rooms?.length}</span>
      </p>
      <div className="flex items-center justify-start mt-2">
        {rooms?.map((num, idx) => (
          <p
            key={idx}
            className="font-bold text-xl sm:text-[17px] border-2 border-gray-400 p-2 sm:p-1 mr-2 rounded-md"
          >
            {num}
          </p>
        ))}
      </div>
      <div className="my-5 sm:my-3 flex items-center justify-start pr-3">
        <p className="font-semibold text-[16px] text-gray-500 mr-2">
          TOTAL PRICE :
        </p>
        <span className="text-black font-bold text-xl">{total}</span>
      </div>
      <div className="mt-2">
        <button
          onClick={handlePayment}
          className="w-[100%] text-[16px] flex justify-center items-center py-2 rounded-md bg-sky-800 text-white font-semibold shadow-sm hover:shadow-lg"
        >
          CLICK TO PAY{" "}
          <span className="ml-2">
            <AiOutlineArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SelectedRooms;
