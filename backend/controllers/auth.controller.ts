import {
  SignupRequest,
  LoginRequest,
  LogoutRequest,
} from "../../shared/requestsType";
import { Response } from "express";
import User from "../models/user.model.js";
import { compare, hash } from "../utils/passwordActions.js";
import generateTokenAndSetCookie from "../utils/generateJwtSetCookie.js";

export const signup = async (req: SignupRequest, res: Response) => {
  try {
    const { username, fullName, password, passwordConfirmation, gender } =
      req.body;

    console.log(req.body);

    const user_exists = await User.exists({ username });

    if (password !== passwordConfirmation)
      res.status(400).json({
        error: "the password confirmation doesn't match",
      });

    if (password.length < 6)
      return res
        .status(400)
        .json({ error: "password should be at least 6 characters" });

    if (user_exists)
      return res.status(400).json({ error: "username already exists" });

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: await hash(password),
      gender: gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        password: newUser.password,
        fullName: newUser.fullName,
        profilePic: newUser.profilePic,
        gender: newUser.gender,
      });
    } else res.status(400).json({ error: "invalid user data" });
  } catch (e: any) {
    console.log("error in singup controller ", e.message);
    res.status(501).json({ error: "internal server error" });
  }
};

export const login = async (req: LoginRequest, res: Response) => {
  try {
    const { password, username } = req.body;

    const user = await User.findOne({ username });

    const isPasswordCorrect = await compare(password, user?.password ?? "");

    if (!user || !isPasswordCorrect)
      return res
        .status(400)
        .json({ error: "username or password are incorrect" });

    generateTokenAndSetCookie(user?._id, res);
    res.status(201).json({ message: "logged in successfully" });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

export const logout = (req: LogoutRequest, res: Response) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });

    res.status(201).json({
      message: "logged out successfully",
    });
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
};