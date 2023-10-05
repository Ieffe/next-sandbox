import MainLayout from "@/components/layouts/MainLayout";
import axios from "axios";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function getStaticParams() {
  const api = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const datas = api.data;

  return datas.map((data) => ({
    id: data._id,
  }));
}

export async function generateMetadata({ params }) {
  try {
    const api = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const title = api.data.title;
    return {
      title: title,
    };
  } catch (error) {
    return {
      title: "Data not found!",
    };
  }
}

const Page = async ({ params }) => {
  try {
    const api = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const data = api.data;
    return (
      <MainLayout>
        <Image
          src={"/placeholder.png"}
          width={1000}
          height={1000}
          className="fill-white bg-white rounded-md object-cover w-full h-64"
          alt="name"
        />
        <h1 className="self-center md:self-start font-bold capitalize text-4xl my-10">
          {data.title}
        </h1>

        <p className="self-start">{data.body}</p>
      </MainLayout>
    );
  } catch (error) {
    notFound();
  }
};

export default Page;
