import mongoose from "mongoose";

const RoomSchema = mongoose.Schema(
  {
    roomType: {
      type: String,
      required: true,
    },
    roomNumbers: {
      type: [{ number: { type: Number }, unAvailableDates: { type: [Date] } }],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    benifits: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Room = mongoose.model("rooms", RoomSchema);
export default Room;
