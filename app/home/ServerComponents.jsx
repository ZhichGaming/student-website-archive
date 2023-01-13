import Image from "next/image"
import AccountButton from "./AccountButton"

function Banner({ styles }) {
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

function NavBar({ styles }) {
  return (
    <nav className={styles.navBar}>
      <div>Lorem, ipsum dolor.</div>
      <div>Eaque, natus inventore.</div>
      <div>Magnam, eos doloremque?</div>
    </nav>
  )
}

export { Banner, NavBar}