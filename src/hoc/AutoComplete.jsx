import React, { useRef } from "react";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import LocationIcon from "../assets/illustrator/autocomplete/location.png";
import { useOnClickOutside } from "usehooks-ts";

export const Autocomplete = ({ location, setLocation }) => {
  const ref = useRef(null);
  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    useGoogle({
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    });

  const handleInputChange = (e) => {
    getPlacePredictions({
      input: e.target.value,
      options: {
        types: ["(regions)"],
        componentRestrictions: { country: "in" },
        strictBounds: true,
      },
    });
    setLocation(e.target.value);
  };

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation.description);
    getPlacePredictions({ input: "" });
  };
  useOnClickOutside(ref, handleLocationSelect);
  return (
    <div className="relative w-full" ref={ref}>
      <div className="border border-gray-300 px-2 py-1 rounded-md w-full flex items-center justify-between">
        <input
          value={location}
          placeholder="Enter Pickup Location"
          onChange={handleInputChange}
          className="outline-none text-gray-500 w-full"
        />
        {isPlacePredictionsLoading && <span className="loader-small"></span>}
      </div>
      {placePredictions.length > 0 && (
        <div className="absolute min-w-80 !z-50 h-auto overflow-y-auto ">
          {!isPlacePredictionsLoading && (
            <ul className="flex flex-col gap-2 max-h-60 my-2 border border-gray-300 px-4 py-3 rounded-md overflow-y-auto bg-white">
              {placePredictions.map((item, index) => (
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
                    onClick={() => handleLocationSelect(item)}
                    className="cursor-pointer text-gray-500 text-sm"
                  >
                    {item.description}
                  </li>
                </div>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
