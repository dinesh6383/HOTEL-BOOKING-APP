import React, { useContext, useEffect, useState } from "react";
import { FaDoorOpen } from "react-icons/fa";
import { GiLockedDoor } from "react-icons/gi";
import { MdOutlineDoorSliding } from "react-icons/md";
import { searchContext } from "../context/SearchContext";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import { roomContext } from "../context/RoomContext";

const indicator = [
  { color: "green", message: "Available" },
  { color: "blue", message: "Selected" },
  { color: "red", message: "Not available" },
];

const RoomModal = ({ roomData }) => {
  const { rooms, dispatch } = useContext(roomContext);
  const { checkIn, checkOut, persons } = useContext(searchContext);
  const [dateRange, setDateRange] = useState(
    eachDayOfInterval({ start: checkIn, end: checkOut })
  );
  const [yyyymmdd, setyyyymmdd] = useState([]);

  //Setting up the state in the format ["yyyy-mm-dd"];
  useEffect(() => {
    if (dateRange.length > 0) {
      const range = dateRange.map((date) => {
        let currDate =
          new Date(date).getDate().toString().length === 2
            ? new Date(date).getDate()
            : `0${new Date(date).getDate()}`;
        let currMonth =
          new Date(date).getMonth().toString().length === 2
            ? new Date(date).getMonth() + 1
            : `0${new Date(date).getMonth() + 1}`;
        let currYear = new Date(date).getFullYear();
        const res = `${currYear}-${currMonth}-${currDate}`;
        return res;
      });

      setyyyymmdd(range);
    }
  }, [dateRange]);

  // console.log(yyyymmdd);

  /**************************************/
  const handleRoomReducer = (nums, price) => {
    if (!rooms?.includes(nums.number)) {
      if (rooms?.length < persons.room) {
        dispatch({
          type: "ADD_ROOM",
          roomNum: nums.number,
          roomId: nums._id,
          price: price,
        });
      }
    } else {
      dispatch({
        type: "DELETE_ROOM",
        roomNum: nums.number,
        roomId: nums._id,
        price: price,
      });
    }
  };

  /***************************************/

  const isAvailable = (roomNum) => {
    let bool = false;
    if (bool === false) {
      if (roomNum?.unAvailableDates.length !== 0) {
        roomNum?.unAvailableDates.forEach((dates) => {
          if (yyyymmdd.includes(dates.slice(0, 10))) {
            bool = true;
          } else {
            if (bool === false) {
              bool = false;
            }
          }
        });
      } else {
        bool = false;
      }
    }
    return bool;
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold sm:text-xs">SELECT YOUR ROOMS</p>
          <p className="text-sm text-gray-400 mt-1 font-semibold">
            {roomData[0]?.roomType}
          </p>
        </div>
        <div className="flex sm:flex-col">
          {indicator?.map((msg, idx) => {
            return (
              <div key={idx} className="flex items-center ml-3">
                <div
                  className="w-[10px] h-[10px] rounded-full mr-1.5"
                  style={{ background: msg.color }}
                ></div>
                <p className="text-sm font-semibold">{msg.message}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-5 justify-around items-center mt-5 sm:grid-cols-3 sm:gap-3">
        {roomData[0]?.roomNumbers.map((nums, idx) => {
          return (
            <div key={idx} className="flex items-center">
              <div
                onClick={
                  isAvailable(nums)
                    ? null
                    : () => {
                        handleRoomReducer(nums, roomData[0]?.price);
                      }
                }
                style={{
                  borderColor: isAvailable(nums)
                    ? "red"
                    : rooms?.includes(nums.number)
                    ? "blue"
                    : "green",
                  color: isAvailable(nums)
                    ? "red"
                    : rooms?.includes(nums.number)
                    ? "blue"
                    : "green",
                }}
                className="w-[35px] text-2xl text-green-800 flex justify-center items-center h-[35px] border-[3px] cursor-pointer hover:shadow-xl"
              >
                {isAvailable(nums) ? (
                  <GiLockedDoor />
                ) : rooms?.includes(nums.number) ? (
                  <MdOutlineDoorSliding />
                ) : (
                  <FaDoorOpen />
                )}
              </div>
              <p className="text-lg ml-2 text-gray-600 font-extrabold">
                {nums.number}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomModal;

/*
if (bool) {
        if (yyyymmdd.includes(dates.slice(0, 10))) {
          bool = true;
          console.log(`[${yyyymmdd}] =====> [${dates.slice(0, 10)}]`);
        } else {
          bool = false;
          console.log(
            `[${roomNum.number}] ===> [${yyyymmdd}] =====> [${dates.slice(
              0,
              10
            )}] ===> [${yyyymmdd.includes(dates.slice(0, 10))}]`
          );
        }
      }
*/
