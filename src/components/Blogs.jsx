import React from "react";

function Blogs(props) {
  return (
    <div>
     
      <div className="w-80 pb-5 rounded-md border-[1px]">
        <img src={props.img} alt="" />
        <div className="px-3 py-4 ">
          <h1 className="text-xl font-bold py-2">{props.h}</h1>
          <p className="text-gray-400">{props.p}</p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
