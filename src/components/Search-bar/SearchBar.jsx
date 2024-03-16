import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const SearchBar = () => {
  const [dropOffOption, setDropOffOption] = useState(null);
  const [pickUpDate, setPickUpDate] = useState(new Date());
  const [dropOffDate, setDropOffDate] = useState(new Date());

  const handleSearch = () => {
    const searchData = {
      dropOffOption,
      pickUpDate,
      dropOffDate,
    };
    console.log(searchData);
    // Further processing or sending data to backend can be done here
  };
  return (
    <div className="Container mt-20 h-full">
      <div className="mx-auto h-full">
        <div className="flex flex-col h-[60vh]">
          <div className="flex items-center gap-4 relative ">
            <Select
              options={[
                { label: "Same Drop-off", value: "same" },
                { label: "Different Drop-off", value: "different" },
              ]}
              onChange={(option) => setDropOffOption(option)}
              className="absolute top-2 z-10"
            />
          </div>
          <div className="inline-flex items-center gap-8 my-5">
            <input
              type="text"
              placeholder="Enter location"
              className="border border-gray-300 rounded px-4 py-2"
            />
            {dropOffOption && dropOffOption.value === "different" && (
              <input
                type="text"
                placeholder="Enter location"
                className="border border-gray-300 rounded px-4 py-2"
              />
            )}
            <DatePicker
              selected={pickUpDate}
              onChange={(date) => setPickUpDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={60}
              timeCaption="Pick-up Time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="border p-2 rounded-lg"
            />
            <DatePicker
              selected={dropOffDate}
              onChange={(date) => setDropOffDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={60}
              timeCaption="Drop-off Time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="no-scrollbar scrollbar-thin"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
