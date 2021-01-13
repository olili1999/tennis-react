import styles from "./Login.module.css";
import React, { useContext, useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";
import { LoggedContext } from "../contexts/LoggedContext";

function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { logged, setLogged } = useContext(LoggedContext);
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      // wait for the signup to finish
      let userObj = await login(
        emailRef.current.value,
        passwordRef.current.value
      );
      setLogged(true);
      localStorage.setItem("isLoggedIn", true);

      history.push("/account");
    } catch {
      setError("Failed to log in");
      setLoading(false);
    }
  }
  return (
    <>
      <div className={styles.justifycenter}>
        <div className={styles.card}>
          <h3> Login </h3>
          {error && (
            <p
              style={{
                fontWeight: "bold",
                color: "#cc0000",
                textAlign: "center",
                padding: 0,
                margin: "20px 0 0 20px",
              }}
            >
              {" "}
              {error}{" "}
            </p>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.text_div}>
              <label htmlFor="email">E-mail</label>
              <br />
              <input ref={emailRef} type="text" id="email" name="email" />{" "}
              <br />
            </div>
            <div className={styles.text_div}>
              <label htmlFor="password">Password</label>
              <br />
              <input
                ref={passwordRef}
                type="password"
                id="password"
                name="password"
              />
              <br />
            </div>

            <div className={styles.login_button_div}>
              <input
                disabled={loading}
                className={styles.login_button}
                type="submit"
                value="Log In"
                id="login"
                name="login"
              />{" "}
              <br />
            </div>
            <div className={styles.forgot_password_div}>
              <Link
                to="/forgotpassword"
                style={{ color: "#206a5d", fontWeight: "bold" }}
              >
                {" "}
                Forgot password?{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
      {console.log(props.showSignUp)}
    </>
  );
}

export default Login;
