"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import DeleteConfirm from "./DeleteModal";
import { useEffect, useState } from "react";

const PostWrapper = (props) => {
  const router = useRouter();
  const [showDelete, setShowDelete] = useState(false);

  const deletePost = async (id) => {
    try {
      await axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((resp) => console.log(resp));
      handleClose();
      console.log("Post deleted succesfully!");
      router.push('/posts?form=deleted');
    } catch (error) {
      (error) => console.log(error);
    }
  };

  const handleClose = () => {
    setShowDelete(!showDelete);
  };

  return (
    <>
      <div className="basis-1/2 p-4">
        <Image
          src={"/placeholder.png"}
          width={300}
          height={300}
          className="fill-white bg-white rounded-md object-cover w-full h-48"
          alt="name"
        />
        <h1 className="line-clamp-1 font-bold text-xl mt-3 capitalize">
          {props.title}
        </h1>
        <p className="line-clamp-2">{props.body}</p>
        <Link href={`/posts/${props.id}`}>
          <button className="px-3 py-1 mt-4 font-bold border-white border-2 rounded hover:bg-white hover:text-black mr-3">
            Read Now!
          </button>
        </Link>
        <Link href={`/posts/${props.id}/edit`}>
          <button className="px-3 py-1 mt-4 font-bold border-white border-2 rounded hover:bg-white hover:text-black mr-3">
            Edit this Post!
          </button>
        </Link>
        <button
          onClick={() => {
            setShowDelete(!showDelete);
          }}
          className="px-3 py-1 mt-4 font-bold border-white border-2 rounded hover:bg-white hover:text-black mr-3"
        >
          Delete this Post!
        </button>
      </div>

      <DeleteConfirm
        title={props.title}
        show={showDelete}
        id={props.id}
        close={handleClose}
        delete={deletePost}
      />
    </>
  );
};

export default PostWrapper;
