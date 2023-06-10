import { ReactNode } from "react";
import Toolbar from "./_components/ToolBar";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Toolbar />
      {children}
    </>
  );
}

