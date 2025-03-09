import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Search = () => {
  return (
    <div
      className="w-full h-[500px] flex flex-col items-center justify-center p-4"
      style={{
        background: "linear-gradient(to right, #FFA229, #1C4670)", // Updated gradient
      }}
    >
      {/* Top Paragraph */}
      <p className="text-white text-lg md:text-xl font-semibold mb-4">
        1% OF THE INDUSTRY
      </p>

      {/* Heading */}
      <h1 className="text-white text-3xl md:text-4xl font-bold mb-8">
        Welcome to your new digital reality. Now.
      </h1>

      {/* Search Input and Button */}
      <div className=" h-[46px] flex items-center justify-center mt-8">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="w-full p-3 rounded-l-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-[#FFA229] text-white p-3 rounded-r-md">
          Submit
        </button>
      </div>

      {/* Logos and Text */}
      <div className="flex justify-center space-x-4 mt-6">
        <div className="flex flex-row items-center">
          <FaCheckCircle size={24} className="text-white" />
          <p className="text-white text-sm ml-2">Instant results</p>
        </div>

        <div className="flex flex-row items-center">
          <FaCheckCircle size={24} className="text-white" />
          <p className="text-white text-sm ml-2">User-friendly interface</p>
        </div>
        <div className="flex flex-row items-center">
          <FaCheckCircle size={24} className="text-white" />
          <p className="text-white text-sm ml-2">Personalized customization</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
