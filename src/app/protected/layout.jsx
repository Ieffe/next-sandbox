import Link from "next/link";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-row mx-4 sm:mx-8 md:mx-20 my-5 px-4 gap-x-2">
        <Link href={"/"} passHref>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z"
              clipRule="evenodd"
              className="shadow-lg shadow-white"
            />
          </svg>
        </Link>
        <span>Return to Main Page</span>
      </div>
      <main className="flex flex-col items-start justify-start p-12 lg:p-24 basis-[calc(100vh-8.25rem)]">
        {children}
      </main>
    </>
  );
};

export default MainLayout;
