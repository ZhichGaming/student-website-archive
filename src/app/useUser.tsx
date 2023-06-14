"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Info } from "./types";

const userContext = createContext<User>(null);

function UserContextProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string>(null);
  const [info, setInfo] = useState<Info>(null);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  async function login(username: string, password: string) {
    let tokenRes = await fetch("/api/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    let tokenData = await tokenRes.json();
    setToken(tokenData);

    let infoRes = await fetch("/api/login", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      headers: {
        authorization: "Bearer " + token,
      },
    });

    let infoData = await infoRes.json();
    setInfo(infoData);

    console.log(info);
  }

  return <userContext.Provider value={[info, { login }]}></userContext.Provider>;
}

function useUser() {
  return useContext(userContext);
}

export { UserContextProvider, useUser };

type User = [any, { login: (username: string, password: string) => Promise<void> }];

