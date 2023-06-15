"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useInfo } from "../../../useInfo";

/* 
  I would like to point out that I know that there is a function in Nextjs for Middleware.
  The reason why I decided to put it into a component is because I needed to access
  localStorage and the info Context for login.
*/
export default function Middleware() {
  const router = useRouter();
  const [, { getInfo }] = useInfo();

  useEffect(() => {
    // const token = localStorage.getItem("token");
    const token = process.env.NEXT_PUBLIC_TOKEN;

    if (token == "undefined") {
      router.push("/login");
      return;
    } else {
      getInfo(token);
    }
  }, []);
  return <></>;
}
