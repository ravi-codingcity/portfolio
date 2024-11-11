import React from "react";

function Tech_tab(props) {
  return (
    <div className="sm:w-52 w-40 py-10 relative group border rounded-xl">
      <span className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"></span>
      <div className="text-center  text-xl mb-5">
        <img src={props.icon} className="w-20 m-auto" alt="" />
      </div>
      <h1 className="text-lg font-semibold">{props.title}</h1>
    </div>
  );
}

export default Tech_tab;
