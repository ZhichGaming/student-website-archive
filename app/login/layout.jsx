import { Suspense } from "react";
<<<<<<< HEAD
import Loading from "./loading.jsx"
=======
import Loading from "./loading.jsx";
>>>>>>> 5192a5e844ea75836fc76e357dd15114275816d3
import styles from "./login.module.scss"


export default function LoginPageLayout({ children }) {

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.session}>
        <div className={styles.left}></div>
        
        <div className={styles.form}>
          <h1 className={styles.title}>Collège Jean de la Mennais</h1>
            { children }
        </div>
      </div>
    </Suspense>
  )
}