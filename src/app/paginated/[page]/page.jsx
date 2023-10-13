import axios from "axios";
import { notFound } from "next/navigation";
import Pagination from "../components/Pagination";
import { Suspense } from "react";
import Image from "next/image";

export async function generateStaticParams() {
  const api = await axios.get("https://dummyjson.com/products?limit=100");
  const datas = api.data;

  //since the limit inside the data is not an array, we should turn the value
  //into an iterable array
  const iterablePageValue = Array.from(
    //suppose we want to show 10 contents per page,
    //with 100 datas in total,we're getting 10 pages
    //this rule only apply in dummyjson.com, depending on what kind of format you're recieving
    //in the back-end, you have to figure how their pagination work
    //srsly, men at the backend must've paginate the datas server-side
    //THINK OF THE CLIENT'S MACHINE SCREAMING IN AGONY
    { length: Math.ceil(datas.limit / 10) },
    (_, index) => index + 1
  );

  return iterablePageValue.map((p) => ({
    page: p.toString(),
  }));
}

export async function generateMetadata({ params }) {
  if (params.page > 0 && params.page <= 10) {
    return {
      title: `Showing All Products - Page ${params.page}`,
    };
  } else {
    return {
      title: "No Content within this parameter",
    };
  }
}

const Page = async ({ params }) => {
  console.log(params);
  if (params.page > 0 && params.page <= 10) {
    const api = await axios.get(
      `https://dummyjson.com/products?limit=10&skip=${(params.page - 1) * 10}`
      //we're going to skip that amount of data to show the currently selected page
      //e.g we want to show page 20 (showing data 11 to 20)
      // we need to skip at 10 data for page 2
    );
    const datas = api.data.products;

    return (
      <>
        <p className="font-bold mb-3">
          Showing products {datas[0].id} of {datas[9].id} - page {params.page}
        </p>
        <Suspense>
          <div className=" justify-center self-center grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 grid-flow-row-dense border-white gap-3">
            {datas.map((data) => (
              <div
                className="border-2 rounded-md border-white flex flex-col px-3 items-center"
                key={data.id}
              >
                <Image
                  className="h-[200px]  w-full object-cover py-5 rounded-md"
                  src={data.thumbnail}
                  width={200}
                  height={200}
                ></Image>
                <div className="pb-3 flex flex-row items-center">
                  <h1 className="font-bold text-center">{ data.title.toUpperCase()}</h1>
                </div>
                <div className="flex flex-row justify-between w-full mb-2 items-center">
                  <span className="bg-white text-black font-bold rounded-full px-3 py-1">${data.price}</span>
                  <span>else</span>
                </div>
              </div>
            ))}
          </div>
        </Suspense>

        <Pagination
          datasAmount={100}
          contentsPerPage={10}
          params={"paginated"}
          currentPage={params.page}
          lastPage={10}
        />
      </>
    );
  } else {
    notFound();
  }
};

export default Page;
