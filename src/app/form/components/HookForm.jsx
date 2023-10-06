"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    data.preventDefault;

    await axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((resp) => console.log(resp))
      .then(() => {
        router.push("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <input
          className="w-full bg-black text-white border-2 border-white p-2 rounded-lg  placeholder:text-slate-500 placeholder:italic"
          placeholder="Insert Title"
          {...register("title", { required: true })}
          aria-invalid={errors.title ? "true" : "false"}
        />
        {errors.title?.type === "required" && (
          <p className="text-sm text-red-600 mt-1 italic" role="alert">Title is required</p>
        )}
      </div>
      <input
        className="w-full bg-black text-white border-2 border-white p-2 rounded-lg  placeholder:text-slate-500 placeholder:italic"
        placeholder="Insert Content"
        {...register("body", { required: "Content is required" })}
        aria-invalid={errors.body ? "true" : "false"}
      />
      {errors.body && <p className="text-sm text-red-600 mt-1 italic" role="alert">{errors.body.message}</p>}
      <div className="mb-4"></div>

      <button
        className="px-3 py-2 border-2 rounded-lg hover:bg-white hover:text-black"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
