import { redirect } from "solid-start/server";
import { userInfo } from "./store";

export function GET() {
  const [user, setUser] = userInfo;

  if (user.password !== null || user.username !== null) {
    return redirect("/home");
  }
  return redirect("/login");
}

export const head = {
  title: "Portail de l'élève",
  meta: [
    {
      name: "description",
      content: "Student console for Collège JDLM",
    },
  ],
};

