"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Info } from "./types";

const infoContext = createContext<InfoContext>(null);

function InfoContextProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string>();
  const [info, setInfo] = useState<Info>();

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const getInfo = async (tokenData: string) => {
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
  };

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

      return getInfo(tokenData);
    } catch {
      return "server";
    }
  };

  return <infoContext.Provider value={[info, { login, getInfo }]}>{children}</infoContext.Provider>;
}

function useInfo() {
  return useContext(infoContext);
}

export { InfoContextProvider, useInfo, type InfoContext };

type InfoContext = [
  Info,
  {
    login: (username: string, password: string) => Promise<string>;
    getInfo: (token: string) => Promise<string>;
  }
];
