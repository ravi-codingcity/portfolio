import React from "react";
import { IoMdPerson } from "react-icons/io";

function Blogs(props) {
  return (
    <div className="w-[345px] pb-2  overflow-hidden rounded-lg mx-2">
      <img src={props.img} alt="" />
      <div className="px-3 py-4 ">
        <h1 className="text-xl font-bold py-2">{props.h}</h1>
        <p className="text-gray-400">{props.p}</p>
        <p className="text-gray-400 pt-2 font-semibold flex items-center gap-2">
          <IoMdPerson /> Coding City
        </p>
      </div>
    </div>
  );
}

export default Blogs;
