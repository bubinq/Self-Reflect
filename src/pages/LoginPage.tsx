import styles from "./LoginPage.module.css";
import { Header } from "../components/Header";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [focused, setFocused] = useState({
    email: false,
    pass: false,
  });
  const [loginInput, setLoginInput] = useState({
    email: "",
    pass: "",
  });
  const hasInput = loginInput.email !== "" && loginInput.pass !== "";
  const isDisabled = focused.email && focused.pass;

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

  function handleInputs(ev: React.BaseSyntheticEvent) {
    setLoginInput((input) => ({ ...input, [ev.target.name]: ev.target.value }));
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
                className={styles.inputs}
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                onFocus={focusAndBlur}
                onBlur={focusAndBlur}
                onChange={handleInputs}
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
                className={styles.inputs}
                type="password"
                id="pass"
                name="pass"
                onFocus={focusAndBlur}
                onBlur={focusAndBlur}
                onChange={handleInputs}
              ></input>
            </div>
            <div className={styles.socialsWrapper}>
              <div className={styles.google}>
                <img alt="Google Icon" src="https://pixlok.com/wp-content/uploads/2021/04/Google-Icon-PNG-768x768.jpg"></img>
              </div>
              <div className={styles.meta}>
                <img alt="Meta Icon" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/meta-icon.png"></img>
              </div>
              <div className={styles.github}>
                <img alt="GitHub Icon" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
              </div>
            </div>
            <button
              className={hasInput ? styles.loginBtnActive : styles.loginBtn}
              type="submit"
              disabled={!isDisabled}
            >
              Log in
            </button>
            <div className={styles.create}>
              <Link to={"/register"} className={styles.text}>
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
