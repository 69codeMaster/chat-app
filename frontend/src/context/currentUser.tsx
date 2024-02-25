import { createContext, useContext, useState } from "react";
import { contextType, props, userContext } from "./currentUserType";

const defualt: userContext = {
  _id: "",
  fullName: "",
  gender: "",
  profilePic: "",
  username: "",
};
const CurrentUserCtx = createContext<contextType>({
  currentUser: defualt,
  setCurrentUser: () => {},
});

export function useCurrentUser() {
  return useContext<contextType>(CurrentUserCtx);
}

export default function CurrentUserProvider({ children }: props) {
  const localStorageUser = localStorage.getItem("current-user");

  const user: contextType["currentUser"] = localStorageUser
    ? JSON.parse(localStorageUser)
    : null;

  const [currentUser, setCurrentUser] =
    useState<contextType["currentUser"]>(user);

  const value: contextType = {
    currentUser,
    setCurrentUser,
  };

  return (
    <CurrentUserCtx.Provider value={value}>{children}</CurrentUserCtx.Provider>
  );
}
