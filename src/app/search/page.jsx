import axios from "axios";
import { Suspense } from "react";
import Image from "next/image";
import SearchBar from "./components/searchBar";

const Page = async ({ searchParams }) => {
  const api = await axios.get(
    `https://dummyjson.com/products?limit=100`
    //fetch everything at once, since current api doesnt support back end serach params
    //sorry for the performance issue :(
  );
  const datas = api.data.products;



  const keyword = searchParams?.search
  const searchPattern = new RegExp(keyword, 'i'); 
  // Make new regex value based on current searchparams

  // Use Array.filter() for returning specific value for client
  const results = datas.filter((item) => {
    // Convert the object's values to an array and use some() to check if any property matches the regex
    return Object.values(item).some((value) => searchPattern.test(value));
  });

  return (
    <>
      <div className="mb-3">
        <h1 className="font-bold mb-3 text-xl">Searchbar Demo</h1>
      </div>
      <div>
        <SearchBar></SearchBar>
      </div>
      <Suspense>
        <div className=" justify-center self-center grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 grid-flow-row-dense border-white gap-3">
          {results.map((data) => (
            <div
              className="border-2 rounded-md border-white flex flex-col px-3 items-center"
              key={data.id}
            >
              <Image
                className="h-[200px]  w-full object-cover py-5 rounded-md"
                src={data.thumbnail}
                width={200}
                height={200}
                alt={data.title}
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
    </>
  );
};

export default Page;
