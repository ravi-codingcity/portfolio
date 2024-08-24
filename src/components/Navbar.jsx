import React from "react";

function Navbar() {
  return (
    <div className="bg-transparent flex justify-around items-center text-white py-6">
      <div className="text-2xl font-bold">Coding City</div>
      <div>
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Tech</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <button>Sign-up</button>
      </div>
    </div>
  );
}

export default Navbar;
