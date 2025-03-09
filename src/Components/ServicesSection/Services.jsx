import React from "react";
import CardWithLink from "../../common/ServicesCard";
import {
  VectorSvg,
  VectorSvg1,
  VectorSvg2,
  VectorSvg3,
  VectorSvg4,
  VectorSvg5,
} from "../../common/ServicesSvg";

const Services = () => {
  const servicesData = [
    {
      icon: <VectorSvg />,
      title: "Company Formation",
      subTitle: "Build web-based solutions that enhance customer experience.",
      link: "#",
    },
    {
      icon: <VectorSvg1 />,
      title: "Company Secretarial Services",
      subTitle:
        "Make data-driven decisions and utilize technology to reach business goals.",
      link: "#",
    },
    {
      icon: <VectorSvg2 />,
      title: "Virtual Office Address",
      subTitle:
        "Foster customer relationships by effectively serving your market.",
      link: "#",
    },
    {
      icon: <VectorSvg3 />,
      title: "Annual Compliance Services",
      subTitle: "Turn your ideas into modern products with our design experts.",
      link: "#",
    },
    {
      icon: <VectorSvg4 />,
      title: "Payroll Services",
      subTitle: "Expand your business across the globe with minimal effort.",
      link: "#",
    },
    {
      icon: <VectorSvg5 />,
      title: "Bookkeeping Services",
      subTitle:
        "Steering user behaviours with creative design, data insights & technology.",
      link: "#",
    },
  ];
  return (
    <div className="w-full h-auto p-4">
      {/* First Section */}
      <div className="w-full mx-auto mb-6 p-4 mt-[40px] relative">
        <p className="text-xl font-semibold text-center text-[14px] leading-[21px] tracking-[1.5px] text-[#EB8D15]">
          WELCOME TO REGISTERKARO.IN
        </p>
        <h1 className="text-center text-[32px] font-extrabold leading-[38.4px] tracking-[0.16px] text-gray-600">
          Explore Our Services
        </h1>
      </div>
      {/* services card */}
      <div className="flex flex-wrap justify-center gap-4">
        {servicesData.map((cardData) => (
          <CardWithLink
            title={cardData.title}
            icon={cardData.icon}
            subTitle={cardData.subTitle}
            link={cardData.link}
          />
        ))}
      </div>

      {/* Second Section */}
      <div className="w-full mx-auto flex items-start justify-center">
        <button className="w-[162px] h-[52px] rounded-[4px] bg-[#1C4670] text-white">
          See All Services
        </button>
      </div>
    </div>
  );
};

export default Services;
