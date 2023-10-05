import MainLayout from "@/components/layouts/MainLayout";
import axios from "axios";
import PostWrapper from "./components/PostWrapper";
import { notFound } from "next/navigation";
import DeleteConfirm from "./components/DeletePopUp";

export const metadata = {
  title: "The New Page - Our Articles!",
};

const Posts = async () => {
  try {
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
            {Object.keys(datas).length === 0 ? (
              <h2>THERE IS NO DATA!! TRY TO FILL ONE!</h2>
            ) : (
              datas.map((data) => (
                // </div>
                <PostWrapper
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  body={data.body}
                />
              ))
            )}
          </div>
        </MainLayout>
      </>
    );
  } catch (error) {
    notFound();
  }
};

export default Posts;
