import express from "express";
import { getPayment, postPayment } from "../controller/paymentController.js";
const router = express.Router();

router.post("/", postPayment);
router.get("/", getPayment);

export default router;
