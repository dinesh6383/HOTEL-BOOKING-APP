import express from "express";
const router = express.Router();
import {
  createHotel,
  getAllHotel,
  getHotelByCity,
  getHotelsByCity,
  getHotelsRoom,
} from "../controller/hotelController.js";

//Create hotel route
router.post("/create", createHotel);
//GET ALL HOTEL ROUTE
router.get("/", getAllHotel);
//GET PARTICULAR HOTELS ROUTE
router.get("/:city", getHotelsByCity);
//GET PARTICULAR HOTEL ROUTE
router.get("/:city/:id", getHotelByCity);
//GET ROOMS BY HOTEL
router.get("/find/:city/:id", getHotelsRoom);

export default router;
