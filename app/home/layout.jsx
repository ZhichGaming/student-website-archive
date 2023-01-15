import { Navbar, Banner } from "./ServerComponents"
import styles from "./home.module.scss"

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