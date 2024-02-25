import { Dispatch, ReactNode, SetStateAction } from "react";
import { IUser } from "@shared/modelTypes";

export type userContext = Omit<IUser, "password" | "passwordConfirmation">;

export type contextType = {
  currentUser: userContext | null;
  setCurrentUser: Dispatch<SetStateAction<userContext | null>>;
};

export type props = {
  children: ReactNode;
};
