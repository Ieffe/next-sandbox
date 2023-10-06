"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import PostForm from "@/components/posts/PostForm";

const ErrorMessage = ({ children }) => {
  return <small className="text-red-600 mt-2 italic block">{children}</small>;
};

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [title, body]);

  const validateForm = () => {
    let errors = {};

    if (!title) {
      errors.title = "Title is required.";
    }

    if (!body) {
      errors.body = "Body is required.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const router = useRouter();

  const submitPost = async (e) => {
    e.preventDefault();
    if (isFormValid) {
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
    }
  };

  return (
    <PostForm
      action={submitPost}
      title={title}
      body={body}
      onChangeTitle={(e) => setTitle(e.target.value)}
      onChangeBody={(e) => setBody(e.target.value)}
      titleError={errors.title}
      titleErrorMsg={<ErrorMessage>{errors.title}</ErrorMessage>}
      bodyError={errors.body}
      bodyErrorMsg={<ErrorMessage>{errors.body}</ErrorMessage>}
    />
  );
};

export default AddForm;
