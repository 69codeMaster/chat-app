import mongoose, { Schema } from "mongoose";

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

type IUser = {
  _id: mongoose.Types.ObjectId;
  fullName: string;
  username: string;
  password: string;
  gender: string;
  profilePic: string;
};

const User = mongoose.model<IUser>("User", userSchema);

export default User;
