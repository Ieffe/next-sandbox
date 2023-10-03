import MainLayout from "@/components/layouts/MainLayout";
import PostForm from "./components/AddForm";

const Add = () => {
  return (
    <>
      <MainLayout>
        <h1 className="self-start my-5 text-3xl font-bold">Add New Post</h1>
        <PostForm/>
      </MainLayout>
    </>
  );
};

export default Add;
