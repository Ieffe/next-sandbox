import axios from "axios";
import { Suspense } from "react";
import Image from "next/image";
import Pagination from "./components/Pagination";
import ContentsPerPageSelector from "./components/ContentsPerPageSelector";

const Page = async ({ searchParams }) => {
  const [contents, page] = [searchParams?.contents, searchParams?.page];
  let [limit, skip] = [100, 0];

  console.log(contents + " " + page);

  if (Object.keys(searchParams).length) {
    limit = searchParams?.contents;
    skip = (searchParams?.page - 1) * searchParams.contents;
  }

  const api = await axios.get(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    //fetch everything at once
  );
  const datas = api.data.products;
  return (
    <>
      <p className="font-bold mb-3">Query-based pagination</p>
      <div className="flex flex-row mb-3 items-center">
        <p className="mr-2">Contents per Page</p>
        <ContentsPerPageSelector></ContentsPerPageSelector>
      </div>

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
                <h1 className="font-bold text-center">
                  {data.title.toUpperCase()}
                </h1>
              </div>
              <div className="flex flex-row justify-between w-full mb-2 items-center">
                <span className="bg-white text-black font-bold rounded-full px-3 py-1">
                  ${data.price}
                </span>
                <span>else</span>
              </div>
            </div>
          ))}
        </div>
      </Suspense>
      {!contents & !page ? (
        ""
      ) : (
        <Pagination
          datasAmount={100}
          contentsPerPage={contents}
          params={"paginated2"}
          currentPage={page}
          lastPage={Math.ceil(100 / contents)}
        />
      )}
    </>
  );
};

export default Page;
