"use client";

import { TextSkeleton } from "../loading/Skeleton";
import { type InfoContext, useInfo } from "../../../useInfo";
import { useEffect } from "react";

export default function GeneralCard() {
  const [weekday, day] = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }).split(", ");
  const [month, date] = day.split(" ");
  const name = useInfo()[0]?.info?.info?.name;
  const th = getTH(parseInt(date));
  const [{quote},{getQuote}]: InfoContext = useInfo();

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="bg-white rounded-md w-full p-8 flex flex-col justify-between shadow-sm">
      <div>
        <TextSkeleton className="text-3xl h-10 opacity-80 mb-1" w={30} keyAwaited={name}>
          <h1 className="text-3xl opacity-80 mb-1">
            Welcome back, <b>{name}</b>!
          </h1>
        </TextSkeleton>
        <TextSkeleton className="text-lg h-5 opacity-60" w={20} keyAwaited={name}>
          Today is <b>{weekday}</b>, the{" "}
          <b>
            {date + th} of {month}
          </b>
          .
        </TextSkeleton>
      </div>
      <div className="bg-[#FAF4EF] rounded-md h-28 flex items-center justify-center">
        <p className="text-lg text-center m-4 font-serif">{quote?.quote ?? "Loading quote of the day..."}</p>
      </div>
    </div>
  );
}

function getTH(number: number): string {
  if (number > 3 && number < 21) return "th";
  switch (number % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

type Props = {
  name: string;
};
