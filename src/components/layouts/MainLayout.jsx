const MainLayout = ({children}) => {
  return (
    <main className="flex flex-col items-center justify-start p-12 sm:p-24 basis-[calc(100vh-8.25rem)]">
        {children}
    </main>
  );
};

export default MainLayout