import styles from "./home.module.scss"
import AccountButton from "./AccountButton"
import Image from "next/image"

export default function HomeLayout({ children }) {
  return (
    <>
      <Banner styles={styles} />
      <main className={`${styles["flex-row"]}`}>
        <Navbar styles={styles}/>
        <div className={styles.page}>
          { children }
        </div>
      </main>
    </>
  )
}

function Banner({ styles }) {
  const today = new Date().toLocaleDateString("fr-FR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).split(" ")
  today[0] = today[0][0].toUpperCase() + today[0].substring(1)

  return (
    <div className={`${styles["banner"]}`}>
      <ul>
        <li>
          {`${today[0]}, Le ${today[1]} ${today[2]} ${today[3]}`}
        </li>
        <li>
          <Image className={styles["logo-image"]} src="/jdlm-logo.png" alt="" width={930} height={347} priority />
        </li>
        <li className="disconnect">
          <AccountButton />
        </li>
      </ul>
    </div>
  )
}

function Navbar({ styles }) {
  const theme = "darkmode"
  return (
    <nav className={styles.navbar}>
      <div><Image src={`/navicon/${theme}/fi-rr-home.svg`} alt="" height={50} width={50} className={styles["nav-icon"]} /></div>
      <div><Image src={`/navicon/${theme}/fi-rr-envelope.svg`} alt="" height={50} width={50} className={styles["nav-icon"]} /></div>
      <div><Image src={`/navicon/${theme}/fi-rr-book.svg`} alt="" height={50} width={50} className={styles["nav-icon"]} /></div>
      <div><Image src={`/navicon/${theme}/fi-rr-grades.svg`} alt="" height={50} width={50} className={styles["nav-icon"]} /></div>
      <div><Image src={`/navicon/${theme}/fi-rr-home.svg`} alt="" height={50} width={50} className={styles["nav-icon"]} /></div>
    </nav>
  )
}