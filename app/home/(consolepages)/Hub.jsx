import Image from "next/image"
import styles from "./Hub.module.scss"

export default function Hub() {
  return (
    <>
      <div className={styles.container}>
        <Profile />
      </div>
    </>
  )
} 

function Profile() {
  return (
    <div>
      <div></div>
      <Image src="/jdlm-logo.png" alt="" height={10} width={10} />
    </div>
  )
}