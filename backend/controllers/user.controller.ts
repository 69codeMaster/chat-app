import { Request, Response } from "express";
import User from "../models/user.model.ts";
import { GetUsersRequest } from "requestsType";

export const getUsersForSideBar = async (
  expressReq: Request,
  res: Response
) => {
  try {
    const req = expressReq as GetUsersRequest;
    const loggedInUser = req.user.id;

    const allUsers = await User.find({ _id: { $ne: loggedInUser } });

    res.status(201).json(allUsers);
  } catch (e) {
    res.status(500).json({
      message: "internal error server",
    });
  }
};
