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
                This is a Sandbox made with next.js, all basic demonstration are described in the Navbar!
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
      </MainLayout>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
      </main> */}
    </>
  );
}
