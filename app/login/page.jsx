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
    // const pb = new PocketBase('https://pocketbase.io')
    // const authData = await pb.collection('users').authWithPassword('YOUR_USERNAME_OR_EMAIL', '1234567890')

    // * for now, it only redirects to student console
    redirectButton.current.click()
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

