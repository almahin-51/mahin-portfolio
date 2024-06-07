import React from "react";

const Sidebar = () => {
  return (
    <div className="sideBar">
      {/* <img
        src="../../img/Mahin.jpg"
        alt="Mahin"
      /> */}
      <div className="img">

      </div>
      <h2 className="mt-3">AL Mohaiminul Islam Mahin</h2>
      <ul>
        <li>
          <a href="#banner">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
