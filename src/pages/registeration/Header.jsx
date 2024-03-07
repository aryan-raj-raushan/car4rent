import React from "react";

const Header = ({ heading, paragraph }) => {
  return (
    <div className="pb-3">
      <div className="flex justify-center"></div>
      <h2 className="mt-2 text-center text-4xl font-semibold text-orange-500 uppercase">
        {heading}
      </h2>
      <p className="text-center text-sm font-normal text-white mt-2">
        {paragraph}
      </p>
    </div>
  );
};

export default Header;
