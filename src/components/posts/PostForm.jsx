const PostForm = (props) => {


  return (
    <form className="w-full" onSubmit={props.action}>
      <div className="w-full">
        <label className="block mb-2" htmlFor="">
          Title
        </label>
        <input
          className="bg-transparent text-white border-2 border-white rounded-lg w-full md:w-1/2 p-2
          placeholder:italic placeholder:text-slate-500 focus:border-4"
          placeholder="Input Title"
          type="text"
          value={props.title}
          onChange={props.onChangeTitle}
        />
      </div>
      <div className="w-full mt-5">
        <label className="block mb-2" htmlFor="">
          Body
        </label>
        <textarea
          className="bg-transparent text-white border-2 border-white rounded-lg w-full  p-2
          placeholder:italic placeholder:text-slate-500 focus:border-4"
          placeholder="Input Some Content"
          name=""
          id=""
          cols="30"
          rows="10"
          value={props.body}
          onChange={props.onChangeBody}
        ></textarea>
      </div>
      <button
        className="hover:border-2 hover:bg-transparent hover:text-white bg-white text-black px-4 py-2 rounded-lg mt-5"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default PostForm