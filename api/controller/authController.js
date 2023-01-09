import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { customError } from "../utils/customError.js";
import dotenv from "dotenv";
dotenv.config();

export const registerRoute = async (req, res, next) => {
  const saltRounds = 10;
  const hashPassword = bcrypt.hashSync(req.body.password, saltRounds);

  try {
    const checkUser = await User.findOne({ email: req.body.email });
    if (checkUser) {
      return next(401, "User already registered!");
    } else {
      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashPassword,
      });

      const savedUser = await newUser.save();
      res.status(200).json({
        username: savedUser.firstname,
        email: savedUser.email,
        id: savedUser._id,
      });
    }
  } catch (err) {
    next(err);
  }
};

export const loginRoute = async (req, res, next) => {
  try {
    const checkUser = await User.findOne({ email: req.body.email });
    if (!checkUser) {
      return next(customError(404, "USER NOT FOUND!"));
    }

    const checkPassword = bcrypt.compare(req.body.password, checkUser.password);

    if (!checkPassword) {
      return next(customError(404, "INCORRECT USERNAME AND PASSWORD!"));
    }

    const token = jwt.sign(
      {
        id: checkUser._id,
      },
      process.env.JWT
    );

    const { _id, firstname, email } = checkUser;
    res.cookie("access_token", token, { httpOnly: true }).status(200).json({
      id: _id,
      username: firstname,
      email: email,
    });
  } catch (err) {
    next(err);
  }
};

export const googleAuthRoute = async (req, res, next) => {
  try {
    const newGoogleUser = new User(req.body);
    const savedGoogleUser = await newGoogleUser.save();

    res.status(200).json({
      username: savedGoogleUser.firstname,
      email: savedGoogleUser.email,
      id: savedGoogleUser._id,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteGoogleUser = async (req, res, next) => {
  try {
    console.log("Vanga delete panna");
    const deleteUser = await User.findOneAndDelete({ _id: req.body.id });
    res.status(200).json({
      message: "deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};
