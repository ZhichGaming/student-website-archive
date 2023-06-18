"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Info, Today, Classes, Grades } from "./types";

const infoContext = createContext<InfoContext>(null);

function InfoContextProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string>();
  const [info, setInfo] = useState<Info>();
  const [today, setToday] = useState<Today>();
  const [classes, setClasses] = useState<Classes>();
  const [grades, setGrades] = useState<Grades>();

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const getToday = async (tokenData: string, id: string) => {
    // this if for testing purposes
    const today = new Date(2023, 5, 16).toLocaleDateString("en-CA").replaceAll("-", "");
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

  const getGrade = async (tokenData: string, classes: Classes) => {
    // TODO: return data in object
    const allGrades = [];

    let semesters = 3;
    classes.forEach(async (x) => {
      const tempClass = [];
      setTimeout(async () => {
        for (let j = 1; j <= semesters; j++) {
          const semesterGrades = [];
          for (let i = 0; i < parseInt(x.nbCompetencies); i++) {
            const params = new URLSearchParams();
            params.append("Competence", x.id + "~" + i);
            params.append("Etape", j.toString());
            params.append("cleClasse", x.id);

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
            console.log(data);
          }
        }
      }, 1000);

      const out = {};
      out[x.name] = tempClass;
      allGrades.push(out);
    });

    setGrades(allGrades);
  };

  const getClasses = async (tokenData: string, id: string, time: string) => {
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

    // getGrade(tokenData, data);

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

    let infoData = await infoRes.json();
    setInfo(infoData);

    getToday(tokenData, infoData.id);
    getClasses(tokenData, infoData.id, infoData.time);

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

  return <infoContext.Provider value={[info, { login, getInfo }, today]}>{children}</infoContext.Provider>;
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
  },
  Today
];
