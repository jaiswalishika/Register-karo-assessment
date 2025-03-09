import React from "react";
import { AccordionComponent } from "../../common/AccordionComponent";
import { faqs } from "../../common/constans";
import { FaArrowRight } from "react-icons/fa";
const FAQSection = () => {
  return (
    <div className="w-full h-auto p-4 ">
      <div className="w-full mx-auto mb-6 p-4 mt-[24px] relative">
        <p className="text-xl font-semibold text-center text-[14px] leading-[21px] tracking-[1.5px] text-[#EB8D15]">
          FAQ
        </p>
        <h1 className="text-center text-[32px] font-extrabold leading-[38.4px] tracking-[0.16px] text-gray-600">
          Frequent Ask Questions
        </h1>
      </div>
      <div className="flex flex-wrap justify-center pl-18 pr-18">
        {faqs.map((faq) => (
          <AccordionComponent question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="w-full mx-auto flex items-start justify-center pt-12">
        <button className="w-[162px] h-[52px] rounded-[4px] bg-[#1C4670] text-white">
          Show more <FaArrowRight className="inline" />
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
