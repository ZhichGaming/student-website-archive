"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { type Socket, io } from "socket.io-client";

const SocketContext = createContext<Socket | undefined>(undefined);

function SocketContextProvider({ children }: { children: ReactNode }) {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    setSocket(io("http://localhost:8000"));

    return () => {
      socket?.disconnect();
    };
  }, [socket]);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}

function UseSocket() {
  return useContext(SocketContext);
}

export { SocketContextProvider, UseSocket };
