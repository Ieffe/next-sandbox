import PostForm from "./components/PostForm";

const Page = () => {
  return (
    <>
      <p className="mb-4">This page will make an authenticated <code className="code-snippets">POST</code> request by adding products to dummyjson <code className="code-snippets">/auth/products/add</code></p>
      <PostForm></PostForm>
    </>
  );
};

export default Page;
