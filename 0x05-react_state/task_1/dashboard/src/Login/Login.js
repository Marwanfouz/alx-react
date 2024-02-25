import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  const [isLoggedIn, setIsLoggedIn] =useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setEnableSubmit(true);
    } else {
        setEnableSubmit(false);
    }
  },[email, password])

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            className={css(styles.input)}
            type="email"
            name="email"
            onChange={handleChangeEmail}
          />
          <label htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            name="password"
            onChange={handleChangePassword}
          />
          <input type="submit" value="Ok" disabled={!enableSubmit} />
        </form>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  "App-body": {
    display: "flex",
    flexDirection: "column",
    marginBottom: "3rem",
    height: "100%",
  },

  input: {
    "@media (min-width: 350px)": {
      display: "flex",
      flexDirection: "column",
      maxWidth: "200px",
      margin: "10px 0 10px 0",
    },
    "@media (min-width: 900px)": {
      display: "flex",
      flexDirection: "row",
      margin: "10px 0 10px 0",
    },
  },
});

export default Login;