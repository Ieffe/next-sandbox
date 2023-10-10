"use client";

const { useRouter } = require("next/navigation");
import axios from "axios";
import { getCookie } from "cookies-next";
import Cookies from "js-cookie";
import { useEffect } from "react";

const User = () => {
  const token = Cookies.get("token");
  console.log(token)
  useEffect(() => {
    if (!token) {
      router.push("/protected");
    }
  });

  return (
    <>
      <h1>Token: {token} </h1>
    </>
  );
};

export default User;
