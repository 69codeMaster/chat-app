import { User } from "./../../../shared/requestsType";
import { Dispatch, ReactNode, SetStateAction } from "react";

export type userContext = Omit<User, "password" | "passwordConfirmation">;

export type contextType = {
  currentUser: userContext;
  setCurrentUser: Dispatch<SetStateAction<userContext>>;
};

export type props = {
  children: ReactNode;
};
