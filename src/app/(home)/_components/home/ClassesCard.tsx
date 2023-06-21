"use client";

import { useEffect, useState } from "react";
import { useInfo } from "../../../useInfo";
import { Skeleton } from "../loading/Skeleton";

export default function ClassesCard() {
  const [now, setNow] = useState(parseInt(new Date().toLocaleTimeString("en-CA", { hourCycle: "h23" }).split(":").splice(0, 2).join("")));
  const [, , classes] = useInfo();
  let current = false;

  useEffect(() => {
    let i = setInterval(() => {
      setNow(parseInt(new Date().toLocaleTimeString("en-CA", { hourCycle: "h23" }).split(":").splice(0, 2).join("")));
    }, 1000 * 30);
    return () => clearInterval(i);
  }, [now]);

  return (
    <div className="bg-white rounded-md w-full h-full p-8 flex flex-col space-y-4">
      <p className="text-lg opacity-50">
        <b>Today&apos;s Classes</b>
      </p>
      <div className="flex flex-col justify-between space-y-2">
        <Skeleton className="rounded py-5" keyAwaited={classes} times={5}>
          {classes?.length > 0
            ? classes?.map((x, i) => {
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
              })
            : "no classes today :)"}
        </Skeleton>
      </div>
    </div>
  );
}
