import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#1C4670] p-4 h-[44px] flex justify-end items-center text-white">
      <div className="h-full w-full max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-end items-center px-4 gap-4 sm:gap-8">
        {/* Email Section with Icon on the same line */}
        <div className="text-sm flex items-center gap-1 sm:gap-2">
          <FaEnvelope />
          <a href="mailto:someone@example.com" className="truncate">
            www.registerkaro.in
          </a>
        </div>

        {/* Phone Number Section */}
        <div className="text-sm flex items-center gap-1 sm:gap-2">
          <FaPhone />
          <a href="tel:+918447746183" className="truncate">
            +918447746183
          </a>
        </div>

        {/* Icon Section (Social Media Icons) */}
        <div className="text-xl flex gap-1 sm:gap-2 justify-end mt-2 sm:mt-0">
          <RxInstagramLogo />
          <IoLogoFacebook />
          <FaTwitter />
          <FaPinterest />
        </div>
      </div>
    </div>
  );
};

export default Header;
