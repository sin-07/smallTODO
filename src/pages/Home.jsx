import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className="mt-10">
        <div className="w-[50vw] border-2 mx-auto">
          <div className="flex justify-end gap-2 text-xl">
            <AiFillDelete className="text-gray-500 hover:text-red-400 cursor-pointer hover:scale-110 transition-all"/>
            <MdOutlineEdit className="text-gray-500 hover:text-blue-400 cursor-pointer hover:scale-110 transition-all"/>
          </div>

          <div>
            <h3 className="text-xl font-bold py-1 px-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis, consequuntur?
            </h3>
            <p className="py-1 px-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              doloribus, quod, voluptates, quos doloremque quae nemo ipsam
              voluptate quidem fugit quibusdam. Quisquam, sequi. Quisquam
              voluptate, tempora quibusdam natus voluptas.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
