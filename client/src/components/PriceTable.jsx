import React, { useState } from "react";
import { BiBed } from "react-icons/bi";
import { MdOutlineSingleBed } from "react-icons/md";
import UseFetch from "../Hooks/UseFetch";
import RoomModal from "./RoomModal";

const PriceTable = ({ location, selectedRooms, setSelectedRooms }) => {
  const [selectedRange, setSelectedRange] = useState([]);
  const [openModal, setOpenModal] = useState("");

  const { data } = UseFetch(`/hotel/find/${location[2]}/${location[3]}`);
  console.log(data?.data);

  const handleData = (room) => {
    setSelectedRange(room);
    setOpenModal(room?.roomType);
  };

  return (
    <>
      {data?.data && (
        <>
          {data?.data
            .sort((a, b) => b?.price - a?.price)
            .map((room, idx) => {
              return (
                <div
                  key={idx}
                  className="relative bg-slate-100 p-3 xsm:p-2 flex  w-[1000px] lg:w-[650px] overflow-x-hidden rounded-lg md:w-[450px] sm:w-[100%] md:flex-col justify-between mt-3"
                >
                  <div
                    style={{
                      transitionDuration: "0.5s",
                      transitionTimingFunction: "ease-in-out",
                      translate: openModal === room?.roomType ? "0%" : "-100%",
                    }}
                    className="absolute top-0 left-0 bottom-0 bg-blue-200 ease-in rounded-lg right-72 sm:right-0 shadow-sm "
                  >
                    <RoomModal
                      roomData={room}
                      selectedRooms={selectedRooms}
                      setSelectedRooms={setSelectedRooms}
                    />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{room?.roomType}</p>
                    <div className="mt-3">
                      {room?.roomType !== "Low Ranged Room" && (
                        <div className="flex items-center">
                          <span className="mr-2 text-sm font-semibold">
                            FULL BED 1 :
                          </span>
                          <BiBed />
                        </div>
                      )}
                      <div className="flex items-center mt-1">
                        <span className="mr-2 text-sm font-semibold">
                          {room?.roomType === "High Ranged Room" ||
                          room?.roomType === "Low Ranged Room"
                            ? "TWIN BED 2 : "
                            : "TWIN BED 1 : "}
                        </span>
                        {room?.roomType === "High Ranged Room" ||
                        room?.roomType === "Low Ranged Room" ? (
                          <>
                            <MdOutlineSingleBed />
                            <MdOutlineSingleBed />
                          </>
                        ) : (
                          <MdOutlineSingleBed />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-start flex-wrap mt-3">
                      {room?.benifits.map((benifit, idx) => {
                        return (
                          <div
                            key={idx}
                            className="flex items-center m-1 border-[1.5px] p-1 border-black text-sm rounded-md"
                          >
                            {benifit}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-max px-4 py-2 bg-gray-200 flex flex-col md:flex-row md:w-[100%] md:mt-2 md:px-2 items-center justify-between border-[2px] rounded-lg border-slate-500 ml-1">
                    <div>
                      <p className="font-bold">₹ {room?.price}</p>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          handleData(room);
                        }}
                        className="bg-sky-800 p-2 rounded-lg text-white font-semibold text-sm"
                      >
                        BOOK NOW
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </>
  );
};

export default PriceTable;

/*
 
*/
