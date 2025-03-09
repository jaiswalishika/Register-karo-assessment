import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { IoLogoApple } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { IoIosArrowRoundUp } from "react-icons/io";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full h-auto bg-[#011B5B] mx-auto flex justify-center items-center py-4">
      {/* Red Box */}
      <div className="w-full h-auto px-[64px] py-8 flex flex-col justify-between overflow-hidden">
        {/* First Section with 5 parts */}
        <div className="w-full h-auto flex flex-wrap justify-between text-[#AAB5CD] gap-6">
          <div className="h-[112px] w-full sm:w-[247px] overflow-hidden">
            {/* Content for Part 1 */}
            <p className="font-light text-sm">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="flex space-x-2 text-white text-lg">
              {/* Icons in a single row */}
              <FaFacebook />
              <IoLogoGoogle />
              <IoLogoApple />
              <FaInstagram />
            </div>
          </div>
          <div className="h-auto sm:w-[150px] w-full overflow-y-auto">
            <p className="text-[#FFA229] text-sm mb-4">START A BUSINESS</p>
            <ul className="text-xs space-y-2">
              <li>Features</li>
              <li>Solutions</li>
              <li>Integrations</li>
              <li>Enterprise</li>
              <li>Solutions</li>
            </ul>
          </div>
          <div className="w-full sm:w-[234px] h-auto overflow-hidden">
            <p className="text-[#FFA229] text-sm mb-4">
              GOVERNMENT REGISTRATION
            </p>
            <ul className="text-xs space-y-2">
              <li>Partners</li>
              <li>Community</li>
              <li>Developers</li>
              <li>App</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="w-full sm:w-[155px] h-auto overflow-hidden">
            <p className="text-[#FFA229] text-sm mb-4">COMPLIANCE & TAX</p>
            <ul className="text-xs space-y-2">
              <li>Chennels</li>
              <li>Scale</li>
              <li>Watch the Demo</li>
              <li>Our Competition</li>
            </ul>
          </div>
          <div className="w-full sm:w-[101px] h-auto overflow-hidden">
            <p className="text-[#FFA229] text-sm mb-4">BIG & CDSCO</p>
            <ul className="text-xs space-y-2">
              <li>About Us</li>
              <li>News</li>
              <li>Leadership</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>

        {/* Second Section with button and copyright */}
        <div className="w-full min-h-[96px] flex flex-col justify-center items-center px-6 space-y-2 mt-6">
          <button
            onClick={scrollToTop}
            className="bg-[#FFA229] text-white rounded-full p-4"
          >
            <IoIosArrowRoundUp size={26} />
          </button>
          <p className="text-xs sm:text-sm text-[#AAB5CD] ">
            © 2024 Registerkaro. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
