import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input className={css(styles.input)} type="email" name="email"></input>
          <label htmlFor="password">Password:</label>
          <input className={css(styles.input)} type="password" name="password"></input>
          <button>OK</button>
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