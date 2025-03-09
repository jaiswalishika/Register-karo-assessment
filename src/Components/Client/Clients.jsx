import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const Clients = () => {
  return (
    <div className="w-full h-auto p-4">
      {/* First Section */}
      <div className="w-auto mb-6 p-8 ">
        {/* First Part */}
        <div className="mx-auto mb-2">
          <h1 className="text-center text-2xl font-bold">Our Happy Clients</h1>
        </div>
        {/* Second Part */}
        <div className="mx-auto">
          <p className="text-center text-[#666666]">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-leveling customer service for
            state of the art customer service.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full">
        <img src="./images/Pagination.png" alt="" />
      </div>

      {/* Third Section */}
      <div className="w-full h-[22px] mt-8 mb-8 ">
        <h2 className="text-center">
          See more <IoIosArrowRoundForward className="inline" />
        </h2>
      </div>
    </div>
  );
};

export default Clients;
