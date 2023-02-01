import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.menuWrapper}>
          <div className={styles.menuDash}></div>
          <div className={styles.menuDash}></div>
          <div className={styles.menuDash}></div>
        </div>
        <div className={styles.authWrapper}>
          <Link to={"/login"}>Log In</Link>
        </div>
      </nav>
    </header>
  );
};
