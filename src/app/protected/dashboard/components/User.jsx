'use client'

const { useRouter } = require("next/navigation");
import axios from "axios";
import { getCookie } from "cookies-next";

const User = () => {
    const router = useRouter()
    const token = getCookie('token')
    console.log(token)
    if(!token){
        router.push('/protected')
    }
  return (
    <>
      <h1>Token: {token} </h1>
    </>
  );
};

export default User;
