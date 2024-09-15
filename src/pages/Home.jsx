import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updatePost = async (id) => {
    console.log(title, description, id);
    const response = await fetch(`http://localhost:5000/update-blog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    if (response.status === 200) {
      toast.success("Post updated successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  const getPosts = async () => {
    const response = await fetch("http://localhost:5000/get-blogs");
    const data = await response.json();
    setPosts(data.blogs);
  };

  useEffect(() => {
    getPosts();
  }, [posts]);

  const deletePost = async (id) => {
    const response = await fetch(`http://localhost:5000/delete-blog/${id}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      toast.success("Post deleted successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      {/* {" "} */}
      <Toaster position="bottom-center" />
      <div className="mt-10">
        {posts.length === 0 ? (
          <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="mb-[150px] font-bold text-3xl text-gray-400">
              There's no blogs....
              <div className="text-center">
                <Link
                  to="/create"
                  className="text-white text-sm font-normal bg-black px-2 py-1 rounded-lg"
                >
                  Click Here Create Blog
                </Link>
              </div>
            </h1>
          </div>
        ) : (
          posts.map((post, i) => (
            <div key={post._id} className="w-[50vw] border-2 mx-auto">
              <div className="flex justify-end gap-2 text-xl">
                <AiFillDelete
                  onClick={() => {
                    deletePost(post._id);
                  }}
                  className="text-gray-500 hover:text-red-400 cursor-pointer hover:scale-110 transition-all"
                />
                <MdOutlineEdit
                  onClick={() => {
                    setEditPost(!editPost);
                    setSelectedPost(post._id);
                  }}
                  className={`${
                    selectedPost === post._id && editPost
                      ? "text-red-400 scale-110"
                      : "text-gray-400"
                  } text-gray-500 hover:text-blue-400 cursor-pointer hover:scale-110 transition-all`}
                />
              </div>

              <div>
                <h3
                  className="text-xl font-bold py-1 px-1"
                  contentEditable={editPost}
                  onInput={(e) => {
                    setTitle(e.target.innerText);
                  }}
                >
                  {post.title}
                </h3>
                <p
                  className="py-1 px-1"
                  contentEditable={editPost}
                  onInput={(e) => {
                    setDescription(e.target.innerText);
                  }}
                >
                  {post.description}
                </p>

                <button
                  className={`${
                    selectedPost === post._id && editPost ? "block" : "hidden"
                  } bg-black px-2 py-1 text-white m-2 rounded-sm font-bold`}
                  onClick={() => {
                    updatePost(post._id);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
