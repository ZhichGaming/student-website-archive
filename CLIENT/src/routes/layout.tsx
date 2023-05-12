import { Slot, component$, createContextId, noSerialize, useContextProvider, useStore } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";

export const SocketCtx = createContextId<Socket>("socket.io-context");

export const UserCtx = createContextId<Signal<User>>("data.user-context");
type User = {
  username: string | null;
  password: string | null;
};

export default component$(() => {
  let local;
  if (typeof window !== "undefined") {
    local = localStorage.user;
  }

  const user = useStore(
    local ?? {
      username: null,
      password: null,
    }
  );

  const socket = noSerialize(io("http://localhost:8080"));

  useContextProvider(UserCtx, user);
  useContextProvider(SocketCtx, socket as Object);

  return (
    <>
      <Slot />
    </>
  );
});
