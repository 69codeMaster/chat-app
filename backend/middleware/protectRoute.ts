import jwt from "jsonwebtoken";
import { SendMessageRequest } from "@shared/requestsType.ts";
import { Request, Response, NextFunction } from "express";
import User from "../models/user.model.ts";

export default async (
  expressReq: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const req = expressReq as SendMessageRequest;
    const token = req.cookies.jwt;
    if (!token)
      return res.status(401).json({ error: "unauthorized - no token foudn" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret);

    if (!decoded)
      return res.status(401).json({ error: "unauthorized - Invalid token" });

    if (typeof decoded !== "object" || !("userId" in decoded))
      return res.status(400).json({ error: "toekn payload missing key" });

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(400).json({ error: "user not found" });
    }

    req.user = { id: decoded.userId };

    next();
  } catch (error) {}
};
