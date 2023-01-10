import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { authContext } from "../context/AuthContext";
import { Modal } from "../context/ModalContext";
import { useGoogleLogin } from "@react-oauth/google";

const LoginModal = () => {
  const baseUrl = "https://mern-hotel-booking-api.onrender.com";
  const { setShowModal } = useContext(Modal);
  const { dispatch, loading, error } = useContext(authContext);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleChanges = (key, value) => {
    setUserDetails((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN_START",
    });
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, userDetails);
      dispatch({
        type: "LOGIN_SUCCESS",
        data: response.data,
      });
      setShowModal("");
      console.log(response);
    } catch (err) {
      dispatch({
        type: "LOGIN_FAILURE",
        error: err.response.data,
      });
      console.log(err);
    }
  };

  console.log(error);

  const handleGoogleAuth = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        const result = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${codeResponse.access_token}`,
            },
          }
        );

        try {
          const userInfo = {
            firstname: result?.data?.given_name,
            lastname: result?.data?.family_name,
            email: result?.data?.email,
          };

          const response = await axios.post("/auth/google", userInfo);
          dispatch({
            type: "GOOGLE_LOGIN_SUCCESS",
            data: response?.data,
            status: true,
          });
          setShowModal("");
          console.log(response);
        } catch (err) {
          dispatch({
            type: "LOGIN_FAILURE",
            error: {
              message: "Something went wrong!",
            },
          });
          console.log(err);
        }
      } catch (err) {
        dispatch({
          type: "LOGIN_FAILURE",
          error: {
            message: "Something went wrong!",
          },
        });
        console.log(err);
      }
    },
  });

  return (
    <div className="absolute bg-white w-[650px] sm:pt-16 sm:w-[100%] sm:h-[100%] h-[500px] z-10 flex justify-start items-start">
      <div className="w-[100%] h-[100%] py-2 px-5 bg-gray-50 relative">
        <p className="text-2xl font-semibold">Sign in</p>
        <button
          onClick={handleGoogleAuth}
          className="bg-gray-100 flex justify-center items-center border-[2px] border-gray-300 shadow-md mt-5 w-[100%] p-2"
        >
          <FcGoogle /> <span className="ml-2">Sign in with Google</span>
        </button>

        <div className="mt-7 text-sm text-gray-500 flex justify-between items-center">
          <span className="w-[20%] h-[1px] bg-gray-500"></span>
          <p>or sign in with email</p>
          <span className="w-[20%] h-[1px] bg-gray-500"></span>
        </div>
        {error && (
          <div className="p-2 bg-red-400 text-red-900 font-semibold text-xs shadow-red-200 my-3 rounded-md shadow-xl">
            <p>{error?.message}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            className="mt-2 border-[1px] border-gray-400 outline-emerald-500 p-2 w-[100%] rounded-sm"
            type="email"
            placeholder="Email address *"
            required
            onChange={(e) => handleChanges("email", e.target.value)}
          ></input>
          <input
            className="mt-2 border-[1px] border-gray-400 outline-emerald-500 p-2 w-[100%] rounded-sm"
            type="password"
            placeholder="Password *"
            required
            onChange={(e) => handleChanges("password", e.target.value)}
          ></input>
          <button
            disabled={loading}
            className="w-[100%] mt-5 bg-emerald-600 p-2 text-white font-semibold shadow-lg rounded-sm"
          >
            Sign in
          </button>
        </form>
        <p className="mt-3 text-center text-sm">
          Don't have an account ?{" "}
          <span
            onClick={() => setShowModal("register")}
            className="text-blue-600 cursor-pointer"
          >
            Create Account
          </span>
        </p>
      </div>
      <div
        onClick={() => setShowModal("")}
        className="absolute top-3 right-3 text-2xl text-black cursor-pointer hidden sm:block"
      >
        <IoClose />
      </div>
      <div className="w-[100%] h-[100%] sm:hidden">
        <img
          className="w-[100%] h-[100%]"
          src="https://i.pinimg.com/originals/af/95/cd/af95cdd7b70c173492caa3dd297f6a11.jpg"
          alt="city"
        ></img>
        <div
          onClick={() => setShowModal("")}
          className="absolute top-3 right-3 text-2xl text-white cursor-pointer"
        >
          <IoClose />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
