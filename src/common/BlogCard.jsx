import React from "react";
import { Chip } from "@material-tailwind/react";

export function BlogCard({
  name,
  date,
  timelaps,
  title,
  subTitle,
  chipData,
  img,
}) {
  return (
    <a href="javascript:void(0)">
      <div className="relative flex flex-col bg-white  rounded-lg w-85">
        <div className="relative h-56  overflow-hidden text-white">
          <img
            src={img}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col mt-[24px] text-[14px]">
          <span className="text-slate-600">
            {name} • {date} • {timelaps}
          </span>
        </div>
        <div className="">
          <h6 className="mt-[8px] text-slate-800 text-[22px] font-semibold">
            {title}
          </h6>
          <p className="text-slate-600 text-[15px] color-[#667085] leading-normal font-light">
            {subTitle}
          </p>
        </div>
        <div className="mt-3 flex gap-2">
          {chipData?.map((chip) => (
            <Chip
              variant="ghost"
              color={chip.color}
              size="sm"
              value={chip.value}
              className="w-fit rounded-full"
            />
          ))}
        </div>
      </div>
    </a>
  );
}
