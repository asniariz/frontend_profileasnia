import React from "react";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/images/images.jpg";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white shadow-sm px-10 py-4 rounded-xl mt-3 mx-auto w-[95%]">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full border-2 border-gradient-to-tr from-blue-500 to-purple-500 p-[2px]">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full rounded-full border-2 border-white object-cover"
          />
        </div>
        <h1 className="text-gray-900 font-semibold text-lg">Asnia Rizki Maghfiroh</h1>
      </div>

      <ul className="flex space-x-8 text-gray-700 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Skills</li>
        <li className="hover:text-blue-600 cursor-pointer">Portfolio</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>

      <div className="flex space-x-5 text-gray-500">
        <a href="#" className="hover:text-pink-500 transition">
          <FaInstagram size={18} />
        </a>
        <a href="#" className="hover:text-blue-600 transition">
          <FaLinkedinIn size={18} />
        </a>
        <a href="#" className="hover:text-gray-700 transition">
          <FaEnvelope size={18} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;