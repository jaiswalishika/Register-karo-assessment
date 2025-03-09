import React from "react";
import { RiLightbulbLine } from "react-icons/ri";

const Introduction = () => {
  return (
    <div className="w-full h-auto md:h-[531px] bg-[#1C4670] flex items-center justify-center p-4 flex-col md:flex-row gap-8">
      {/* Left Side Section */}
      <div className="  flex flex-col items-start justify-center gap-8 p-8">
        <div className=" w-full">
          <h1 className="font-bold text-white mb-5">Our Video Introductions</h1>
          <p className="text-left text-[#AAB5CD] text-sm leading-[24px] tracking-[-0.01em] font-normal">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>
        </div>

        <div className=" w-full flex items-center gap-2">
          {/* Left Side Image */}
          <div className="w-[56px] h-[56px] ">
            <img
              src="./images/light.png"
              alt="Logo"
              className="h-[40px] w-auto object-contain"
            />
          </div>

          {/* Right Side Text */}
          <div className="flex flex-col">
            <h1 className="font-bold text-white mb-2 text-sm md:text-base">
              Explore ideas together
            </h1>
            <p className="text-left text-[#AAB5CD] text-sm leading-[24px] tracking-[-0.01em] font-normal">
              Engage audience segments and finally create actionable insights.
              Amplify vertical integration
            </p>
          </div>
        </div>

        <div className=" w-full flex items-center gap-2">
          {/* Left Side Image */}
          <div className="w-[56px] h-[56px]">
            <img
              src="./images/icon2.png"
              alt="Logo"
              className="h-[40px] w-auto object-contain"
            />
          </div>

          {/* Right Side Text */}
          <div className="flex flex-col">
            <h1 className="font-bold text-white mb-2 text-sm md:text-base">
              Bring those ideas to life
            </h1>
            <p className="text-left text-[#AAB5CD] text-sm leading-[24px] tracking-[-0.01em] font-normal">
              Engage audience segments and finally create actionable insights.
              Amplify vertical integration
            </p>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-auto h-auto max-w-[640px] max-h-[540px] flex items-center justify-center mt-4 md:mt-0 p-8">
        <img
          src="./images/video.png"
          alt="Video Introduction"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Introduction;
