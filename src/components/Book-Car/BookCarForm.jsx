import { formFields } from "../../constant/BookCarConst";
const BookCarForm = ({ handleSubmit, formData, handleChange }) => {
  return (
    <form
      className="box-form grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      onSubmit={handleSubmit}
    >
      {formFields.map((field, index) => (
        <div key={index} className="box-form__car-type flex flex-col">
          <label className="flex items-center mb-3 font-semibold text-base">
            <field.icon className="input-icon" /> &nbsp; {field.label}
            {index === 0 || index === 1 || index === 2 ? (
              <b className="text-orange-500">*</b>
            ) : null}
          </label>
          {field.options ? (
            <select
              value={formData[field.field]}
              onChange={(e) => handleChange(e, field.field)}
              className="text-base text-gray-500 border border-gray-300 rounded p-3 outline-none font-rubik font-normal cursor-pointer"
            >
              <option>Select {field.label}</option>
              {field.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              value={formData[field.field]}
              onChange={(e) => handleChange(e, field.field)}
              type={field.type || "text"}
              className="text-sm text-gray-500 border border-gray-300 rounded py-3 px-4 outline-none"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="p-3 bg-orange-500 text-white font-medium rounded shadow-md hover:shadow-lg hover:bg-orange-600 transition duration-300 font-rubik border-none cursor-pointer h-fit self-end"
      >
        Search
      </button>
    </form>
  );
};

export default BookCarForm;
