"use client"

import Image from "next/image";
import Logo from "../../../favicon.ico";
import ToolbarLink from "./ToolbarLink";
import ToolbarAccount from "./ToolbarAccount";
import Popup from 'reactjs-popup';
import { type InfoContext, useInfo } from "../../../useInfo";
import { Skeleton } from "../loading/Skeleton";

export default function Toolbar() {
  const [info]: InfoContext = useInfo();

  const logout = () => {
    window.location.href = "/login"
  }

  return (
    <div className="w-full h-16 px-5 flex items-center justify-center bg-white shadow">
      <div className="w-64">
        <Image src={Logo} className="h-8 aspect-square w-auto" alt="" />
      </div>

      <div className="group ml-auto mr-auto">
        <ToolbarLink url="/" label="Home" />
        <ToolbarLink url="/email" label="Email" />
        <ToolbarLink url="/calendar" label="Calendar" />
        <ToolbarLink url="/grades" label="Grades" />
      </div>

      <Popup trigger={
        <button> 
          <div className="flex text-right items-center justify-end w-64">
            <ToolbarAccount />
          </div>
        </button>
      } position="bottom right">
        <div className="flex flex-col w-64 bg-white shadow-md p-6 rounded items-center">
          <Skeleton className="w-24 h-24" keyAwaited={info}>
            <Image src={info?.img?.portrait} alt="Profile picture" className="w-24 h-24 object-cover rounded-full" width={258} height={258} />
          </Skeleton>

          <h1 className="font-bold my-2">{info?.info?.name}</h1>

          <div className="flex flex-col text-sm text-center">
            <p>{info?.info?.locker}</p>
            <p>{info?.id}</p>
            <p>Group {info?.info?.group}</p>
          </div>

          <div className="flex flex-col my-2">
            <button className="rounded bg-neutral-100 w-36 h-8" onClick={logout}>Log out</button>
          </div>
        </div>
      </Popup>
    </div>
  );
}
