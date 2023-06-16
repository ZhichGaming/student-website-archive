"use client";

import { useInfo } from "../../../useInfo";

export default function GeneralCard() {
  const [weekday, day] = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }).split(", ");
  const [month, date] = day.split(" ");
  const name = useInfo()[0]?.info?.name;
  const th = getTH(parseInt(date));

  return (
    <div className="bg-white rounded-md w-full p-8 flex flex-col justify-between">
      <div>
        <h1 className="text-4xl opacity-50 mb-1">
          Welcome back, <b>{name}</b>!
        </h1>
        <p className="text-lg opacity-50">
          Today is <b>{weekday}</b>, the{" "}
          <b>
            {date + th}
            of {month}
          </b>
          .
        </p>
      </div>
      <div>
        <p className="opacity-50 mb-1">Quote of the day</p>
        <div className="bg-[#FAF4EF] rounded-md h-28 flex items-center justify-center">
          <p className="text-lg text-center m-4">Teamwork makes dreams work!</p>
        </div>
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

