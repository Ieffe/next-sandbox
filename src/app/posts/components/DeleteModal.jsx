"use client";
import { useEffect, useState } from "react";

const DeleteConfirm = (props) => {
  const [show, setShow] = useState(null);

  
  
  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  

  return (
    !!show &&
    <div onClick={props.close} //main container (includes the transparent background)
      className={`w-full h-full justify-center justify-items-center fixed z-10 bg-black/50 top-0 left-0 
      flex flex-col
    `}
    >
      <div
        className="bg-black border-2 border-white rounded-lg p-6 w-3/4 m-auto self-center"
        onClick={(e) => {e.stopPropagation()}}
      >
        <h1 className="text-2xl font-bold">Confirm Deletion</h1>
        <p className="mt-5">Are you sure to delete this Post?</p>
        <p className="mt-5">
          <i>Title: {props.title}</i>
        </p>
        <div className="flex flex-row justify-end pt-3">
          <button
            className="ml-4 border-2 border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-500 hover:text-black"
            onClick={props.delete}
          >
            Yes
          </button>
          <button
            className="ml-4 border-2 border-white px-3 py-1 rounded hover:bg-white hover:text-black"
            onClick={props.close}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
