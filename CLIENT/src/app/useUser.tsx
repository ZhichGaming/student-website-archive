"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode, Dispatch } from "react";

const UserContext = createContext<[User, { login: (username: string, password: string) => Promise<string> }] | null>(null);

function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let sUser = localStorage.getItem("user") as unknown as User;
    if (sUser) setUser(sUser);
  }, [user]);

  async function login(username: string, password: string) {
    try {
      let res = await fetch("//localhost:8000/login", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (res.status == 401) {
        return "password";
      }

      let data = await res.json();
      setUser(data);

      return "connected";
    } catch {
      return "server";
    }
  }

  return <UserContext.Provider value={[user, { login }]}>{children}</UserContext.Provider>;
}

function useUser() {
  return useContext(UserContext);
}

type User = {
  name: string;
  id: string;
  group: string;
  locker: string;
  permcode: string;
};

export { UserContextProvider, useUser };

