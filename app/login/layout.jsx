import styles from "./login.module.scss";

export default function LoginPageLayout({ children }) {
  return (
    <>
      <div className={styles.background}></div>

      <div className={styles.session}>
        <div className={styles.left}></div>
        <div className={styles.form}>
          <h1 className={styles.title}>Collège Jean de la Mennais</h1>
          {children}
        </div>
      </div>
    </>
  );
}
