import axios from "axios";
import { cookies } from "next/headers";
import EditForm from "./components/EditForm";

const Page = async ({params}) =>{
    const cookieStore = cookies();
    const token = JSON.parse(cookieStore.get("token").value);
  
    const api = await axios.get(`https://dummyjson.com/auth/products/${params.id}`, {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    });
  
    const data = api.data
    return(
        <>
         <p>{data.title}</p>
         <EditForm
         title={data.title}
         desc={data.description}
         price={data.price}
         id={data.id}
         />
        </>
    )
}

export default Page