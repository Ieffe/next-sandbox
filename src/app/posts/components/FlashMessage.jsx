"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./flash.module.css";
import { useEffect, useState } from "react";

const FlashMessage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  const [flashClass, setFlashClass] = useState("");

  useEffect(() => {
    switch (searchParams.get("form")) {
      case "deleted":
        setShow(true);
        setMsg("Post Deleted");
        setFlashClass(styles.flashRed);
        router.replace("/posts");
        break;
      case "submitted":
        setShow(true);
        setMsg("Post Submitted!");
        setFlashClass(styles.flashGreen);
        router.replace("/posts", undefined, { shallow: true });
        break;
    }
    setTimeout(() => setShow(false), 2000);
  }, [searchParams]);

  return (
    show &&
    <div className={`${flashClass} block`}>
      <h1>{msg}</h1>
    </div>
  );
};

export default FlashMessage;
