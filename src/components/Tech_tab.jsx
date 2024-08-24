import React from "react";

function Tech_tab(props) {
  return (
    <div className="w-80 py-12 relative group border rounded-xl">
      <span className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"></span>
      <img
        src={props.icon}
        alt=""
        className="m-auto py-6 px-6 rounded-full bg-gradient-to-b from-[rgba(255,255,255,0.0288)] via-[rgba(255,255,255,0.06)] to-[rgba(255,255,255,0)] mb-7"
      />
      <h1 className="text-xl font-semibold">{props.title}</h1>
      <p className="px-5 py-3">
        {props.desc}
      </p>
    </div>
  );
}

export default Tech_tab;
