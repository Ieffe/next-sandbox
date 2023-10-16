import Navbar from "@/components/ui/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main className="flex flex-col items-start justify-start p-12 lg:px-24 lg:py-12 basis-[calc(100vh-8.25rem)]">
        {children}
      </main>
    </>
  );
};
export default Layout;
