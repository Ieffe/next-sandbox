import Link from "next/link";
import LoginForm from "./components/LoginForm";
import styles from "./form.module.css";
import { cookies } from 'next/headers'

const Page = () => {
    
  return (
    <>
      <div className="mb-5">
        <h1 className="font-bold text-3xl mb-4">Protected Page </h1>
        <p>
          This is a authentication-based route. The dummy data used in this page
          will be provided from{" "}
          <Link
            href={"https://dummyjson.com/"}
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            <span className={styles.span}>dummyjson.com</span>
          </Link>
          .
        </p>
        <p>
          Please login in the form below with username{" "}
          <span className={styles.span}>kminchelle</span> and password{" "}
          <span className={styles.span}>0lelplR</span>
        </p>
      </div>

      <LoginForm></LoginForm>
    </>
  );
};

export default Page;
