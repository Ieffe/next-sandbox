import MainLayout from "@/components/layouts/MainLayout";
import RootLayout from "../layout";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import PostWrapper from "./components/PostWrapper";
import DeleteConfirm from "./components/DeleteModal";

export const metadata = {
  title: "The New Page - Our Articles!",
};



const Posts = async () => {
  const api = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const datas = api.data; 

  const deletePost = async (id) => {
    await axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => console.log(resp))
      .then(() => handleClose())
      .then(() => console.log("Post deleted succesfully!"))
      .then(() => router.refresh())
      .catch((error) => console.log(error));
  };

  const searchDeleteId = (id) => {
    const search = datas.findIndex((data) => data.id==id)
    return{ 
      id: search.id,
      title: search.title,
      show: true
    }
  }



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
          {
            Object.keys(datas).length === 0 ?  <h2>THERE IS NO DATA!! TRY TO FILL ONE!</h2> : 
            datas.map((data) => (
              // </div>
              <PostWrapper 
                // key={data.id}
                id={data.id}
                title={data.title}
                body={data.body}
              />
            )) 
          }
          
        </div>
      </MainLayout>
    </>
  );
};

export default Posts;
