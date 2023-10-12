import Navbar from "@/components/ui/Navbar";
import { Providers } from '@/redux/provider'

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main className="flex flex-col items-start justify-start p-12 lg:p-24 basis-[calc(100vh-8.25rem)]">
         <Providers>{children}</Providers> {/*redux only applied within this layout */}
      </main>
    </>
  );
};

export default MainLayout;
