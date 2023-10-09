"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./flash.module.css";
import { useEffect, useState } from "react";

const FlashMessage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (searchParams.get("form") === "submitted") {
      setShow(true);
      setMsg("Post Submitted!");
      router.replace("/posts", undefined, { shallow: true });
      setTimeout(() => setShow(false), 2000)
    }
  }, [router.query]);

  return (
    <div className={`${styles.flashGreen} ${show ? "block" : "hidden"}`}>
      <h1>{msg}</h1>
    </div>
  );
};

export default FlashMessage;
