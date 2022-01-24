import React from "react";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <img
        src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/129899339_1441454976186185_4129286224668160697_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGGN-uGp4tsv_mORMhzEoi0MtkJo1OIdGcy2QmjU4h0Z0O-ogMPgdvmFYgHVKvg6uqEXHdL5T1FnIe24oOA78_1&_nc_ohc=_dTgjLwVmwYAX8-QiL-&_nc_ht=scontent.fdac31-1.fna&oh=00_AT_ZfhcsK7rSycZcdUagGWbmnN9TqalLXlCKIxU1EHiVww&oe=62140E5C"
        alt=""
      />
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
