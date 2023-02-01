import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <div className={styles.loginWrapper}>
      <h1>Login Page</h1>
      <div className={styles.loginPanel}>
        <form>
          <div className={styles.emailWrapper}>
            <label htmlFor="email"></label>
            <input type="email" id="email" placeholder="E-mail"></input>
          </div>
          <div className={styles.passwordWrapper}>
            <label htmlFor="pass"></label>
            <input type="password" id="pass" placeholder="Password"></input>
          </div>
          <button className={styles.loginBtn} type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};
