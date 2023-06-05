import { createContext, useContext, useEffect, useState } from "react";
import { type Socket, io } from "socket.io-client";

const SocketContext = createContext<Socket | null>(null);

function SocketContextProvider({ children }: { children: Element }) {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    setSocket(io("http://localhost:8000"));
  }, []);

  return socket;
}

function UseSocket() {
  return useContext(SocketContext);
}
