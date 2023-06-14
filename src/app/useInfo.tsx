"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Info } from "./types";

const infoContext = createContext<User>(null);

function InfoContextProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string>();
  const [info, setInfo] = useState<Info>();

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const login = async (username: string, password: string) => {
    try {
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

      if (tokenData["error"]) {
        return "password";
      }

      setToken(tokenData);

      let infoRes = await fetch("/api/login", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          authorization: "Bearer " + tokenData,
        },
      });

      let infoData = await infoRes.json();
      setInfo(infoData);

      return "connected";
    } catch {
      return "server";
    }
  };

  return <infoContext.Provider value={[info, { login }]}>{children}</infoContext.Provider>;
}

function useInfo() {
  return useContext(infoContext);
}

export { InfoContextProvider, useInfo };

type User = [any, { login: (username: string, password: string) => Promise<string> }];
