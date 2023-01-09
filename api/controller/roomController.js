import Hotel from "../model/hotelModel.js";
import Room from "../model/roomModel.js";

export const createRoom = async (req, res) => {
  const newRoom = new Room(req.body);
  const HotelId = req.params.hotelid;

  try {
    const savedRoom = await newRoom.save();
    try {
      const updatedHotel = await Hotel.findByIdAndUpdate(HotelId, {
        $push: { rooms: savedRoom._id },
      });
      res.status(200).json(updatedHotel);
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req, res) => {
  try {
    const rooms = await Room.findById(req.params.id);
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

export const setUnvailableDate = async (req, res) => {
  try {
    await Room.updateOne(
      {
        "roomNumbers._id": req.params.roomnumid,
      },
      {
        $push: {
          "roomNumbers.$.unAvailableDates": req.body.dates,
        },
      }
    );

    res.status(200).send("UPDATION SUCCESSFULL");
  } catch (err) {
    next(err);
  }
};
