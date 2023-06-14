import Image from "next/image";

import Logo from "../../../favicon.ico";
import ToolbarLink from "./ToolbarLink";

export default function Toolbar() {
  return (
    <div className="w-full h-16 px-5 top-0 z-50 flex items-center justify-center bg-white">
      <Image src={Logo} className="mr-auto h-8 aspect-square w-auto" alt="" />

      <div className="group">
        <ToolbarLink url="/" label="Home" />
        <ToolbarLink url="/email" label="Email" />
        <ToolbarLink url="/portal" label="Portal" />
      </div>

      <div className="flex items-center ml-auto">
        <p>Your Name</p>
        <Image src="" alt="Profile picture" className="w-12 h-12 object-cover rounded-full ml-2" width={258} height={258} />
      </div>
    </div>
  );
}

