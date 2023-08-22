import Image from "next/image";

import Logo from "../../../favicon.ico";
import ToolbarLink from "./ToolbarLink";
import ToolbarAccount from "./ToolbarAccount";

export default function Toolbar() {
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

      <div className="flex text-right items-center justify-end w-64">
        <ToolbarAccount />
      </div>
    </div>
  );
}
