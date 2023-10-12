import { cookies } from "next/headers";

const Page = () => {
  const cookieStore = cookies();
  const token = JSON.parse(cookieStore.get("token").value);
  return (
    <>
    <div>
        <p>Welcome {token.firstName + ' ' + token.lastName}</p>
    </div>
      
    </>
  );
};

export default Page;
