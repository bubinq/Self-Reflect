import styles from "./LoginPage.module.css";
import { Header } from "../components/Header";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [focused, setFocused] = useState({
    email: false,
    pass: false,
  });

  function focusAndBlur(ev: React.BaseSyntheticEvent) {
    let input = ev.target;
    if (input.value.trim() !== "") {
      setFocused((oldVal) => ({ ...oldVal, [input.name]: true }));
      return;
    }
    setFocused((oldVal) => ({
      ...oldVal,
      [input.name]: !focused[input.name as keyof typeof focused],
    }));
  }

  return (
    <div className={styles.loginWrapper}>
      <Header></Header>
      <div className={styles.loginPanel}>
        <div className={styles.loginContent}>
          <h3 className={styles.heading}>Sign In</h3>
          <form>
            <div className={styles.emailWrapper}>
              <label
                className={
                  focused.email ? styles.labelsFocused : styles.labelsIdle
                }
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                onFocus={focusAndBlur}
                onBlur={focusAndBlur}
              ></input>
            </div>
            <div className={styles.passwordWrapper}>
              <label
                className={
                  focused.pass ? styles.labelsFocused : styles.labelsIdle
                }
                htmlFor="pass"
              >
                Password
              </label>
              <input
                type="password"
                id="pass"
                name="pass"
                onFocus={focusAndBlur}
                onBlur={focusAndBlur}
              ></input>
            </div>
            <button className={styles.loginBtn} type="submit">
              Log in
            </button>
            <div className={styles.create}>
              <Link to={"/register"} className={styles.text}>Create Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};