import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
export const AccordionComponent = ({ question, answer }) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        className="mb-2 pl-6 pr-4 rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={"border-b-0 text-[16px] font=[500]"}
        >
          {question}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          {answer}
        </AccordionBody>
      </Accordion>
    </>
  );
};
