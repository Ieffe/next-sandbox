import axios from "axios";
import EditForm from "./EditForm";
import MainLayout from "@/components/layouts/MainLayout";

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
      title: "No page to be edited!",
    };
  }
}

const Page = async ({ params }) => {
  const api = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = api.data;

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Edit this post</h1>
      <EditForm params={data} />
    </MainLayout>
  );
};

export default Page;
