import React from "react";
import CardWithLink from "../../common/ServicesCard";
import {
  CardsSvg1,
  CardsSvg2,
  CardsSvg3,
  CardsSvg4,
} from "../../common/CardSvg.jsx";

const Features = () => {
  const servicesData = [
    {
      icon: <CardsSvg1 />,
      title: "Confidential & Safe",
      subTitle: "All your private information is safe with us",
      bgColor: "#FEF3EF",
      borderColor: "#FCDDEC",
    },
    {
      icon: <CardsSvg2 />,
      title: "No Hidden Fee",
      subTitle:
        "Everything is put before you with no hidden charges or conditions",
      bgColor: "#F1FBF3",
      borderColor: "#FCDDEC",
    },
    {
      icon: <CardsSvg3 />,
      title: "Guaranteed Satisfaction",
      subTitle:
        "We ensure that you stay 100% satisfied with our offered services",
      bgColor: "#EDF3FF",
      borderColor: "#FCDDEC",
    },
    {
      icon: <CardsSvg4 />,
      title: "Expert CA/CS Assistance",
      subTitle: "Prompt support from our in-house expert professionals",
      bgColor: "#FBF1FB",
      borderColor: "#FCDDEC",
    },
    {
      icon: <CardsSvg1 />,
      title: "Confidential & Safe",
      subTitle: "All your private information is safe with us",
      bgColor: "#27AE600A",
      borderColor: "#FCDDEC",
    },
  ];
  return (
    <div className="w-full h-auto p-4">
      <div className="flex flex-wrap">
        <div className="w-full mb-6 pl-18 pr-18 mt-[40px] relative">
          <p className="text-xl font-semibold text-[14px] leading-[21px] tracking-[1.5px] text-[#EB8D15]">
            WHY REGISTERKARO.IN
          </p>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            Why Choose Register Karo ?
          </h2>

          <p className="text-gray-600 mb-12 max-w-2xl">
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {servicesData.map((cardData) => (
            <CardWithLink
              title={cardData.title}
              icon={cardData.icon}
              subTitle={cardData.subTitle}
              link={cardData.link}
              bgColor={cardData.bgColor}
              borderColor={cardData.borderColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
