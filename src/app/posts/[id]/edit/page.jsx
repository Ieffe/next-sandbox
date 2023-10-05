import axios from "axios";
import EditForm from "./EditForm";
import { notFound } from "next/navigation";
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
  try {
    const api = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const data = api.data;

    return (
      <MainLayout>
        <EditForm params={data} />
      </MainLayout>
    );
  } catch (error) {
    notFound();
  }
};

export default Page;
