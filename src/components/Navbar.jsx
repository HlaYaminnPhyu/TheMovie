import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" bg-[#7c162e] shadow-xl text-white">
      <div className=" flex items-center justify-between container mx-auto px-5 py-2 mb-5 rounded">
        <div className=" flex items-center gap-7">
        <span className="logos">
          <a
            href=""
          >
            <img
              src="https://asuratoon.com/wp-content/uploads/2021/03/Group_1.png"
              className=" w-[50px] h-[50px]"
              alt="asura scans manhwa comic"
            />
          </a>
        </span>
        <div className="">
          <ul className=" flex gap-6">
            <li className=" text-lg">
              <a href="">Home</a>
            </li>
            <li className="text-lg">
              <a href="">Bookmarks</a>
            </li>
            <li className="text-lg">
              <a href="">Comics</a>
            </li>
            <li className="text-lg">
              <a href="">Recruitment</a>
            </li>
          </ul>
        </div>
        </div>
        <div className="">
          
          <div className=" flex items-center gap-2 border-1 rounded px-2 py-2 bg-[#3c162f]">
            <FaSearch />
            <input className=" outline-none bg-transparent" type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
