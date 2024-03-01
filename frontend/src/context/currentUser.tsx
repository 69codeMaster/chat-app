import { createContext, useContext, useEffect, useState } from "react";
import { contextType, props } from "./currentUserType";

const CurrentUserCtx = createContext<contextType>({
  currentUser: null,
  setCurrentUser: () => {},
});

export function useCurrentUser() {
  return useContext<contextType>(CurrentUserCtx);
}

export default function CurrentUserProvider({ children }: props) {
  const localStorageUser = localStorage.getItem("current-user");
  console.log(localStorageUser);
  const user: contextType["currentUser"] = localStorageUser
    ? JSON.parse(localStorageUser)
    : null;

  const [currentUser, setCurrentUser] =
    useState<contextType["currentUser"]>(user);

  console.log(currentUser);

  const value: contextType = {
    currentUser,
    setCurrentUser,
  };

  return (
    <CurrentUserCtx.Provider value={value}>{children}</CurrentUserCtx.Provider>
  );
}
