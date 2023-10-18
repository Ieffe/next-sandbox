"use client";

import { useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";

const EditForm = (props) => {
  const token = JSON.parse(getCookie("token"));

  

  const [form, setForm] = useState({
    title: props.title,
    description: props.desc,
    thumbnail: "",
    price: props.price,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.patch( //PATCH for updating
        `https://dummyjson.com/products/${props.id}`,
        form,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token} `,
          },
        }
      );
      console.log("Data Successfully added!");
      console.log(resp);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    // console.log(form)
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          placeholder="Insert Title of the Product"
          className="input"
          type="text"
          value={form.title}
          onChange={handleInputChange}
          name="title"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="Insert Price"
          className="input"
          type="number"
          name="price"
          value={form.price}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Insert a small description"
          className="input resize-none"
          name="description"
          id=""
          cols="50"
          rows="5"
          value={form.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="mb-3 flex flex-col">
        <label className="mb-2 font-bold">Upload Image (optional)</label>
        <input
          className="input"
          type="file"
          accept=".jpg,.png,.gif"
          value={form.thumbnail}
          name="thumbnail"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button className="button">Submit</button>
      </div>
    </form>
  );
};

export default EditForm;
