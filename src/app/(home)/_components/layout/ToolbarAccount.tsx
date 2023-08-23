"use client";

import Image from "next/image";
import { type InfoContext, useInfo } from "../../../useInfo";
import { Skeleton, TextSkeleton } from "../loading/Skeleton";
import { useEffect } from "react";
import React from "react";

export default function ToolbarAccount() {
  const [info]: InfoContext = useInfo();

  useEffect(() => {
    if (info?.info?.name === undefined) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
      <TextSkeleton className="h-3 ml-2" w={8} keyAwaited={info} times={2} justify={1}>
        <p>{info?.info?.name}</p>
      </TextSkeleton>

      <Skeleton className="w-12 h-12 ml-2" keyAwaited={info}>
        <Image src={info?.img?.portrait} alt="Profile picture" className="w-12 h-12 object-cover rounded-full ml-2" width={258} height={258} />
      </Skeleton>
    </>
  );
}
