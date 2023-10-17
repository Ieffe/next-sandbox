import { cookies } from "next/headers";
import DashboardNav from "./components/DashboardNav";
import axios from "axios";
import DeletePostButton from "./components/DeletePostButton";

const Page = async () => {
  const cookieStore = cookies();
  const token = JSON.parse(cookieStore.get("token").value);
  
  const api = await axios.get("https://dummyjson.com/auth/products?limit=150", {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });

  const posts = api.data.products;
  return (
    <>
      <DashboardNav
        name={token.firstName + " " + token.lastName}
        img={token.image}
      />
      <div className="mt-3 w-full">
        {posts.map((post) => (
          <div className="border-2 p-3 mb-3 flex flex-row items-center justify-between" key={post.id}>
            <p className="font-bold">{post.title}</p>
            <div>
              <button className="button mr-3">Edit</button>
              <DeletePostButton
              id={post.id}
              token={token.token}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
