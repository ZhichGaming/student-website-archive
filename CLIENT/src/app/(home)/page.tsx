"use client";

import BackgroundImage from "../assets/background.jpg";
import Image from "next/image";
import GeneralCard from "./_components/GeneralCard";
import EventsCard from "./_components/EventsCard";
import DateCard from "./_components/DateCard";
import ClassesCard from "./_components/ClassesCard";
import GradesCard from "./_components/GradesCard";

export default function Home() {
  return (
    // TODO: Make the background color take all the screen even when the browser's height is small enough to scroll.

    <div className="flex-grow">
      <div className="p-12 flex flex-col h-full space-y-6 mb-6">
        <div className="flex space-x-6 flex-grow">
          <GeneralCard />
          <div className="flex flex-col w-5/12 space-y-6 flex-grow">
            <EventsCard />
            <Image className="w-full rounded-md flex flex-grow h-1/3 object-cover object-bottom" src={BackgroundImage} alt="Image of the school entrance" />
          </div>
          <div className="flex flex-col w-5/12 space-y-6 flex-grow">
            <DateCard />
            <ClassesCard />
          </div>
        </div>
        <GradesCard />
      </div>
    </div>
  );
}
