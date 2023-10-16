"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ContentsPerPageSelector = () => {
  const router = useRouter();
  const [contentsPerPage, setContentsPerPage] = useState('');
  const searchParams = useSearchParams()
  const pathName = usePathname()

  console.log(pathName)
  const changeContentsperPage = (e) => {
    setContentsPerPage(e.target.value);
  };

  useEffect(() => {
    if (contentsPerPage) {
      router.replace(`${pathName}?contents=${contentsPerPage}&page=1`); 
      //querying the data manually is kinda crude, but it'll work for now
    }
  }, [contentsPerPage, pathName]);

  return (
    <>
      <select
        onChange={changeContentsperPage}
        className="bg-black text-white border-2 rounded-md p-2"
      >
        <option selected={true} disabled={true}>Select value</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </>
  );
};

export default ContentsPerPageSelector;
