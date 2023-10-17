import axios from "axios";
import { cookies } from "next/headers";

export async function generateStaticParams() {
  const api = await axios.get("https://dummyjson.com/products?limit=100");
  const datas = api.data.products;

  return datas.map((data) => ({ id: data.id.toString() }));
}

const Page = async ({ params }) => {
  const cookieStore = cookies();
  const token = JSON.parse(cookieStore.get("token").value);

  const api = await axios.get(`https://dummyjson.com/auth/products/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });

  const data = api.data

  return (
    <>
      <p>{data.title}</p>
    </>
  );
};

export default Page;
