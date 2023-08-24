"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Info, Today, Class, Grade, Quote } from "./types";
import { delay } from "./_utils/timeout";

const infoContext = createContext<InfoContext>(null);

function InfoContextProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string>();
  const [info, setInfo] = useState<Info>();
  const [today, setToday] = useState<Today>();
  const [classes, setClasses] = useState<Class[]>();
  const [grades, setGrades] = useState<Grade[]>();
  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const getToday = async (tokenData: string, id: string) => {
    // this if for testing purposes
    const today = new Date().toLocaleDateString("en-CA").replaceAll("-", "");
    // const today = new Date().toLocaleDateString("en-CA").replaceAll("-", "");
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

  const getGrade = async (tokenData: string, classes: Class[], semester: string) => {
    // TODO: return data in object
    const allGrades = [];

    classes.forEach(async (x) => {
      const semesterGrades = {};
      for (let i = 0; i < parseInt(x.nbCompetencies); i++) {
        await delay(1000);
        let name = x.competencies[i].name;
        const params = new URLSearchParams();
        params.append("Competence", x.id + "~" + (i + 1));
        params.append("Etape", semester);
        params.append("cleClasse", x.id);

        try {
          const res = await fetch("/api/grades?" + params, {
            method: "GET",
            mode: "cors",
            next: { revalidate: 60 },
            cache: "default",
            headers: {
              authorization: "Bearer " + tokenData,
            },
          });
          const data = await res.json();

          semesterGrades[name] = data;
        } catch {
          semesterGrades[name] = {};
        }
      }

      const out = {};
      out[x.name] = semesterGrades;
      allGrades.push(out);
    });

    console.log(allGrades);

    setGrades(allGrades);
  };

  const getClasses = async (tokenData: string, id: string, time: string, semester: string) => {
    const params = new URLSearchParams();
    params.append("cleUniqueEleve", id);
    params.append("periodeEtudes", time);

    const res = await fetch("/api/classes?" + params, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      headers: {
        authorization: "Bearer " + tokenData,
      },
    });
    const data = await res.json();

    getGrade(tokenData, data, semester);

    setClasses(data);
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

    let infoData: Info = await infoRes.json();
    setInfo(infoData);

    getToday(tokenData, infoData.id);
    getClasses(tokenData, infoData.id, infoData.time, infoData.semester.toString());

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

  return <infoContext.Provider value={[{ info, today, classes, grades, quote }, { login, getInfo, getClasses, getToday, getQuote }]}>{children}</infoContext.Provider>;
}

function useInfo() {
  return useContext(infoContext);
}

export { InfoContextProvider, useInfo, type InfoContext };

type InfoContext = [
  {
    info: Info,
    today: Today,
    classes: Class[],
    grades: Grade[],
    quote: Quote
  },
  {
    login: (username: string, password: string) => Promise<string>;
    getInfo: (token: string) => Promise<string>;
    getClasses: (token: string, id: string, time: string, semester: string) => Promise<void>;
    getToday: (token: string, id: string) => Promise<void>;
    getQuote: () => Promise<string>;
  }
];
