import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6 mt-[68px]  flex flex-col sm:flex-row gap-[50px]">
      {/* First Section */}
      <div className="w-full sm:w-1/2 flex flex-col justify-between p-4">
        <p className="text-[#EB8D15] mb-4">WELCOME TO REGISTERKARO.IN</p>
        <h1 className="text-xl font-semibold mb-3">
          About <span className="text-[#EB8D15]">Register Karo</span>
        </h1>
        <p className="text-[#0D1216]">
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years and I’m extremely
          pleased with their performance, ability to execute, and willingness to
          adapt in our ever-changing environment. Perry is an outstanding leader
          who is fanatical about customer satisfaction. He has built a solid
          team that has consistently delivered on projects, thereby exceeding
          everyone’s expectations.
        </p>
        <p className="text-[#0D1216]">
          I would strongly recommend their services to any organization that is
          looking for solid, reliable, and predictable outcomes.
        </p>
        <div className="w-full mx-auto flex items-start justify-center mt-8">
          <button className="w-[162px] h-[52px] rounded-[4px] bg-[#1C4670] text-white">
            Learn more <FaRegArrowAltCircleRight className="inline" />
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="h-[422px] w-full sm:w-1/2 flex justify-center">
        <img
          src="./images/groupPic.png"
          alt="Group"
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>
  );
};

export default AboutUs;
