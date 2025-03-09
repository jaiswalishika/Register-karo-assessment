import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="h-[71px] w-full flex items-center justify-between px-4 sm:px-8">
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <img
          src="./images/logo.webp"
          alt="Logo"
          className="w-[150px] h-[30px] sm:w-[200px] sm:h-[37px]"
        />
      </div>

      {/* Right Side: 6 Links and Button */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#" className="text-lg text-black">
          Home
        </a>
        <a href="#" className="text-lg text-black">
          Our Services <IoIosArrowDown className="inline" />
        </a>
        <a href="#" className="text-lg text-black">
          Blog
        </a>
        <a href="#" className="text-lg text-black">
          Contact Us
        </a>
        <a href="#" className="text-lg text-black">
          About Us
        </a>
        <a href="#" className="text-lg text-black">
          <IoSearchOutline />
        </a>
        <button className="bg-[#FFA229] text-white px-4 py-2 rounded text-sm sm:text-base">
          Talk As Expert
        </button>
      </div>

      {/* Mobile View: Links and Button */}
      <div className="md:hidden flex items-center gap-4">
        <button className="bg-[#FFA229] text-white px-4 py-2 rounded text-sm sm:text-base">
          Talk As Expert
        </button>
      </div>
    </div>
  );
};

export default Navbar;
