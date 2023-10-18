"use client";
import Image from "next/image";
import styles from "./dashNav.module.css";
import LogoutButton from "./LogoutButton";
import { useState } from "react";
import Link from "next/link";

const DashboardNav = (props) => {
  return (
    <div className="flex flex-row justify-between w-full items-center">
      <div className="flex flex-row items-center">
        <Image
          src={props.img}
          height={50}
          width={50}
          className="border-2 border-white rounded-full"
          alt="profile-picture"
        />
        <Link href={props.link}>
          <span className={styles.userHeader}>{props.name}</span>
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <LogoutButton></LogoutButton>
      </div>
    </div>
  );
};

export default DashboardNav;
