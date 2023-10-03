import MainLayout from "@/components/layouts/MainLayout";
import RootLayout from "../layout";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import PostWrapper from "./components/PostWrapper";

export const metadata = {
  title: "The New Page - Our Articles!",
};



const Posts = async () => {
  const api = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const datas = api.data;

  return (
    <>
      <MainLayout>
        {/* title container */}
        <div className="self-start font-bold text-3xl">
          <h1>Our best articles to date!</h1>
        </div>
        {/* articles item container */}
        <div className="flex flex-row flex-wrap mt-16 self-start gap-0 justify-between">
          {/* single item */}
          {datas.map((data) => (
            // <div key={data.id} className="basis-1/2 p-4">
            //   <Image
            //     src={"/placeholder.png"}
            //     width={300}
            //     height={300}
            //     className="fill-white bg-white rounded-md object-cover w-full h-48"
            //     alt="name"
            //   />
            //   <h1 className="line-clamp-1 font-bold text-xl mt-3 capitalize">{data.title}</h1>
            //   <p className="line-clamp-2">
            //     {data.body}
            //   </p>
            //   <Link href={`/posts/${data.id}`} >
            //     <button className="px-3 py-1 mt-4 font-bold border-white border-2 rounded hover:bg-white hover:text-black mr-3">
            //       Read Now!
            //     </button>
            //   </Link>
            //   <Link href={`/posts/${data.id}/edit`} >
            //     <button className="px-3 py-1 mt-4 font-bold border-white border-2 rounded hover:bg-white hover:text-black mr-3">
            //       Edit this Post!
            //     </button>
            //   </Link>
            //   <Link href={`/posts/${data.id}/edit`} >
            //     <button className="px-3 py-1 mt-4 font-bold border-white border-2 rounded hover:bg-white hover:text-black mr-3">
            //       Delete this Post!
            //     </button>
            //   </Link>
            // </div>
            <PostWrapper 
              key={data.id}
              id={data.id}
              title={data.title}
              body={data.body}
            />
          ))}
        </div>
      </MainLayout>
    </>
  );
};

export default Posts;
