import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import hotelRoute from "../api/route/hotelRoute.js";
import roomRoute from "../api/route/roomRoute.js";
import authRoute from "../api/route/authRoute.js";
import paymentRoute from "../api/route/paymentRoute.js";

const app = express();

//connecting mongo server
const mongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongodb server sonnection successfull");
  } catch (err) {
    throw err;
  }
};

//middlewares.
app.use(express.json());
app.use(cors());
app.use("/hotel", hotelRoute);
app.use("/room", roomRoute);
app.use("/payment", paymentRoute);
app.use("/auth", authRoute);

//error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message,
    status: err.status,
    stack: err.stack,
  });
});

//Server connection.
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  mongo();
  console.log(`Server started successfully at ${PORT}`);
});
