import React, { useContext } from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { authContext } from "../context/AuthContext";
import { Modal } from "../context/ModalContext";
import { googleLogout } from "@react-oauth/google";
import axios from "axios";

const Header = () => {
  const { showModal, setShowModal } = useContext(Modal);
  console.log(showModal);
  const { user, dispatch, googleLogin } = useContext(authContext);
  // const [showModal, setShowModal] = useState("");
  const handleModal = (value) => {
    setShowModal(value);
  };

  const handleLogout = async () => {
    if (googleLogin) {
      await axios.post("/auth/google/delete", {
        id: user?.id,
      });
      dispatch({
        type: "GOOGLE_LOGOUT",
      });
      googleLogout();
    } else {
      dispatch({
        type: "LOGOUT",
      });
    }
  };

  console.log(googleLogin);

  return (
    <>
      <div className="w-[100%] bg-sky-50 h-[60px] px-3 py-8 flex justify-between items-center border-b-2 border-gray-300">
        <Link to="/">
          <div className="flex justify-center items-center">
            <img className="w-[60px]" src={logo} alt="logo-img"></img>
            <p className="text-xl md:text-md font-bold ml-2 text-sky-700">
              Booking.com
            </p>
          </div>
        </Link>
        {user ? (
          <div className="flex">
            <div className="bg-slate-300 border-[1px] border-gray-500 shadow-xl p-2 rounded-md font-semibold">
              <p>{user?.username}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-sky-600 text-white font-semibold p-2 rounded-sm shadow-xl sm:text-sm sm:rounded-lg ml-2"
            >
              LOGOUT
            </button>
          </div>
        ) : (
          <div className="mr-5 sm:mr-2">
            <button
              onClick={() => handleModal("register")}
              className="bg-sky-600 text-white font-semibold p-2 mr-4 rounded-sm shadow-xl sm:text-sm sm:rounded-lg"
            >
              REGISTER
            </button>
            <button
              onClick={() => handleModal("login")}
              className="bg-sky-600 text-white font-semibold p-2 rounded-sm shadow-xl sm:text-sm sm:rounded-lg"
            >
              LOGIN
            </button>
          </div>
        )}
      </div>
      {showModal === "register" ? (
        <div className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 z-10 w-[100%] h-[100vh] after:w-[100%] after:h-[100%] after:bg-black after:opacity-[0.8]">
          <RegisterModal setShowModal={setShowModal} />
        </div>
      ) : (
        showModal === "login" && (
          <div className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 z-10 w-[100%] h-[100vh] after:w-[100%] after:h-[100%] after:bg-black after:opacity-[0.8]">
            <LoginModal setShowModal={setShowModal} />
          </div>
        )
      )}
    </>
  );
};

export default Header;
