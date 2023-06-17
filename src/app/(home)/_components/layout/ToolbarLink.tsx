"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./ToolBar.module.css";
import { usePathname } from "next/navigation";

export default function ToolbarLink({ url, label }: { url: string; label: string }) {
  const [isActive, setIsActive] = useState(false);
  const linkRef = useRef(null);
  const currentUrl = usePathname();

  useEffect(() => {
    if (url != "") {
      setIsActive(currentUrl.endsWith(url));
    }
  }, [currentUrl, url]);

  useEffect(() => {
    if (isActive == true) {
      linkRef.current.classList.remove(styles.toolbarButtonItemAnimation);
      linkRef.current.classList.add(styles.toolbarButtonItemActive);
      return;
    }
    linkRef.current.classList.add(styles.toolbarButtonItemAnimation);
    linkRef.current.classList.remove(styles.toolbarButtonItemActive);
  }, [isActive]);

  return (
    <Link href={url != "" ? url : "../"} className={`${styles.toolbarButtonItem}`} ref={linkRef}>
      {label}
    </Link>
  );
}

