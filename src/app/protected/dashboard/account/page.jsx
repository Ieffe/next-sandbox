import { cookies } from "next/headers";
import axios from "axios";

const Page = async () => {
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
