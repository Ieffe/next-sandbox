import Navbar from "../ui/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-start justify-start p-12 lg:p-24 basis-[calc(100vh-8.25rem)]">
        {children}
      </main>
    </>
  );
};

export default MainLayout;
