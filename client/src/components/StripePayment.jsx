import React, { useContext, useEffect, useState } from "react";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { roomContext } from "../context/RoomContext";
import { searchContext } from "../context/SearchContext";
import { TiTick } from "react-icons/ti";
import { paymentContext } from "../context/PaymentContext";
import { eachDayOfInterval } from "date-fns";
import loadingIcon from "../Images/loadingicon.gif";
import { useNavigate } from "react-router-dom";

var element = {
  style: {
    base: {
      fontSize: "20px",
      color: "#424770",
      letterSpacing: "0.025em",
      fontFamily: "Source Code Pro, monospace",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

const StripePayment = ({ cardName }) => {
  const baseUrl = "https://mern-hotel-booking-api.onrender.com";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { success, failure, dispatch } = useContext(paymentContext);
  const { total, ids } = useContext(roomContext);
  const { place, checkIn, checkOut } = useContext(searchContext);
  const stripe = useStripe();
  const elements = useElements();
  const [dateRange, setDateRange] = useState(
    eachDayOfInterval({ start: checkIn, end: checkOut })
  );

  useEffect(() => {
    const confirmBooking = async () => {
      await Promise.all(
        ids?.forEach((roomnumid) => {
          axios.put(`/room/availability/${roomnumid}`, {
            dates: dateRange,
          });
        })
      );
    };
    success && confirmBooking();
    // eslint-disable-next-line
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(`${baseUrl}/payment/`, {
          amount: total,
          id: id,
          city: place,
        });

        if (response.data.success) {
          dispatch({
            type: "PAYMENT_SUCCESS",
            value: true,
          });
          setLoading(false);
          setTimeout(() => {
            navigate("/payment/success");
          }, 2000);
        }
      } catch (err) {
        console.log("ERROR", err);
        dispatch({
          type: "PAYMENT_FAILURE",
          value: true,
        });
      }
    } else {
      console.log(error.message);
      dispatch({
        type: "PAYMENT_FAILURE",
        value: true,
      });
    }
  };

  return (
    <>
      {success && (
        <h1 className="my-2 border-[1px] border-l-4 rounded-sm  border-l-emerald-700 border-emerald-200 text-center text-white font-bold p-2 bg-emerald-400 shadow-md">
          Payment success
        </h1>
      )}
      {failure && (
        <h1 className="my-2 border-[1px] border-l-4 rounded-sm  border-l-red-700-700 border-red-200-200 text-center text-white font-bold p-2 bg-red-400 shadow-md">
          Payment success
        </h1>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={cardName}
            type="text"
            placeholder="Name as in Card *"
            className="w-[100%] p-3 mb-2 border-[1px] border-gray-400 rounded-2xl text-lg font-medium"
          ></input>
        </div>
        <div className="border-[1px] border-gray-400 p-3 rounded-2xl">
          <CardElement options={element}></CardElement>
        </div>
        {success ? (
          <button
            type="submit"
            disabled="true"
            className="w-[100%] mt-3 bg-emerald-600 py-3 flex justify-center items-center text-xl font-semibold text-white rounded-2xl"
          >
            <TiTick style={{ fontSize: "25px" }} />
          </button>
        ) : loading ? (
          <button
            disabled="true"
            className="w-[100%] mt-3 bg-sky-600 py-3 text-xl flex justify-center items-center font-semibold text-white rounded-2xl"
          >
            <img src={loadingIcon} alt="loading"></img>
          </button>
        ) : (
          <button
            type="submit"
            disabled={loading}
            className="w-[100%] mt-3 bg-sky-600 py-3 text-xl font-semibold text-white rounded-2xl"
          >
            PAY
          </button>
        )}
      </form>
    </>
  );
};

export default StripePayment;

/*

*/
