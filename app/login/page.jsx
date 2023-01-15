"use client"

import { useRef } from "react"
import { useRouter } from 'next/navigation';
import styles from "./login.module.scss"
import LoginInput from "./LoginInput"

export default function Login() {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const router = useRouter()
  
  const validateCredidentials = async(e) => {
    // * for now, it only redirects to student console
    // console.log(">>", usernameRef.current.value, passwordRef.current.value);
    router.push("/home")
  }


  return (
    <>
      <LoginInput type="Username" ref={usernameRef} styles={styles} />
      <LoginInput type="Password" ref={passwordRef} styles={styles} />
      <button type="submit" className={styles.submit} onClick={validateCredidentials}>Log in</button>
    </>
  )
}

