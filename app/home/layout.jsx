import { NavBar, Banner } from "./ServerComponents"
import styles from "./home.module.scss"

export default function HomeLayout({ children }) {
  return (
    <div className={styles.grid}>
      <Banner styles={styles} />
      <NavBar styles={styles}/>
      <div className={styles.page}>
        { children }
      </div>
    </div>
  )
}