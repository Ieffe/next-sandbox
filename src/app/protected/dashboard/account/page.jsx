import { cookies } from "next/headers";
import axios from "axios";
import { useState } from "react";

const Page = async () => {
  const cookieStore = cookies();
  const token = JSON.parse(cookieStore.get("token").value);
  const [form, setForm] = useState({})


  const api = await axios.get('https://dummyjson.com/auth/posts?limit=150',{
    headers: {
      'Authorization' : `Bearer ${token.token}`
    }
  })

  const posts = api.data.posts

 

  return (
    <>
    <div>
        <p>Welcome {token.firstName + ' ' + token.lastName}</p>
    </div>
    <div>
      {
        posts.map((post)=>(
          <p key={post.id}>{post.title}</p>
        ))
      }
    </div>
      
    </>
  );
};

export default Page;
