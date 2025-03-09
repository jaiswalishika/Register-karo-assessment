import React from "react";

const LogoSection = () => {
  return (
    <section className="w-full mx-auto bg-gray-100 flex items-center justify-center py-8 sm:py-12">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-inter text-[22px] sm:text-[26px] font-[700] leading-[26.63px] text-center underline-from-font text-decoration-skip-ink-none mb-8">
          Trusted By Over 100+ Startups and Freelance Businesses
        </h1>
        <img
          src="./images/Logos.webp"
          alt="Logo"
          className="h-[28px] sm:h-[40px] w-auto object-contain"
        />
      </div>
    </section>
  );
};

export default LogoSection;
