import { ReactNode } from "react";
import Toolbar from "./_components/ToolBar";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-screen bg-neutral-100 flex flex-col">
      <Toolbar />
      {children}
    </div>
  );
}
