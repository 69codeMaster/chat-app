import { Request } from "express";
import { IUser, IChat, IMessage } from "./modelTypes";

export interface SignupRequest extends Request {
  body: Omit<IUser, "profilePic">;
}

export interface LoginRequest extends Request {
  body: { username: string; password: string };
}

export interface LogoutRequest extends Request {
  body: Pick<IUser, "username">;
}

export interface SendMessageRequest extends Request {
  params: {
    id: string;
  };

  body: {
    message: string;
  };

  user: { id: IMessage["_id"] };
}

export interface SendMessageRequest extends Request {
  params: {
    id: string;
  };

  body: {
    message: string;
  };

  user: { id: IUser["_id"]  };
}

export interface GetMessagesRequest extends Request {
  params: {
    id: string;
  };

  user: { id: IUser["_id"] };
}
export interface GetUsersRequest extends Request {
  user: { id: IUser["_id"] };
}

export type sendMessageWithParams =
  `/send/:${keyof SendMessageRequest["params"]}`;

export type getMessagesWithParams = `/:${keyof GetMessagesRequest["params"]}`;
