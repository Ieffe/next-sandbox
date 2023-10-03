"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const { default: PostForm } = require("@/components/posts/PostForm");

const EditForm = ({ params }) => {
  const [title, setTitle] = useState(params.title);
  const [body, setBody] = useState(params.body);

  const router = useRouter();

  const editPost = async (e) => {
    e.preventDefault();
    await axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
        title: title,
        body: body,
      })
      .then((resp) => console.log(resp))
      .then(() => console.log('data edited succesfully'))
      .then(() => {
        router.push("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <PostForm
      action={editPost}
      title={title}
      body={body}
      onChangeTitle={(e) => setTitle(e.target.value)}
      onChangeBody={(e) => setBody(e.target.value)}
    />
  );
};

export default EditForm;
