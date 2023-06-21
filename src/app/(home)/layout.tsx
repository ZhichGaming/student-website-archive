import { ReactNode } from "react";
import Toolbar from "./_components/layout/ToolBar";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <Toolbar />
      {children}
    </div>
  );
}

