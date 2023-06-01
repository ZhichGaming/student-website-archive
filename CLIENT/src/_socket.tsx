import { type Socket, io } from "socket.io-client";
import { createContext, createSignal, onCleanup, onMount, useTransition } from "solid-js";

const SocketContext = createContext();

const SocketContextProvider = ({ children }: { children: Element[] }) => {
  const [socket, setSocket] = createSignal<Socket | null>(null);
  onMount(() => {
    setSocket(io("http://localhost:8000"));
  });
  onCleanup(() => {
    socket()?.disconnect();
  });

  return (
    // the Provider gives access to the context to its children
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
export { SocketContext, SocketContextProvider };

