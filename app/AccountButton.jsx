"use client"

import Link from "next/link";
import { useRef, useState } from "react";


export default function AccountButton() {
  const loginButton = useRef(null)
  let [user, setUser] = useState("")

  const redirectToLogin = async() => {
    loginButton.current.click()
  }
    

  return (
    <>
      <button 
        className="disconnect-button" 
        onClick={()=>user? /* add profile */ "":redirectToLogin()}>
          {user?"déconnecter":"connecter"}
      </button>
      <Link href={"/login"} ref={loginButton} />
    </>
  )
}