import express from "express";
const router = express.Router();
import {
  deleteGoogleUser,
  googleAuthRoute,
  loginRoute,
  registerRoute,
} from "../controller/authController.js";

//LOGIN ROUTE
router.post("/login", loginRoute);
//REGISTER ROUTE
router.post("/register", registerRoute);
//GOOGLE ROUTE (AUTH)
router.post("/google", googleAuthRoute);
//DELETE GOOGLE USER
router.post("/google/delete", deleteGoogleUser);
export default router;
