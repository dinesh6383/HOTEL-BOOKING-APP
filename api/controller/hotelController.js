import mongoose from "mongoose";
import Hotel from "../model/hotelModel.js";
import Room from "../model/roomModel.js";

//CREATE HOTEL CONTROOLER
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

//READ ALL HOTEL
export const getAllHotel = async (req, res, next) => {
  try {
    const allHotels = await Hotel.find();
    res.status(200).json(allHotels);
  } catch (err) {
    next(err);
  }
};

//READ BY CITY
export const getHotelsByCity = async (req, res, next) => {
  try {
    const searchedHotels = await Hotel.find({ country: req.params.city });
    res.status(200).json(searchedHotels);
  } catch (err) {
    next(err);
  }
};

//READ ONE HOTEL OF CITY
export const getHotelByCity = async (req, res, next) => {
  try {
    const HotelOfCity = await Hotel.find({
      $and: [{ country: req.params.city }, { _id: req.params.id }],
    });
    res.status(200).json(HotelOfCity);
  } catch (err) {
    next(err);
  }
};

//READ ROOMS OF THE HOTEL
export const getHotelsRoom = async (req, res, next) => {
  try {
    const HotelOfCity = await Hotel.find({
      $and: [{ country: req.params.city }, { _id: req.params.id }],
    });
    const data = await Promise.all(
      HotelOfCity[0]?.rooms.map((roomId) => {
        console.log(roomId.splice(0, 10));
        return Room.findById({ _id: roomId });
      })
    );
    console.log("I have been called");
    res.status(200).json(HotelOfCity);
  } catch (err) {
    next(err);
  }
};
