"use client";

import Image from "next/image";
import { type InfoContext, useInfo } from "../../../useInfo";

export default function ToolbarAccount() {
  const [info]: InfoContext = useInfo();

  return (
    <>
      <p>
        {info?.info?.firstname}&nbsp;
        {info?.info?.name}
      </p>
      <Image src={info?.img?.portrait} alt="Profile picture" className="w-12 h-12 object-cover rounded-full ml-2" width={258} height={258} />
    </>
  );
}
