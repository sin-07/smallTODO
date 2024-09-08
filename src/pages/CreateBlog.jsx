import React from "react";

const CreateBlog = () => {
  return (
    <>
      <div className="md:w-[60vw] w-[95vw] mx-auto bg-slate-300 mt-10 rounded-xl">
        <h1 className="text-2xl font-bold text-center pt-4">Create Blogs</h1>

        <form action="">
          <div className="flex flex-col">
            <label htmlFor="title" className="ml-3 font-bold text-xl my-2">
              Title:
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter the title of blog"
              className="border-2 py-3 px-2 rounded-2xl outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="ml-3 font-bold text-xl my-2"
            >
              Description:
            </label>
            <textarea className="border-2 py-3 px-2 rounded-2xl outline-none" rows={10}/>
          </div>
          <button className="bg-black text-white px-4 py-2 w-full rounded-2xl mt-2 hover:bg-[#343333] transition-all ease-in-out duration-200">Create</button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
