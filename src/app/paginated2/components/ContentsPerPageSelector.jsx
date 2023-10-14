"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ContentsPerPageSelector = () => {
  const router = useRouter();
  const [contentsPerPage, setContentsPerPage] = useState('');

  const changeContentsperPage = (e) => {
    setContentsPerPage(e.target.value);
  };

  useEffect(() => {
    if (contentsPerPage) {
      router.replace(`/paginated2?contents=${contentsPerPage}&page=1`);
    }
  }, [contentsPerPage]);

  return (
    <>
      <select
        onChange={changeContentsperPage}
        className="bg-black text-white border-2 rounded-md p-2"
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </>
  );
};

export default ContentsPerPageSelector;
