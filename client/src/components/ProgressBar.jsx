import React, { useContext } from "react";
import { roomContext } from "../context/RoomContext";
import { searchContext } from "../context/SearchContext";
import { TiTick } from "react-icons/ti";

const ProgressBar = ({ confirm }) => {
  const { persons } = useContext(searchContext);
  const { rooms } = useContext(roomContext);

  return (
    <div className="mt-14">
      <div className="w-[50%] sm:w-[90%] h-1.5 rounded-xl mx-auto bg-sky-200 relative flex justify-between text-white font-bold">
        <span
          style={{ width: confirm ? "100%" : "50%" }}
          className="absolute top-0 bottom-0 left-0  z-0 bg-sky-700"
        ></span>
        <span className="-mt-3 flex justify-center items-center z-0 w-[30px] h-[30px] rounded-full bg-sky-700">
          {persons.room === rooms.length ? (
            <TiTick style={{ fontSize: "20px" }} />
          ) : (
            "1"
          )}
        </span>
        <span className="-mt-3 flex justify-center items-center z-0 w-[30px] h-[30px] rounded-full bg-sky-700">
          {confirm ? <TiTick /> : "2"}
        </span>
        <span className="-mt-3 flex justify-center items-center z-0  w-[30px] h-[30px] rounded-full bg-sky-700">
          {confirm ? <TiTick /> : "3"}
        </span>
      </div>
      <div className="w-[55%] sm:w-[97%] sm:text-xs mt-5 mx-auto h-max flex justify-between text-gray-400 font-semibold items-center">
        <p>Choose Room</p>
        <p className="ml-10">Payment Details</p>
        <p>Booking Confirmation</p>
      </div>
    </div>
  );
};

export default ProgressBar;
