"use client";

import BackgroundImage from "../assets/background.jpg";
import Image from "next/image";
import GeneralCard from "./_components/home/GeneralCard";
import EventsCard from "./_components/home/EventsCard";
import DateCard from "./_components/home/DateCard";
import ClassesCard from "./_components/home/ClassesCard";
import GradesCard from "./_components/home/GradesCard";
import { useInfo } from "../useInfo";

export default function Home() {
  const [info] = useInfo();

  return (
    <div>
      <div className="p-12 flex flex-col h-full space-y-6 mb-6">
        <div className="flex space-x-6">
          <GeneralCard name={info?.info?.name} />
          <div className="flex flex-col w-5/12 space-y-6">
            <EventsCard />
            <Image className="w-full rounded-md flex h-1/3 object-cover object-bottom" src={BackgroundImage} alt="Image of the school entrance" />
          </div>
          <div className="flex flex-col w-5/12 space-y-6">
            <DateCard />
            <ClassesCard />
          </div>
        </div>
        <GradesCard />
      </div>
    </div>
  );
}
