import styles from "./RegisterPage.module.css";
import { Header } from "../components/Header";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ErrorMessage } from "../components/ErrorMessage";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const { setUser } = useContext(AuthContext);
  const [focused, setFocused] = useState({
    email: false,
    pass: false,
    repass: false,
  });

  const [registerInputs, setRegisterInputs] = useState({
    email: "",
    pass: "",
    repass: "",
  });

  const [error, setError] = useState("");

  const navigateTo = useNavigate();
  const isDisabled = focused.email && focused.pass && focused.repass;

  const hasInputs =
    registerInputs.email !== "" &&
    registerInputs.pass !== "" &&
    registerInputs.repass !== "";

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
    setRegisterInputs((input) => ({
      ...input,
      [ev.target.name]: ev.target.value,
    }));
  }

  async function handleSubmit(ev: React.BaseSyntheticEvent) {
    ev.preventDefault();
    try {
      const data = await axios.post(
        "http://localhost:8000/auth/register",
        {
          email: registerInputs.email.trim(),
          password: registerInputs.pass.trim(),
          repass: registerInputs.repass.trim(),
        },
        { withCredentials: true }
      );
      setUser(data.data);
      setError("");
      navigateTo("/", { replace: true });
    } catch (err: any) {
      setError(err.response.data.message);
    }
  }

  return (
    <div className={styles.registerWrapper}>
      <Header></Header>
      <div className={styles.registerPanel}>
        <div className={styles.registerContent}>
          <h3 className={styles.heading}>Sign Up</h3>
          {error !== "" && <ErrorMessage message={error}></ErrorMessage>}
          <form onSubmit={handleSubmit}>
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
                className={styles.inputs}
                type="password"
                id="repass"
                name="repass"
                onFocus={focusAndBlur}
                onBlur={focusAndBlur}
                onChange={handleInputs}
              ></input>
            </div>
            <button
              className={
                !hasInputs ? styles.registerBtn : styles.registerBtnActive
              }
              type="submit"
              disabled={!isDisabled}
            >
              Create Account
            </button>
            <div className={styles.create}>
              <Link to={"/login"} className={styles.text}>
                Have an account? <br></br>Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
