"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Logo from "../../assets/light-logo.png";

export default function Toolbar() {
  return (
    <div className="toolbar w-full h-16 px-5 top-0 z-50 flex items-center justify-center bg-white">
      <Image src={Logo} className="toolbar-logo mr-auto h-8 aspect-square w-auto" alt="" />

      <div className="toolbar-buttons-group">
        <ToolbarLink url="" label="Home" />
        <ToolbarLink url="/email" label="Email" />
        <ToolbarLink url="/portal" label="Portal" />
      </div>

      <div className="toolbar-profile-group flex items-center ml-auto">
        <p>Your Name</p>
        <Image src="" alt="Profile picture" className="toolbar-pfp w-12 h-12 object-cover rounded-full ml-2" width={258} height={258} />
      </div>
    </div>
  );
}

function ToolbarLink({ url, label }: { url: string; label: string }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.pathname;

    if (url != "") {
      setIsActive(currentUrl.endsWith(url));
    } else {
      setIsActive(true);
    }
  }, [url]);

  const toolbarButtonItemCss = "toolbar-button-item inline-block text-center ml-4 mr-4 opacity-50 hover:opacity-100 hover:duration-700";
  const toolbarButtonItemAnimationCss = "after:block after:origin-center after:scale-x-0 after:border-b-2 after:transition-all after:duration-500 after:ease-in-out hover:after:scale-x-100 hover:after:border-[#5F9EA0]";

  return (
    <Link href={url != "" ? url : "../"} className={`toolbar-button-item ${toolbarButtonItemCss} ${isActive ? "current-page-button border-[#5F9EA0] opacity-100 border-b-4" : toolbarButtonItemAnimationCss}`}>
      {label}
    </Link>
  );
}

