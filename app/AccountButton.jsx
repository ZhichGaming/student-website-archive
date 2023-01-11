"use client"

import Link from "next/link";
import { useRef, useState } from "react";


export default function AccountButton() {
<<<<<<< HEAD
  const loginButton = useRef(null)
  let [user, setUser] = useState("")
=======
  let [user, setUser] = useState({})
  let router = useRouter()
>>>>>>> a8e61c2c527c00b3dd6d1ecca5e72746bea5ada2

  const redirectToLogin = async() => {
<<<<<<< HEAD
    loginButton.current.click()
=======
    console.log("login");
    router.push("/login")
>>>>>>> a8e61c2c527c00b3dd6d1ecca5e72746bea5ada2
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