"use client";

import { useEffect, useState } from "react";
import styles from "../form.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
// import {setCookie, getCookie} from 'cookies-next'
import Cookies from 'js-cookie';

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter()

  const handleLogin = async (e) => {
    
    e.preventDefault();
    try {

     const resp = await axios.post(`https://dummyjson.com/auth/login`, {
        username: user,
        password: password,
      });
      
      Cookies.set('token', resp.data.token)
      const token = Cookies.get('token')
      console.log('login success, your current token is: '+ token)
      route.push('/protected/dashboard')

    } catch (error) {
        console.error('login failed')
    }
  };

 

  return (
    <form onSubmit={handleLogin} className={styles.form} action="">
      <h1 className={styles.header}> Login Form</h1>
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
