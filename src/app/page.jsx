import MainLayout from "@/components/layouts/MainLayout";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MainLayout>
        {/* jumbotron */}
        <div className="mr-auto flex flex-row items-center">
          <div className="mr-12">
            <div className="mb-6">
              <h3 className="font-bold text-3xl">Welcome to my Sandbox</h3>
              <p>
                This is a Sandbox
              </p>
            </div>
            <Link href={"/posts"}>
              <button className="px-3 py-1 border-white border-2 rounded hover:bg-white hover:text-black">
                See our Posts!
              </button>
            </Link>
          </div>
          <div>
            <Image
              src="/next.svg"
              width={1000}
              height={200}
              className="bg-white fill-white"
              alt="cleaning some console error"
            />
          </div>
        </div>
        {/* post lists in main page */}
        <div className="mb-auto mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold inline px-4 py-2">Our stuffs</h2>
          </div>
          {/* posts item container */}
          <div className="flex flex-wrap justify-evenly flex-row gap-x-5 gap-y-3">
            {/* singular post item */}
            <div className="basis-1/6 p-4 border-white border-2 rounded-lg">
              <Image
                src={"/placeholder.png"}
                width={250}
                height={250}
                className="fill-white bg-white rounded-lg"
                alt={"Cleaning the Console pop-up"}
              />
              <div className="mt-3">
                <h2 className="font-bold text-2xl">Title</h2>
                <p className="line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis velit dicta id harum atque distinctio ea facere
                  fugit rem amet architecto maiores reiciendis, ipsa, quibusdam
                  natus quidem maxime odio ut?
                </p>
              </div>
              <Link href={"/posts"}>
                <button className="px-3 py-1 mt-4 font-bold border-white border-2 rounded hover:bg-white hover:text-black">
                  See more ...
                </button>
              </Link>
            </div>
            <div className="basis-1/6 p-4 border-white border-2 rounded-lg">
              <Image
                src={"/placeholder.png"}
                width={250}
                height={250}
                className="fill-white bg-white rounded-lg"
                alt={"Cleaning the Console pop-up"}
              />
              <div className="mt-3">
                <h2 className="font-bold text-2xl">Title</h2>
                <p className="line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis velit dicta id harum atque distinctio ea facere
                  fugit rem amet architecto maiores reiciendis, ipsa, quibusdam
                  natus quidem maxime odio ut?
                </p>
              </div>
              <Link href={"/posts"}>
                <button className="px-3 py-1 mt-4 font-bold border-white border-2 rounded hover:bg-white hover:text-black">
                  See more ...
                </button>
              </Link>
            </div>
            <div className="basis-1/6 p-4 border-white border-2 rounded-lg">
              <Image
                src={"/placeholder.png"}
                width={250}
                height={250}
                className="fill-white bg-white rounded-lg"
                alt={"Cleaning the Console pop-up"}
              />
              <div className="mt-3">
                <h2 className="font-bold text-2xl">Title</h2>
                <p className="line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis velit dicta id harum atque distinctio ea facere
                  fugit rem amet architecto maiores reiciendis, ipsa, quibusdam
                  natus quidem maxime odio ut?
                </p>
              </div>
              <Link href={"/posts"}>
                <button className="px-3 py-1 mt-4 font-bold border-white border-2 rounded hover:bg-white hover:text-black">
                  See more ...
                </button>
              </Link>
            </div>
            <div className="basis-1/6 p-4 border-white border-2 rounded-lg">
              <Image
                src={"/placeholder.png"}
                width={250}
                height={250}
                className="fill-white bg-white rounded-lg"
                alt={"Cleaning the Console pop-up"}
              />
              <div className="mt-3">
                <h2 className="font-bold text-2xl">Title</h2>
                <p className="line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis velit dicta id harum atque distinctio ea facere
                  fugit rem amet architecto maiores reiciendis, ipsa, quibusdam
                  natus quidem maxime odio ut?
                </p>
              </div>
              <Link href={"/posts"}>
                <button className="px-3 py-1 mt-4 font-bold border-white border-2 rounded hover:bg-white hover:text-black">
                  See more ...
                </button>
              </Link>
            </div>
            <div className="basis-1/6 p-4 border-white border-2 rounded-lg">
              <Image
                src={"/placeholder.png"}
                width={250}
                height={250}
                className="fill-white bg-white rounded-lg"
                alt={"Cleaning the Console pop-up"}
              />
              <div className="mt-3">
                <h2 className="font-bold text-2xl">Title</h2>
                <p className="line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis velit dicta id harum atque distinctio ea facere
                  fugit rem amet architecto maiores reiciendis, ipsa, quibusdam
                  natus quidem maxime odio ut?
                </p>
              </div>
              <Link href={"/posts"}>
                <button className="px-3 py-1 mt-4 font-bold border-white border-2 rounded hover:bg-white hover:text-black">
                  See more ...
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link href={"/posts"}>
              <button className="px-5 py-3 text-2xl font-bold border-white border-2 rounded hover:bg-white hover:text-black">
                See more Posts
              </button>
            </Link>
          </div>
        </div>
      </MainLayout>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
      </main> */}
    </>
  );
}
