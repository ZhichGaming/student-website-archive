"use client";

import { ReactNode, createContext, useContext, useEffect } from "react";
import { type Socket, io } from "socket.io-client";

const SocketContext = createContext<Socket | null>(null);
let socket: Socket;

function SocketContextProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    socketInitializer();
  });

  const socketInitializer = async () => {
    socket = io("http://localhost:8000");

    socket.on("connect", () => {
      console.log("connected");
    });

    return () => {
      socket.disconnect();
    };
  };
  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}

function UseSocket() {}

