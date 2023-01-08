"use client"

import { useRouter } from "next/router";
import { useState } from "react";


export default function AccountButton() {
  let [user, setUser] = useState({})
  let router = useRouter()

  const disconnect = async() => {
    console.log("disconnect");
    setUser("")
  }
  const redirectToLogin = async() => {
    console.log("login");
    router.push("/login")
  }


  const button = 
    <button 
      className="disconnect-button" 
      onClick={()=>user? disconnect():redirectToLogin()}>
        {user?"déconnecter":"connecter"}
    </button>

  return (
    button
  )
}