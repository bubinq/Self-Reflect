import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Header = () => {
  const { user }: any = useContext(AuthContext);

  async function handleLogout(ev: React.BaseSyntheticEvent) {
    ev.stopPropagation();
    const confirm = window.confirm("Are you sure you want to log out?");
    if (confirm) {
      window.open("http://localhost:8000/auth/logout", "_self");
    }
  }

  return (
    <header className={styles.header}>
      <nav>
        <Link to={"/"}>
          <div className={styles.menuWrapper}>
            <div className={styles.menuDash}></div>
            <div className={styles.menuDash}></div>
            <div className={styles.menuDash}></div>
          </div>
        </Link>
        <div className={styles.authWrapper}>
          {user.displayName ? (
            <div className={styles.hasUser}>
              <div>
                <img
                  alt="Profile Icon"
                  className={styles.profilePic}
                  src={user.profilePicture}
                ></img>
              </div>
              <Link to={"/"} onClick={handleLogout}>Logout</Link>
            </div>
          ) : (
            <Link to={"/login"}>Log In</Link>
          )}
        </div>
      </nav>
    </header>
  );
};
