import React, { useContext, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { TiGroup } from "react-icons/ti";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { searchContext } from "../context/SearchContext";
import { states, extras } from "../Data/HotelData";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBar = () => {
  const { place, checkIn, checkOut, persons, dispatch } =
    useContext(searchContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [openDrop, setOpenDrop] = useState(false);
  const [openExtras, setOpenExtras] = useState(false);
  const [city, setCity] = useState("");
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [peoples, setPeoples] = useState({
    adult: null,
    children: null,
    room: null,
  });

  const handleCity = (e) => {
    setCity(e.target.id);
    setOpenDrop(false);
  };

  const handlePeople = (value, operation) => {
    setPeoples((prev) => ({
      ...prev,
      [value.toLowerCase()]:
        operation === "i"
          ? peoples[value.toLowerCase()] + 1
          : peoples[value.toLowerCase()] > 1
          ? peoples[value.toLowerCase()] - 1
          : value.toLowerCase() === "children"
          ? (peoples[value.toLowerCase()] = 0)
          : (peoples[value.toLowerCase()] = 1),
    }));
  };

  const handleSearch = () => {
    if (location.pathname === "/") {
      dispatch({
        type: "SET_DETAILS",
        payload: {
          city: city,
          checkIn: checkInDate,
          checkOut: checkOutDate,
          peoples: peoples,
        },
      });
      navigate("/hotels");
    } else {
      dispatch({
        type: "ALTER_DETAILS",
        payload: {
          city: city || place,
          checkIn: checkInDate ? checkInDate : checkIn,
          checkOut: checkOutDate ? checkOutDate : checkOut,
          peoples: peoples.adult ? peoples : persons,
        },
      });
    }
  };

  return (
    <>
      <div className="flex items-center w-[250px] lg:w-[170px] md:w-[600px] relative">
        <input
          className="w-[100%] h-[65px] bg-sky-50 rounded-md p-3 outline-none border-none cursor-pointer"
          type="text"
          placeholder="Select city"
          readOnly
          value={city || place}
        ></input>
        <div
          className="absolute top-[39%] right-3 text-xl"
          onClick={() => setOpenDrop(!openDrop)}
        >
          <AiOutlineDown style={{ color: "gray", cursor: "pointer" }} />
        </div>
        {openDrop && (
          <div className="w-[100%] h-max absolute top-20 z-10 bg-slate-100 p-2 rounded-b-md shadow-md">
            {states.map((state) => {
              return (
                <p
                  id={state}
                  className="my-3 text-md py-2 px-3 hover:bg-sky-200 rounded-md"
                  key={state}
                  onClick={handleCity}
                >
                  {state}
                </p>
              );
            })}
          </div>
        )}
      </div>
      <div className="w-max flex md:mt-2 sm:flex-col sm:w-[100%] justify-center items-center">
        {/* check - in */}
        <DatePicker
          className="w-[200px] lg:w-[170px] md:w-[300px] sm:w-[100%] sm:ml-0 bg-sky-50 h-[65px] ml-2 rounded-md p-3 outline-none border-none"
          placeholderText="CHECK-IN"
          selected={checkInDate || checkIn}
          onChange={(date) => setCheckInDate(date)}
          minDate={new Date()}
        />
        {/* check - out */}
        <DatePicker
          className="w-[200px] lg:w-[170px]  md:w-[300px] sm:w-[100%] sm:ml-0 sm:mt-2 h-[65px] bg-sky-50 ml-2 rounded-md p-3 outline-none border-none"
          placeholderText="CHECK-OUT"
          selected={checkOutDate || checkOut}
          onChange={(date) => setCheckOutDate(date)}
          minDate={new Date(checkInDate).setDate(
            new Date(checkInDate).getDate() + 1
          )}
        />
      </div>
      <div className="w-[230px] lg:w-[210px]  md:w-[300px]  sm:w-[400px] sm:ml-0 md:mt-2 relative bg-sky-50 flex h-[65px] ml-2 rounded-md p-3 outline-none border-none">
        <div className="w-max text-2xl mt-2 sm:ml-0">
          <TiGroup />
        </div>
        <div className="ml-2">
          <p className="text-sm font-semibold">
            {peoples.adult || persons.adult} adult,{" "}
            {peoples.children || persons.children} child
          </p>
          <p className="text-sm text-slate-500 mt-1">
            {peoples.room || persons.room} room
          </p>
        </div>
        <div
          className="absolute right-4 top-5 text-xl"
          onClick={() => setOpenExtras(!openExtras)}
        >
          <AiOutlineDown style={{ color: "gray", cursor: "pointer" }} />
        </div>
        {openExtras && (
          <div className="w-[100%] h-max absolute top-[70px] left-0 z-10 bg-slate-100 p-2 rounded-md shadow-md">
            {extras.map((name, idx) => {
              return (
                <div
                  key={idx}
                  className="flex items-center justify-between border-[1px] border-gray-300 rounded-lg mb-2"
                >
                  <p className="my-3 text-md py-1 px-3 rounded-md">{name}</p>
                  <div className="flex items-center w-[100px] h-[40px] ">
                    <div
                      className="w-8 h-8 text-xl text-black bg-sky-200 rounded-full flex justify-center items-center"
                      onClick={() => handlePeople(name, "d")}
                    >
                      <GrFormSubtract />
                    </div>
                    <div className="mx-3 text-lg font-bold">
                      <p>{peoples[name.toLowerCase()]}</p>
                    </div>
                    <div className="w-8 h-8 text-xl text-black bg-sky-200 rounded-full flex justify-center items-center">
                      <IoMdAdd onClick={() => handlePeople(name, "i")} />
                    </div>
                  </div>
                </div>
              );
            })}
            <div>
              <button
                onClick={() => setOpenExtras(false)}
                className="w-[100%] py-1 bg-sky-600 rounded-lg text-white font-bold"
              >
                DONE
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="xsm:w-[100%]">
        <button
          onClick={handleSearch}
          className="w-[170px] lg:w-[140px]  md:w-[300px]  sm:w-[400px] xsm:w-[100%] sm:ml-0 md:mt-2 justify-center items-center relative bg-sky-600 flex h-[65px] ml-2 rounded-md p-3 outline-none border-none text-xl text-white font-bold"
        >
          {location.pathname === "/" ? "SEARCH" : "UPDATE"}
        </button>
      </div>
    </>
  );
};

export default SearchBar;
