import React from "react";

const MailPoster = () => {
  return (
    <div className="w-[100%] h-[240px] bg-sky-700 flex flex-col justify-center items-center">
      <p className="text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-extrabold text-slate-200 mb-7">
        SUBSCRIBE TO GET MORE OFFERS!
      </p>
      <div>
        <input
          className="border-none outline-none w-[370px] sm:w-[300px] xsm:w-[230px] h-[50px] rounded-l-md p-4"
          type="text"
          placeholder="123@abc.com"
        ></input>
        <button className=" bg-sky-400 h-[50px] rounded-r-md px-3 font-bold text-slate-50 xsm:text-sm">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default MailPoster;
