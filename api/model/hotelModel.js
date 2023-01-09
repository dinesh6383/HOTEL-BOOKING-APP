import mongoose from "mongoose";

const HotelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  extras: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rooms: {
    type: Array,
    required: false,
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
});

const Hotel = mongoose.model("hotels", HotelSchema);
export default Hotel;
