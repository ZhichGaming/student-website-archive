"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Info, Today, Quote } from "./types";

const infoContext = createContext<InfoContext>(null);

function InfoContextProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string>();
  const [info, setInfo] = useState<Info>();
  const [today, setToday] = useState<Today>();
  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const getToday = async (tokenData: string, id: string) => {
    const today = new Date().toLocaleDateString("en-CA").replaceAll("-", "");
    const params = new URLSearchParams();
    params.append("cleUniqueEleve", id);
    params.append("dateDebut", today);
    params.append("dateFin", today);

    const res = await fetch("/api/today?" + params, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      headers: {
        authorization: "Bearer " + tokenData,
      },
    });
    const data = await res.json();

    setToday(data);
  };

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

    getToday(tokenData, infoData.id);

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

  const getQuote = async () => {
    let quoteRes = await fetch("/api/quote", {
      method: "GET",
      mode: "cors",
      cache: "no-cache"
    });
    
    const quoteData = await quoteRes.json();

    if (quoteData.quote == "Too many requests. Obtain an auth key for unlimited access.") {
      setQuote({"quote": "Too many requests. Please try again later."});
    } 
    else {
      setQuote(quoteData);
    }

    return "connected";
  };

  return <infoContext.Provider value={[info, { login, getInfo, getQuote }, today, quote]}>{children}</infoContext.Provider>;
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
    getQuote: () => Promise<string>;
  },
  Today,
  Quote
];

