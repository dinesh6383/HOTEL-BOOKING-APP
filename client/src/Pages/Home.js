import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import TopStateHotels from "../components/TopStateHotels";
import Rentals from "../components/Rentals";
import Review from "../components/Review";
import SearchBar from "../components/SearchBar";
import MailPoster from "../components/MailPoster";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Carousel />
      <div className="bg-sky-50 py-5 pb-9">
        <div className="w-[72%] p-2 lg:w-[93%] md:w-[85%] md:py-5 sm:py-4 sm:w-[84%] xsm:w-[93%] h-[80px] md:h-[250px] sm:h-[390px] flex justify-start md:justify-center flex-wrap bg-sky-300 absolute top-[365px] md:top-[335px] sm:top-[340px] xsm:top-[280px] left-[14%] lg:left-[3%] md:left-[8%] sm:left-[9%] xsm:left-[3.5%] rounded-md">
          <SearchBar />
        </div>
        <TopStateHotels />
        <Rentals />
        <Review />
      </div>
      <MailPoster />
      <Footer />
    </div>
  );
};

export default Home;
