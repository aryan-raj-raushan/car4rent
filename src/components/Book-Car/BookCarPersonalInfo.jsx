import React from "react";
import { modalFormFields } from "../../constant/BookCarConst";

const BookCarPersonalInfo = ({ submit, data, handleChange, errorMessage }) => {
  return (
    <div className="booking-modal__person-info p-7 pb-10 bg-white flex flex-col">
      <h4 className="text-xl uppercase text-orange-500 mb-5 font-bold">
        Personal Information
      </h4>
      <form className="info-form grid grid-cols-2 gap-4" onSubmit={submit}>
        {modalFormFields(data).map((field) => (
          <div className="modal-form__group flex flex-col gap-1" key={field.id}>
            <label
              htmlFor={field.id}
              className="text-gray-500 text-base font-medium"
            >
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.name}
              value={data[field.name]}
              onChange={handleChange}
              className="text-sm border border-gray-300 rounded-md py-3 px-4 outline-none text-gray-600 no-spinner scroll"
              placeholder={field.placeholder}
              onWheel={(e) => e.target.blur()}
            />
          </div>
        ))}
        {errorMessage && (
          <p className="text-red-500 text-base font-medium">{errorMessage}</p>
        )}
        <button
          type="submit"
          className="py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 col-span-2 mt-4 drop-shadow hover:drop-shadow-md"
        >
          Confirm booking
        </button>
      </form>
    </div>
  );
};

export default BookCarPersonalInfo;
