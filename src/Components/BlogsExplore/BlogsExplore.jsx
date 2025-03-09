import React from "react";
import { BlogCard } from "../../common/BlogCard";
import card1 from "../../assets/card1.png";
import { FaArrowRight } from "react-icons/fa";
const BlogsExplore = () => {
  const blogsData = [
    {
      img: card1,
      name: "Prabhash Mishra",
      date: "1 Jan 2023",
      timelaps: "Today",
      title: "Small business & Startup",
      subTitle:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      chipData: [{ color: "red", value: "Tax & Audit" }],
    },
    {
      img: card1,
      name: "Prabhash Mishra",
      date: "1 Jan 2023",
      timelaps: "Today",
      title: "Small business & Startup",
      subTitle:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      chipData: [{ color: "green", value: "Tax & Audit" }],
    },
    {
      img: card1,
      name: "Prabhash Mishra",
      date: "1 Jan 2023",
      timelaps: "Today",
      title: "Small business & Startup",
      subTitle:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      chipData: [{ color: "purple", value: "Tax & Audit" }],
    },
    {
      img: card1,
      name: "Prabhash Mishra",
      date: "1 Jan 2023",
      timelaps: "Today",
      title: "Small business & Startup",
      subTitle:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      chipData: [{ color: "yellow", value: "Tax & Audit" }],
    },
    {
      img: card1,
      name: "Prabhash Mishra",
      date: "1 Jan 2023",
      timelaps: "Today",
      title: "Small business & Startup",
      subTitle:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      chipData: [{ color: "blue", value: "Tax & Audit" }],
    },
    {
      img: card1,
      name: "Prabhash Mishra",
      date: "1 Jan 2023",
      timelaps: "Today",
      title: "Small business & Startup",
      subTitle:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      chipData: [{ color: "grey", value: "Tax & Audit" }],
    },
  ];
  return (
    <div className="w-full h-auto p-4 ">
      <div className="w-full mx-auto mb-6 p-4 mt-[24px] relative">
        <p className="text-xl font-semibold text-center text-[14px] leading-[21px] tracking-[1.5px] text-[#EB8D15]">
          EXPLORE OUR BLOGS
        </p>
        <h1 className="text-center text-[32px] font-extrabold leading-[38.4px] tracking-[0.16px] text-gray-600">
          Accelerate Digital Transformation
        </h1>
      </div>
      <div className="flex flex-wrap gap-8 justify-center pl-18 pr-18">
        {blogsData.map((data) => (
          <BlogCard
            img={data.img}
            name={data.name}
            date={data.date}
            timelaps={data.timelaps}
            title={data.title}
            subTitle={data.subTitle}
            chipData={data.chipData}
          />
        ))}
      </div>
      <div className="w-full mx-auto flex items-start justify-center pt-12">
        <button className="w-[162px] h-[52px] rounded-[4px] bg-[#1C4670] text-white">
          Show more blogs <FaArrowRight className="inline" />
        </button>
      </div>
    </div>
  );
};

export default BlogsExplore;
