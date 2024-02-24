import { Request } from "express";
import mongoose from "mongoose";

const genders = ["male", "female", ""] as const;

export interface SignupRequest extends Request {
  body: {
    fullName: string;
    username: string;
    password: string;
    passwordConfirmation: string;
    gender: (typeof genders)[number];
  };
}

export interface LoginRequest extends Request {
  body: { username: string; password: string };
}

export interface LogoutRequest extends Request {
  body: { username: string };
}

export interface SendMessageRequest extends Request {
  params: {
    id: string;
  };

  body: {
    message: string;
  };

  user: { id: mongoose.Schema.Types.ObjectId };
}

export interface SendMessageRequest extends Request {
  params: {
    id: string;
  };

  body: {
    message: string;
  };

  user: { id: mongoose.Schema.Types.ObjectId };
}

export interface GetMessagesRequest extends Request {
  params: {
    id: string;
  };

  user: { id: mongoose.Schema.Types.ObjectId };
}
export interface GetUsersRequest extends Request {
  user: { id: mongoose.Schema.Types.ObjectId };
}

export type sendMessageWithParams =
  `/send/:${keyof SendMessageRequest["params"]}`;

export type getMessagesWithParams = `/:${keyof GetMessagesRequest["params"]}`;
