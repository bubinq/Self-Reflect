import styles from "./RegisterPage.module.css";
import { Header } from "../components/Header";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const [focused, setFocused] = useState({
    email: false,
    pass: false,
    repass: false,
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
    <div className={styles.registerWrapper}>
      <Header></Header>
      <div className={styles.registerPanel}>
        <div className={styles.registerContent}>
          <h3 className={styles.heading}>Sign Up</h3>
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
            <div className={styles.passwordWrapper}>
              <label
                className={
                  focused.repass ? styles.labelsFocused : styles.labelsIdle
                }
                htmlFor="repass"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="repass"
                name="repass"
                onFocus={focusAndBlur}
                onBlur={focusAndBlur}
              ></input>
            </div>
            <button className={styles.registerBtn} type="submit">
              Create Account
            </button>
            <div className={styles.create}>
              <Link to={"/login"} className={styles.text}>Have an account? <br></br>Log In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
