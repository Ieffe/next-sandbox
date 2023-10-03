"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import PostForm from "@/components/posts/PostForm";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const router = useRouter();

  const submitPost = async (e) => {
    e.preventDefault();

    await axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
        body: body,
        userId: 1,
      })
      .then((resp) => console.log(resp))
      .then(() => {
        router.push("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <PostForm
     action={submitPost}
     title={title}
     body={body}
     onChangeTitle={(e) => setTitle(e.target.value)}
     onChangeBody={(e) => setBody(e.target.value)}
    />
  );
};

export default AddForm;
