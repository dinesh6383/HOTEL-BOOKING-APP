import React, { useContext, useEffect, useState } from "react";
import UseFetch from "../Hooks/UseFetch";
import { useLocation } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import Gmap from "./Gmap";
import RoomReview from "./RoomReview";
import PriceTable from "./PriceTable";
import { searchContext } from "../context/SearchContext";
import differenceInDays from "date-fns/differenceInDays";
import SelectedRooms from "./SelectedRooms";
import { roomContext } from "../context/RoomContext";

const SpecificHotel = () => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { dispatch } = useContext(roomContext);
  const { checkIn, checkOut, persons } = useContext(searchContext);
  const location = useLocation().pathname.split("/");
  const { data } = UseFetch(`/hotel/${location[2]}/${location[3]}`);
  const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const tempData = [
    {
      title: "CHECK-IN DATE",
      value: `${weekNames[checkIn.getDay()]}, ${
        monthNames[checkIn.getMonth()]
      } ${checkIn.getDate()} ${checkIn.getFullYear()}`,
    },
    {
      title: "CHECK-OUT DATE",
      value: `${weekNames[checkOut.getDay()]}, ${
        monthNames[checkOut.getMonth()]
      } ${checkOut.getDate()} ${checkOut.getFullYear()}`,
    },
    {
      title: "TOTAL NIGHTS",
      value: differenceInDays(new Date(checkOut), new Date(checkIn)),
    },
    {
      title: "ROOMS",
      value: persons.room,
    },
  ];

  useEffect(() => {
    if (data?.data) {
      dispatch({
        type: "ADD_HOTEL",
        hotel: data?.data[0],
      });
    }
    // eslint-disable-next-line
  }, [data]);

  return (
    <>
      {data?.data && (
        <div className="bg-sky-50 pb-10">
          <div className="w-[100%] h-[500px] md:h-[400px] sm:h-[300px] xsm:h-[230px]">
            <Gmap source="" />
          </div>
          <div className="mt-5 px-20 md:px-5 sm:px-5 xsm:px-3">
            <p className="text-4xl md:text-3xl sm:text-2xl xsm:text-lg pb-3 font-extrabold filter flex items-center justify-between border-b-[1px] border-sky-300">
              {data?.data[0].name}
            </p>
            <p className="flex items-center text-sky-800 mt-2">
              <GrLocation />{" "}
              <span className="ml-1">{data?.data[0].location}</span>
            </p>
            <div className="mt-2 text-orange-400 text-sm flex items-center"></div>
            <div className="flex items-center mt-3 flex-wrap">
              {data?.data[0].extras.map((extra, idx) => {
                return (
                  <div
                    key={idx}
                    className="mr-3 border-[1px] border-slate-500 rounded-sm p-1 sm:p-0 sm:py-1 sm:px-1 sm:m-1"
                  >
                    <p className="text-sm sm:text-xs">{extra}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-3">
              <p className="sm:text-sm">{data?.data[0].description}</p>
            </div>
            <div className="w-[60%] md:w-[90%] sm:w-[100%] mx-auto mt-4 h-max py-3 bg-white rounded-lg shadow-md grid grid-cols-4 sm:grid-cols-2 items-center">
              {tempData.map((val, idx) => {
                return (
                  <div
                    key={idx}
                    className="text-center border-r-[1px] border-r-slate-300 sm:border-none sm:p-2"
                  >
                    <p className="font-semibold text-[12px] text-gray-400  sm:bg-slate-200 rounded-t-md sm:text-gray-500 sm:pt-2 ">
                      {val.title}
                    </p>
                    <p className="text-lg font-bold sm:text-[14px]  sm:bg-slate-200 rounded-b-md sm:p-1">
                      {val.value}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 flex md:flex-col ">
              <div className="h-max w-max bg-white shadow-lg rounded-md p-3 xsm:p-1 sm:w-[100%]">
                <PriceTable
                  location={location}
                  selectedRooms={selectedRooms}
                  setSelectedRooms={setSelectedRooms}
                />
              </div>
              <RoomReview />
            </div>
            <div className="w-[100%] h-max flex sm:flex-col-reverse items-center justify-end pr-20 sm:pr-0">
              <SelectedRooms />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpecificHotel;

/*
 https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Lotus%20Sutra%20Beachside%20Adobe%20Goa+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed

*/
