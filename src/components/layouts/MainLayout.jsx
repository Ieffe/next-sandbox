const MainLayout = ({children}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
        {children}
    </main>
  );
};

export default MainLayout