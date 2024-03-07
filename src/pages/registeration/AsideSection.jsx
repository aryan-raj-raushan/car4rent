import { IconQuote } from "@tabler/icons-react";
import React from "react";

const AsideSection = ({ description, tagLine, classes }) => {
  return (
    <div className="basis-1/2 hidden md:flex justify-evenly z-20 ">
      <div className="flex flex-col text-gray-700 font-bold w-2/3 mt-16 gap-2">
        <h1 className="text-3xl font-bold">Why to buy Car?</h1>
        <h4 className="text-2xl textblack italic tracking-wide">
          When you can{" "}
          <span className="text-orange-600 font-extrabold text-4xl">Rent</span>{" "}
          it.{" "}
        </h4>
        <div className="relative">
          <span className="quotes-icon hidden xs:block text-6xl text-orange-500 absolute -left-10">
            <IconQuote width={35} height={40} className="rotate-180" />
          </span>
          <h4 className="text-3xl text-orange-600 font-extrabold mt-4 ">
            {description}
          </h4>
          <span
            className={`quotes-icon hidden xs:block text-6xl text-orange-500 absolute ${classes}`}
          >
            <IconQuote width={35} height={40} className="" />
          </span>
        </div>
        <h6 className="text-black text-base mt-3 font-medium leading-tight">
          {tagLine}
        </h6>
      </div>
    </div>
  );
};

export default AsideSection;
