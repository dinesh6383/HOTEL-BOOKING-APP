import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselImages } from "../Data/HotelData";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "ease-out",
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {carouselImages.map((image, idx) => {
        return (
          <div
            className="w-[100vw] h-[340px] md:h-[250px] xsm:h-[200px]"
            key={idx}
          >
            <div
              className="w-[100%] h-[100%] flex justify-center items-center"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(${image.img})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="text-white font-extrabold text-5xl md:text-3xl xsm:text-lg text-center filter">
                {image.quote}
              </p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;

/* 
<img
              className="object-center aspect-auto w-[100%] h-[300px] sm:h-[250px]"
              src={image}
              alt={`${image}-img`}
            ></img>
*/
