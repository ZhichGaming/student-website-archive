import { redirect } from "next/navigation";

export default function Lobby() {
  const userToken = true;
  if (userToken == true) {
    redirect("/home");
  } else {
    redirect("/login");
  }
}
