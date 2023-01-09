import React, { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripePayment from "./StripePayment";
import { roomContext } from "../context/RoomContext";
import { searchContext } from "../context/SearchContext";
import { authContext } from "../context/AuthContext";

const stripePromise = loadStripe(
  "pk_test_51MKi0XSFmzDL8B7uOwezYEbbktcTRl7GEDqW7DW0GPCaTNcEyXNH5kj0Cp2AVjoSKsGD22CcHMz76AbvZ5Fj73NU00rQG7G05x"
);

const PaymentForm = () => {
  const { user } = useContext(authContext);
  const [cardName, setCardName] = useState("");
  const { hotel, total, rooms } = useContext(roomContext);
  const { checkIn, checkOut } = useContext(searchContext);
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

  const handleCardName = (value) => {
    if (value) {
      setCardName(user.username);
    } else {
      setCardName("");
    }
  };
  console.log(cardName);

  return (
    <div className="flex flex-col mt-10 justify-center items-center mb-10">
      <div className="flex sm:flex-col p-4 xsm:p-2 xsm:rounded-lg border-[2px] mb-4 border-gray-300 rounded-3xl w-[50%] md:w-[80%] sm:w-[95%] xs:w-[98%] mt-4 xsm:mt-0">
        <div className="w-[300px] sm:w-[435px] xsm:w-[100%]">
          <img
            className="rounded-lg w-[100%]"
            src={hotel?.image}
            alt="hotel"
          ></img>
        </div>
        <div className="ml-3 flex flex-col justify-between items-start sm:mt-3 sm:ml-0">
          <p className="text-xl font-bold">{hotel?.name}</p>
          <p className="text-gray-500">{hotel?.location}</p>
          <div className="flex items-center">
            Total rooms :{" "}
            <span className="font-bold flex ml-1">
              {rooms.map((num, idx) => (
                <p
                  key={idx}
                  className="border-[1px] border-gray-300 shadow-md p-[5px] ml-1"
                >
                  {num}
                </p>
              ))}{" "}
            </span>
          </div>
          <p className="sm:mt-3">
            Check in :{" "}
            <span className="font-bold">
              {`${weekNames[checkIn?.getDay()]}, ${
                monthNames[checkIn?.getMonth()]
              } ${checkIn?.getDate()} ${checkIn?.getFullYear()}`}{" "}
            </span>
          </p>
          <p className="sm:mt-3">
            Check out :{" "}
            <span className="font-bold">
              {`${weekNames[checkOut?.getDay()]}, ${
                monthNames[checkOut?.getMonth()]
              } ${checkOut?.getDate()} ${checkOut?.getFullYear()}`}{" "}
            </span>
          </p>
          <p className="sm:mt-3">
            Total Cost : <span className="font-bold">{total} </span>
          </p>
        </div>
      </div>
      <div className="p-4 border-[2px] border-gray-300 rounded-3xl xsm:rounded-lg xsm:p-2 w-[50%] md:w-[80%] sm:w-[95%] xs:w-[98%]">
        <p className="text-[13px] bg-gray-300 px-2 py-1 text-gray-600 rounded-lg">
          The guest checking into each hotel room must be 21 or older, present a
          valid Photo ID and credit card.
        </p>
        <p className="text-2xl my-4 font-semibold">Guest Name</p>
        <div className="flex items-center sm:flex-col justify-center">
          <input
            type="text"
            className="border-[1px] text-lg font-medium border-gray-400 p-3 rounded-2xl w-[100%] outline-sky-400"
            placeholder="Customer name *"
            defaultValue={user?.username}
          ></input>
        </div>
        <div className="flex mt-4">
          <input
            onChange={(e) => handleCardName(e.target.checked)}
            type="checkbox"
            className="outline-sky-400"
          ></input>
          <p className="font-normal ml-2">
            Guest name and name on card are the same
          </p>
        </div>
      </div>
      {/* HELLO */}
      <div className="p-4 border-[2px] border-gray-300 rounded-3xl xsm:rounded-lg xsm:p-2 w-[50%] md:w-[80%] sm:w-[95%] xs:w-[98%] mt-4">
        <p className="text-2xl mt-2 mb-4 font-semibold">Payment</p>
        <div>
          <Elements stripe={stripePromise}>
            <StripePayment cardName={cardName} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
