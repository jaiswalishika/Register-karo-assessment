import React from "react";
import { IoLogoApple } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";

const ContactUs = () => {
  return (
    <div className="w-full">
      {/* First Section */}
      <div className="w-full h-auto md:h-[334px] bg-[#1C4670] flex flex-col md:flex-row overflow-hidden">
        {/* Left Side Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center p-8 mt-6 text-white">
          <h2 className="text-2xl font-bold text-center md:text-left mb-4">
            Manage Your Services by your <br />
            Mobile Phone
          </h2>
          <p className="mt-2 text-center md:text-left text-[#AAB5CD] mb-4">
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.
          </p>
          <div className="mt-4">
            <p className="text-lg font-semibold text-center md:text-left mb-4">
              Get the App
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center sm:items-start">
              <button className="bg-white text-black py-2 px-4 rounded-md flex items-center space-x-2 w-full sm:w-auto">
                <IoLogoApple size={34} className="text-2xl text-[#A5C937]" />
                <div className="flex flex-col">
                  <p className="text-xs">Get it on</p>
                  <p className="font-semibold">Apple Store</p>
                </div>
              </button>
              <button className="bg-white text-black py-2 px-4 rounded-md flex items-center space-x-2 w-full sm:w-auto">
                <BiLogoPlayStore
                  size={34}
                  className="text-2xl text-[#A5C937]"
                />
                <div className="flex flex-col">
                  <p className="text-xs">Get it on</p>
                  <p className="font-semibold">Play Store</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-0 relative">
          <img
            src="./images/phone.png"
            alt="Placeholder"
            className="w-full h-auto md:h-full object-contain md:object-fill"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent"></div>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full h-auto md:h-[334px] flex flex-col items-center p-4 mt-8 mb-8">
        <p className="text-[#EB8D15] text-lg mt-0 mb-2">Why Register karo</p>
        <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
          Some Numbers are important
        </h2>
        <img
          src="./images/num.png"
          alt="Numbers"
          className="w-full md:w-[1280px] h-auto md:h-[78px] mx-auto mt-8"
        />
      </div>
    </div>
  );
};

export default ContactUs;
