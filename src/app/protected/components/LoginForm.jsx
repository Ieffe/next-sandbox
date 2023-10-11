"use client";

import { useEffect, useState } from "react";
import styles from "./form.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { setCookie, getCookie } from "cookies-next";
// import Cookies from 'js-cookie';

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const route = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      {
        errMsg && <p>{errMsg}</p>;
      }
      const resp = await axios.post(`https://dummyjson.com/auth/login`, {
        username: user,
        password: password,
      });
      setCookie("token", resp.data);
      route.replace("/protected/dashboard");
      route.refresh()
    } catch (error) {
      const msg = error.response.data.message;
      console.log(msg);
        setErrMsg(msg);
    }
  };

  return (
    <form onSubmit={handleLogin} className={styles.form} action="">
      <h1 className={styles.header}> Login Form</h1>
      {errMsg && <p className={styles.invalid}>{errMsg}</p>}

      <input
        className={styles.input}
        type="text"
        placeholder="Insert Username"
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        className={styles.input}
        type="password"
        placeholder="Insert Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.button} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
