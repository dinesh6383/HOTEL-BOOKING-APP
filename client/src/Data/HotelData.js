import beach from "../Images/beach1.jpg";
import forest from "../Images/forest.jpg";
import house from "../Images/house.jpg";
import street from "../Images/street.jpg";
import Goa from "../Images/Goa.jpg";
import Mumbai from "../Images/Mumbai.jpg";
import Chennai from "../Images/Chennai.jpg";
import Banglore from "../Images/Banglore.jpg";
import Hyderabad from "../Images/Hyderabad.jpg";
import Apartment from "../Images/aparts.jpg";
import vacation from "../Images/vacation.jpg";
import villa from "../Images/villa.jpg";
import bungalow from "../Images/bungalow.jpg";
import GoaCarousel from "../Images/goaHotel.jpg";
import MumbaiCarousel from "../Images/mumbaiHotel.webp";
import ChennaiCarousel from "../Images/chennaiHotel.jpg";
import BangaloreCarousel from "../Images/bangaloreHotel.jpg";
import HyderabadCarousel from "../Images/hyderabadHotel.jfif";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import { GiCheckedShield } from "react-icons/gi";

export const carouselImages = [
  {
    img: beach,
    quote: "Enjoy your with trip with extra comfort.",
  },
  {
    img: forest,
    quote: "Book your rooms and avail more offers",
  },
  {
    img: house,
    quote: "We provide rooms in different countries",
  },
  {
    img: street,
    quote: "Book rooms according to your wish",
  },
];

export const topStateHotel = [
  {
    img: Goa,
    title: "Goa",
  },
  {
    img: Mumbai,
    title: "Mumbai",
  },
  {
    img: Chennai,
    title: "Chennai",
  },
  {
    img: Banglore,
    title: "Bangalore",
  },
  {
    img: Hyderabad,
    title: "Hyderabad",
  },
];

export const rentals = [
  {
    img: Apartment,
    title: "Apartment",
  },
  {
    img: vacation,
    title: "Vacation rental",
  },
  {
    img: bungalow,
    title: "Bungalow",
  },
  {
    img: villa,
    title: "Villas",
  },
];

export const review = [
  {
    hotelName: "Hotel Equatorial Melaka",
    location: "in Malaysia",
    content:
      "We were travelling with an infant and stated that in our Agoda special requests section when booking. The staff were exceptional in ensuring we had a splendid stay. Highly recommended!",
    user: "Raja from Malaysia",
  },
  {
    hotelName: "The Sydney Boulevard Hotel",
    location: "in Australia",
    content:
      "Booking the Executive Room-City View at a really affordable price via Agoda is quite a steal.",
    user: "Bellarmine from the Philippines",
  },
  {
    hotelName: "King Plaza Hotel",
    location: "in Taiwan",
    content:
      "We were travelling with an infant and stated that in our Agoda special requests section when booking. The staff were exceptional in ensuring we had a splendid stay. Highly recommended!",
    user: "Rahnee from Phillipines",
  },
];

export const states = ["Goa", "Chennai", "Mumbai", "Hyderabad", "Bangalore"];
export const extras = ["Adult", "Children", "Room"];

export const particularHotel = [
  {
    name: "Goa",
    image: GoaCarousel,
  },
  {
    name: "Mumbai",
    image: MumbaiCarousel,
  },
  {
    name: "Bangalore",
    image: BangaloreCarousel,
  },
  {
    name: "Chennai",
    image: ChennaiCarousel,
  },
  {
    name: "Hyderabad",
    image: HyderabadCarousel,
  },
];

export const FooterData = [
  {
    title: "Our Products",
    prods: ["Hotel Express", "Hotels", "Cars", "Flights", "Cruises"],
  },
  {
    title: "About Priceline",
    prods: [
      "Contact us",
      "Our story",
      "Careers",
      "Press center",
      "Investor Relations",
    ],
  },
  {
    title: "Partner with Booking.com",
    prods: ["Add your Hotel", "Booking.com partners", "Advertise"],
  },
  {
    title: "Connect with us",
    prods: ["Facebook", "Instagram", "Twitter", "Youtube"],
  },
];

export const reviews = [
  {
    name: "Staff",
    rating: 8,
  },
  {
    name: "Facilities",
    rating: 9,
  },
  {
    name: "Comfort",
    rating: 10,
  },
  {
    name: "Value for money",
    rating: 8,
  },
  {
    name: "Free wifi",
    rating: 9,
  },
];

export const paymentInfo = [
  {
    icon: <RiSecurePaymentLine />,
    value: "SECURE TRANSACTIONS",
  },
  {
    icon: <FiClock />,
    value: "24-HOUR SERVICE",
  },
  {
    icon: <GiCheckedShield />,
    value: "TRUSTED PAYMENTS",
  },
];
