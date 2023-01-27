"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function AccountButton() {
  const router = useRouter();
  let [user, setUser] = useState("");

  const redirectToLogin = async () => {
    router.push("/login");
  };

  return (
    <>
      <Image
        src={"/logout.png"}
        onClick={() => redirectToLogin()}
        alt=""
        width={512}
        height={512}
      />
    </>
  );
}
