import { createContext, useContext, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { useCurrentUser } from "./currentUser";
import SocketEvents from "@shared/SocketEvents.ts";

type SocketCtx = {
  socket: Socket | null;
  onlineUsers: string[];
};

const SocketContext = createContext<SocketCtx>({
  socket: null,
  onlineUsers: [],
});

export const useSocketContext = () => {
  return useContext(SocketContext);
};

const SocketProvider = ({ children }: React.PropsWithChildren) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const { currentUser } = useCurrentUser();

  console.log(onlineUsers);

  useEffect(() => {
    if (currentUser) {
      const socket = io("http://localhost:5000", {
        query: { userId: currentUser._id },
      });

      setSocket(socket);

      socket.on(SocketEvents.GET_ONLINE_USERS, (users) =>
        setOnlineUsers(users)
      );

      return () => {
        socket?.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [currentUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
