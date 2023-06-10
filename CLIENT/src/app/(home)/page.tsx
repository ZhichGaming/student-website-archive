"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BackgroundImage from "./assets/background.jpg";
import Image from "next/image";

import Logo from "./favicon.ico";

export default function Home() {
  return (
    // TODO: Make the background color take all the screen even when the browser's height is small enough to scroll.
    <div className="h-screen w-screen bg-neutral-100 flex flex-col">
      <div className="flex-grow">
        <div className="p-12 flex flex-col h-full space-y-6 mb-6">
          <div className="flex space-x-6 flex-grow">
            <GeneralCard />
            <div className="flex flex-col w-5/12 space-y-6 flex-grow">
              <EventsCard />
              <Image className="w-full rounded-md flex flex-grow h-1/3 object-cover object-bottom" src={BackgroundImage} alt="Image of the school" />
            </div>
            <div className="flex flex-col w-5/12 space-y-6 flex-grow">
              <DateCard />
              <ClassesCard />
            </div>
          </div>
          <GradesCard />
        </div>
      </div>
    </div>
  );
}

function GeneralCard() {
  return (
    <div className="bg-white rounded-md w-full p-8 flex flex-col justify-between flex-grow">
      <div>
        <h1 className="text-4xl opacity-50 mb-1">
          Welcome back, <b>Your Name</b>!
        </h1>
        <p className="text-lg opacity-50">
          Today is <b>Wednesday</b>, the <b>7th of June</b>.
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

function EventsCard() {
  return (
    <div className="bg-white rounded-md p-8 flex flex-col h-4/6">
      <p className="text-lg opacity-50 mb-2">
        <b>Upcoming Events</b>
      </p>
      <div className="">
        <p>Science Exam</p>
        {/* For some reason, this text goes up when I try to put these two on a same line using flex. Very weird. */}
        <p className="text-sm opacity-50">In 4 days</p>
      </div>
    </div>
  );
}

function DateCard() {
  return (
    <div className="flex space-x-6 text-center">
      <div className="bg-white rounded-md p-8 flex-1">
        <p className="text-3xl font-bold">20</p>
        <p className="text-sm">days left</p>
      </div>
      <div className="bg-white rounded-md p-8 flex-1">
        <p className="text-sm">Day</p>
        <p className="text-3xl font-bold">8</p>
      </div>
    </div>
  );
}

function ClassesCard() {
  return (
    <div className="bg-white rounded-md w-full h-full p-8 flex flex-col space-y-4">
      <p className="text-lg opacity-50">
        <b>Today&apos;s Classes</b>
      </p>
      <div className="flex-grow flex flex-col justify-between space-y-2">
        <div className="flex-grow bg-neutral-300 rounded"></div>
        <div className="flex-grow bg-neutral-300 rounded"></div>
        <div className="flex-grow bg-neutral-300 rounded"></div>
        <div className="flex-grow bg-[#9AB3D9] rounded"></div>
        <div className="flex-grow bg-neutral-300 rounded"></div>
      </div>
    </div>
  );
}

function GradesCard() {
  return (
    <div className="h-36">
      {/* I don't know how to add this without breaking the site so I'm just gonna remove it. 
          It doesn't look that bad anyway without it. */}
      {/* <h2 className="mb-4"><b>Quick Summary of Your Grades</b></h2> */}
      <div className="flex space-x-6 mt-1">
        <div className="bg-white rounded-md w-full p-8 space-y-2">
          <p className="opacity-50">Average yearly grade</p>
          <p className="font-black text-3xl">90.8%</p>
        </div>
        <div className="bg-white rounded-md w-full p-8 space-y-2">
          <p className="opacity-50">Average term grade</p>
          <p className="font-black text-3xl">93.5%</p>
        </div>
        <div className="bg-white rounded-md w-full p-8 space-y-2">
          <p className="opacity-50">Median grade</p>
          <p className="font-black text-3xl">87.6%</p>
        </div>
        <div className="bg-white rounded-md w-full p-8 space-y-2">
          <p className="opacity-50">Standard deviation</p>
          <p className="font-black text-3xl">6.7%</p>
        </div>
      </div>
    </div>
  );
}

