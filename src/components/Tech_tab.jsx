import React from "react";

function Tech_tab(props) {
  return (
    <div className="w-52 py-12 relative group border rounded-xl">
      <span className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"></span>
      <div className="text-center  text-4xl mb-5">
        {props.icon}
      </div>
      <h1 className="text-lg font-semibold">{props.title}</h1>
       </div>
  );
}

export default Tech_tab;
