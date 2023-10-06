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
  const [titleErrorMsg, setTitleErrorMsg] = useState("");
  const [bodyErrorMsg, setBodyErrorMsg] = useState("");
  const router = useRouter();

  useEffect(() => {
    validateForm();
  }, [title, body]);

  useEffect(() => {
    if (isFormValid) {
      // Ketika isFormValid berubah menjadi true, kirim permintaan HTTP
      submitPost();
    }
  }, [isFormValid]);

  const validateForm = () => {
    let newErrors = {};

    if (!title) {
      newErrors.title = "Title is required.";
    }

    if (!body) {
      newErrors.body = "Body is required.";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const submitPost = async () => {
    try {
      const resp = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
        body: body,
        userId: 1,
      });
      console.log(resp);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostForm
      action={(e) => {
        e.preventDefault();
        validateForm();
        // Set pesan kesalahan hanya jika validasi gagal
        if (!isFormValid) {
          setTitleErrorMsg(errors.title || "");
          setBodyErrorMsg(errors.body || "");
        }
      }}
      title={title}
      body={body}
      onChangeTitle={(e) => setTitle(e.target.value)}
      onChangeBody={(e) => setBody(e.target.value)}
      titleError={isFormValid ? "" : titleErrorMsg}
      titleErrorMsg={<ErrorMessage>{titleErrorMsg}</ErrorMessage>}
      bodyError={isFormValid ? "" : bodyErrorMsg}
      bodyErrorMsg={<ErrorMessage>{bodyErrorMsg}</ErrorMessage>}
    />
  );
};

export default AddForm;
