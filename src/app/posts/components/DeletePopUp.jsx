"use client";
import { useState } from "react";

const DeleteConfirm = (props) => {

  return (
    <div
      className={`w-full h-full justify-center justify-items-center fixed z-10 bg-black/50 top-0 left-0 
      ${props.show ? "flex flex-col" : "hidden"}
    `}
    >
      <div className="bg-black border-2 border-white rounded-lg p-6 w-3/4 m-auto self-center">
        <h1 className="text-2xl font-bold">Confirm Deletion</h1>
        <p className="mt-5">Are you sure to delete this Post?</p>
        <p className="mt-5">
          <i>Title: {props.title}</i>
        </p>
        <div className="flex flex-row justify-end">
          <button className="ml-4 border-2 border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-500 hover:text-black">
            Yes
          </button>
          <button
            className="ml-4 border-2 border-white px-3 py-1 rounded hover:bg-white hover:text-black"
            onClick={() => !props.show}
          >
            No
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default DeleteConfirm;
