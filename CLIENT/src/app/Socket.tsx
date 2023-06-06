"use client";

import { type MutableRefObject, ReactNode, createContext, useContext, useRef } from "react";
import { type Socket, io } from "socket.io-client";

const SocketContext = createContext<MutableRefObject<Socket> | undefined>(undefined);

function SocketContextProvider({ children }: { children: ReactNode }) {
  const socket = useRef(io("http://localhost:8000"));

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}

function UseSocket() {
  return useContext(SocketContext);
}

export { SocketContextProvider, UseSocket };

