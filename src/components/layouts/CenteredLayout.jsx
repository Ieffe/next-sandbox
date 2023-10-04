const CenteredLayout = ({children}) => {
    return (
      <main className="flex flex-col items-center justify-center p-24 basis-[calc(100vh-8.25rem)]">
          {children}
      </main>
    );
  };
  
  export default CenteredLayout