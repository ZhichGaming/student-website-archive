import Image from "next/image"
import AccountButton from "./AccountButton"
import styles from "./Banner.module.scss"

export default function Banner() {
  return (
    <div className={styles.banner}>
      <ul>
        <li>
          <Image className={styles.logoImage} src="/jdlm-logo.png" alt="" width={930} height={347} priority />
        </li>
        <li className="disconnect">
          <AccountButton />
        </li>
      </ul>
    </div>
  )
}