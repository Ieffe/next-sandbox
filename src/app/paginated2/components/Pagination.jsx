import Link from "next/link";

const Pagination = (props) => {
  const iterablePageValue = Array.from(
    { length: Math.ceil(props.datasAmount / props.contentsPerPage)  },
    (_, index) => index + 1
  );
  const currentPage = props.currentPage;
  return (
    <div className="flex flex-wrap flex-row justify-center items-center self-center mt-4">
      {currentPage == 1 ? (
        ""
      ) : (
        <span className=" border-l border-r border-y  p-3 rounded-l-lg">
          <Link href={`/${props.params}?contents=${props.contentsPerPage}&page=${props.currentPage-1}`}> {"<"} </Link>
        </span>
      )}
      {iterablePageValue.map((i) => (
        <span
          className={` ${currentPage == i ? "bg-white text-black font-bold" : ""} border-y p-3 border-r border-collapse `}
          key={i}
        >
          {currentPage == i ? (
            i
          ) : (
            <Link href={`/${props.params}?contents=${props.contentsPerPage}&page=${i}`}>{i}</Link>
          )}
        </span>
      ))}
      {currentPage == props.lastPage ? (
        ""
      ) : (
        <span className="border-r p-3 border-y border-collapse rounded-r-lg">
          <Link href={`/${props.params}?contents=${props.contentsPerPage}&page=${parseInt(props.currentPage) + 1}`}> {">"} </Link>
        </span>
      )}
    </div>
  );
};

export default Pagination;
