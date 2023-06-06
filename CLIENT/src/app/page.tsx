"use client"

import { useEffect, useState } from "react";

export default function Home() {
  return <Toolbar/>;
}

function Toolbar() {
  return (
    <div className="toolbar">
      {/* Bro I tried everything I can't get local images to work in assets folder... */}
      <img src="./favicon.ico" className="toolbar-logo"/>

      <div className="toolbar-buttons-group">
        <ToolbarLink url="" label="Home" />
        <ToolbarLink url="/email" label="Email" />
        <ToolbarLink url="/portal" label="Portal" />
      </div>

      <div className="toolbar-profile-group">
        <p>Your Name</p>
        <img src="https://64.media.tumblr.com/ef4fdf8138e198106cc18fcc5300c1cb/d0bb637b9240f4c1-6f/s1280x1920/2e5dc11ff1e3b7955214477f422fdaec409c9cbc.jpg" alt="Profile picture" className="toolbar-pfp"/>
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
      setIsActive(true)
    }
  }, [url]);

  return (
    <a href={url != "" ? url : "../"} className={`toolbar-button-item ${isActive ? "current-page-button" : ""}`}>
      {label}
    </a>
  );
}
