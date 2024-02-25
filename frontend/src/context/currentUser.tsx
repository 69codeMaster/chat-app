import { createContext, useContext, useState } from "react";
import { contextType, props, userContext } from "./currentUserType";

const defualt: userContext = {
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

  const user: userContext = localStorageUser
    ? JSON.parse(localStorageUser)
    : defualt;

  const [currentUser, setCurrentUser] = useState<userContext>(user);

  const value: contextType = {
    currentUser,
    setCurrentUser,
  };
  
  return (
    <CurrentUserCtx.Provider value={value}>{children}</CurrentUserCtx.Provider>
  );
}
