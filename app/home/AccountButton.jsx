"use client"

import Image from "next/image";
import { useRef, useState } from "react";


export default function AccountButton() {
  const loginButton = useRef(null)
  let [user, setUser] = useState("")

  const redirectToLogin = async() => {
    loginButton.current.click()
  }
    

  return (
    <>
      <Image src={"/logout.png"} alt="" width={512} height={512} />
    </>
  )
}