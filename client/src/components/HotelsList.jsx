import React, { useContext, useEffect } from "react";
import UseFetch from "../Hooks/UseFetch";
import { searchContext } from "../context/SearchContext";
import SearchBar from "./SearchBar";
import HotelCard from "./HotelCard";

const HotelsList = () => {
  const { place } = useContext(searchContext);
  const { data, loading, refetch } = UseFetch(`/hotel/${place}`);
  console.log(data);

  useEffect(() => {
    refetch(`/hotel/${place}`);
  }, [place]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="w-[100%] bg-sky-800 py-2">
        <div className="h-max mx-auto bg-sky-400 w-[72%] p-2 lg:w-[93%] md:w-[85%] md:py-5 sm:py-4 sm:w-[84%] xsm:w-[93%] md:h-[250px] sm:h-[390px] flex justify-start md:justify-center flex-wrap rounded-md">
          <SearchBar />
        </div>
      </div>
      <div className="py-5 bg-sky-100 border-b-2 border-sky-400">
        <p className="font-bold text-5xl text-center text-zinc-800 md:text-3xl sm:text-2xl xsm:text-lg">
          Top Hotels in {place}
        </p>
      </div>
      {!loading && (
        <div className="w-[100%] h-max flex justify-center items-center py-5 px-3 sm:px-2 flex-wrap">
          {data?.data?.map((hotel, idx) => {
            return <HotelCard hotel={hotel} key={idx} />;
          })}
        </div>
      )}
    </>
  );
};

export default HotelsList;
