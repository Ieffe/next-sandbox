"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentRoute = usePathname();
  return (
    <nav className="mx-20 my-5 p-4 sticky top-0 bg-black">
      <ul className="list-style-none flex items-center">
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
        <div>
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
      </ul>
    </nav>
  );
};

export default Navbar;
