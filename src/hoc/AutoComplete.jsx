import React, { useRef, useState } from "react";
import LocationIcon from "../assets/illustrator/autocomplete/location.png";
import { useOnClickOutside } from "usehooks-ts";
import { City } from "country-state-city";

export const Autocomplete = ({ location, setLocation }) => {
  const ref = useRef(null);
  const [filteredCities, setFilteredCities] = useState([]);
  const [inputValue, setInputValue] = useState(location);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setInputValue(input);
    const indianCitiesData = City.getCitiesOfCountry("IN");
    const filtered = indianCitiesData.filter((city) =>
      city.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  const handleLocationSelect = (selectedLocation) => {
    setInputValue(selectedLocation.name);
    setLocation(selectedLocation.name);
    setFilteredCities([]);
  };

  useOnClickOutside(ref, () => {
    setFilteredCities([]);
  });

  return (
    <div className="relative w-full" ref={ref}>
      <div className="border border-gray-300 px-2 py-1 rounded-md w-full flex items-center justify-between">
        <input
          value={inputValue}
          placeholder="Enter Pickup Location"
          onChange={handleInputChange}
          className="outline-none text-gray-500 w-full"
        />
      </div>
      {inputValue && filteredCities.length > 0 && (
        <div className="absolute min-w-80 !z-50 h-auto overflow-y-auto ">
          <ul className="flex flex-col gap-2 max-h-60 my-2 border border-gray-300 px-4 py-3 rounded-md overflow-y-auto bg-white">
            {filteredCities.map((city, index) => (
              <div
                className="flex text-start justify-start gap-2 hover:bg-gray-200 p-1 rounded-md"
                key={index}
              >
                <img
                  src={LocationIcon}
                  alt="location-icon"
                  width={100}
                  height={100}
                  className="w-3 h-3 object-contain mt-1"
                />
                <li
                  onClick={() => handleLocationSelect(city)}
                  className="cursor-pointer text-gray-500 text-sm"
                >
                  {city.name}-{city.stateCode}
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
