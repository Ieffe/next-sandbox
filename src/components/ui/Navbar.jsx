"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import {  } from '@heroicons/react/24/solid'

const Navbar = () => {
  const currentRoute = usePathname();
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="mx-4 sm:mx-8 md:mx-20 my-5 p-4 sticky top-0 bg-black">
        <ul className="list-style-none flex items-center justify-between">
          <div className="flex items-center">
            <div className="inline mr-4">
              <li>
                <Link href={"/"}>
                  <Image
                    src="/next.svg"
                    width={100}
                    height={50}
                    className="fill-white bg-white p-2"
                    alt="navbar logo"
                  />
                </Link>
              </li>
            </div>
            <div className="hidden sm:block">
              <li className="inline mr-4 text-xl">
                <Link href={"/"}>
                  <button
                    className={
                      currentRoute === "/"
                        ? "font-bold bg-white text-black px-2 rounded-md"
                        : "inline text-xl"
                    }
                  >
                    Home
                  </button>
                </Link>
              </li>
              <li className="inline mr-4 text-xl">
                <Link href={"/posts"}>
                  <button
                    className={
                      currentRoute === "/posts"
                        ? "font-bold bg-white text-black px-2 rounded-md"
                        : "inline text-xl"
                    }
                  >
                    Posts
                  </button>
                </Link>
              </li>
              <li className="inline mr-4 text-xl">
                <Link href={"/about"}>
                  <button
                    className={
                      currentRoute === "/about"
                        ? "font-bold bg-white text-black px-2 rounded-md"
                        : "inline text-xl"
                    }
                  >
                    About
                  </button>
                </Link>
              </li>
              <li className="inline mr-4 text-xl">
                <Link href={"/add"}>
                  <button
                    className={
                      currentRoute === "/add"
                        ? "font-bold bg-white text-black px-2 rounded-md"
                        : "inline text-xl"
                    }
                  >
                    Add New Post
                  </button>
                </Link>
              </li>
            </div>
          </div>

          <div className="block md:hidden">
            <button onClick={() => setToggle(!toggle)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </ul>
      </nav>
      <nav className={`${toggle ? "sticky top-[3.25rem]" : "hidden"} `}>
        <ul className="flex flex-col  bg-black">
          <li
            className={`${
              currentRoute === "/"
                ? "font-bold bg-white text-black px-2"
                : "inline text-xl"
            } inline text-xl pl-4`}
          >
            <Link href={"/"}>
              <button>Home</button>
            </Link>
          </li>
          <li
            className={`${
              currentRoute === "/posts"
                ? "font-bold bg-white text-black px-2"
                : "inline text-xl"
            } inline text-xl pl-4`}
          >
            <Link href={"/posts"}>
              <button>Posts</button>
            </Link>
          </li>
          <li
            className={`${
              currentRoute === "/about"
                ? "font-bold bg-white text-black px-2"
                : "inline text-xl"
            } inline text-xl pl-4`}
          >
            <Link href={"/about"}>
              <button>About</button>
            </Link>
          </li>
          <li
            className={`${
              currentRoute === "/add"
                ? "font-bold bg-white text-black px-2"
                : "inline text-xl"
            } inline text-xl pl-4`}
          >
            <Link href={"/add"}>
              <button>Add New Post</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
