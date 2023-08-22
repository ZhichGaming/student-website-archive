"use client";

import { useState } from "react";
import { useInfo } from "../../../useInfo";

export default function ClassesCard() {
  const now = parseInt(new Date().toLocaleTimeString("en-CA", { hourCycle: "h23" }).split(":").splice(0, 2).join(""));
  const [, , classes] = useInfo();
  let current = false;

  return (
    <div className="bg-white rounded-md w-full h-full p-8 flex flex-col space-y-4 shadow-sm">
      <p className="text-lg opacity-60">
        <b>Today&apos;s Classes</b>
      </p>
      <div className="flex flex-col justify-between space-y-2">
        {classes?.map((x, i) => {
          let color = "bg-neutral-100";
          if (x.time > now) {
            color = !current ? "bg-[#9AB3D9]" : "bg-neutral-100";
            current = true;
          }

          return (
            <div className={`${color} rounded text-center py-2`} key={i}>
              {x.name}
            </div>
          );
        })}

        {/* <div className="bg-[#9AB3D9] rounded"></div> */}
      </div>
    </div>
  );
}

