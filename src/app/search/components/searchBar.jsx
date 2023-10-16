"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    router.replace(pathName + "?" + createQueryString('search', keyword));
  };

  return (
    <div className="flex flex-row mb-3">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search something here ..."
          className="input"
          type="text"
          name=""
          id=""
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
