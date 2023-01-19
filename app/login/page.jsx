"use client"

import { useRef, forwardRef } from "react"
import { useRouter } from 'next/navigation';
import styles from "./login.module.scss"
import Image from "next/image"

export default function Login() {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const router = useRouter()
  
  const fetchData = async() => {
    const res = await fetch("/api/login", {
      method: "GET",
      cache: "no-store"
    })
    return res.text()
  }

  const validateCredidentials = async() => {
    // * for now, it only redirects to student console
    const res = await fetchData()
    console.log(res);
    // console.log(">", usernameRef.current.value, passwordRef.current.value);
    // router.push("/home")
  }


  return (
    <>
      <LoginInput type="Username" ref={usernameRef} styles={styles} />
      <LoginInput type="Password" ref={passwordRef} styles={styles} />
      <button type="submit" className={styles.submit} onClick={validateCredidentials}>Log in</button>
    </>
  )
}



/**
 * @param {{ type: string, reference: React useRef, styles: styles.module}} props
 * @returns React.Component
 */
LoginInput = forwardRef(LoginInput);
function LoginInput(props, ref) {
  return (
    <div className={props.styles.floatingLabel}>
      <input
        placeholder={props.type}
        type={props.type}
        name={props.type}
        autoComplete="off"
        ref={ref}
        className={props.styles.input}
        required
      />
      <label htmlFor={props.type}>{props.type}</label>
      <div className={props.styles.icon}>
        <Image src={`/login/${props.type.toLowerCase()}.png`} alt="" width="30" height="30" className={props.styles.image} />
        {/* <a href="https://www.flaticon.com/free-icons/key" title="key icons">Key icons created by Tempo_doloe - Flaticon</a> */}
      </div>
    </div>
  )
}

