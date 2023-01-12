"use client"

import Link from "next/link"
import { useRef } from "react"
import Image from "next/image"
// import PocketBase from 'pocketbase'
import styles from "./login.module.scss"
import LoginInput from "./LoginInput"

export default function Login(res) {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const redirectButton = useRef(null)
  
  const validateCredidentials = async() => {
    // * for now, it only redirects to student console
    console.log(">>", usernameRef.current.value, passwordRef.current.value);
    // redirectButton.current.click(
  }


  return (
    <>
      <LoginInput type="Username" reference={usernameRef} styles={styles} />
      <LoginInput type="Password" reference={passwordRef} styles={styles} />
      <button type="none" className={styles.submit} onClick={validateCredidentials}>Log in</button>
      <Link href={"/student-console"} ref={redirectButton} tabIndex="-1" />
    </>
  )
}

