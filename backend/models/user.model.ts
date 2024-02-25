import mongoose, { Schema } from "mongoose";
import { IUser } from "../../shared/modelTypes";

const userSchema: Schema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, requires: true, minlength: 6 },
    gender: { type: String, requires: true, enum: ["male", "female"] },
    profilePic: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model<Omit<IUser, "passwordConfirmation">>(
  "User",
  userSchema
);

export default User;
