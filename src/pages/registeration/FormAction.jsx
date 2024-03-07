import React from "react";

const FormAction = ({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
  disabled = false,
}) => {
  return (
    <>
      {type === "Button" ? (
        <>
          <button
            type={action}
            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 transition duration-200 shadow-md hover:shadow-lg drop-shadow hover:drop-shadow-md ${
              disabled ? "cursor-not-allowed opacity-50" : ""
            }`}
            onClick={handleSubmit}
            disabled={disabled}
          >
            {text}
          </button>
          {/* {disabled && message && (
            <p className="text-red-500 mt-2">{message}</p>
          )} */}
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default FormAction;
