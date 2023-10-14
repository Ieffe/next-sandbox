import axios from "axios";
import Image from "next/image";

export async function generateStaticParams() {
  const api = await axios.get("https://dummyjson.com/products?limit=100");
  const datas = api.data;

  return datas.products.map((data) => ({
    id: data.id.toString(),
  }));
}

const Page = async ({ params }) => {
  const api = await axios.get(`https://dummyjson.com/products/${params.id}`);
  const data = api.data;
  return ( 
    <>
      <p>{data.title}</p>
      {data.images.map((i) => (
        <Image src={i} width={200} height={200} />
      ))}
    </>
  );
};

export default Page;
