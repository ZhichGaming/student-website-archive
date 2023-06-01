import { createStore, type SetStoreFunction } from "solid-js/store";
import { io } from "socket.io-client";
import { createEffect } from "solid-js";

export const userInfo = ((): [get: User, set: SetStoreFunction<User>] => {
  let local: User;
  if (typeof window !== "undefined") {
    local = localStorage.user;
  }

  const [user, setUser] = createStore<User>({
    username: null,
    password: null,
  });

  createEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.user = user;
    }
  });

  return [user, setUser];
})();

export const socket = io("http://localhost:8000");

type User = {
  username: string | null;
  password: string | null;
};

