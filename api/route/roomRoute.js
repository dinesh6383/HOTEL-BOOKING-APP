import express from "express";
const router = express.Router();
import {
  createRoom,
  getRoom,
  getRooms,
  setUnvailableDate,
} from "../controller/roomController.js";

//CREATE ROOM ROUTE.
router.post("/:hotelid", createRoom);

//GET ALL ROOMS
router.get("/", getRooms);

//GET PARTICULAR ROOM
router.get("/:id", getRoom);

//SET UNAVAILABLE DATES TO ROOMS OF HOTEL
router.put("/availability/:roomnumid", setUnvailableDate);

export default router;
