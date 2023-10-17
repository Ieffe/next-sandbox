"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
const DeletePostButton = (props) => {
  const router = useRouter()
  const handleDelete = async () => {
    const resp = await axios.delete(
      `https://dummyjson.com/auth/products/${props.id}`,
      {
        headers: {
          Authorization: `Bearer ${props.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(resp);
    router.refresh()
  };

  return (
    <button onClick={handleDelete} className="button-red">
      Delete
    </button>
  );
};

export default DeletePostButton;
