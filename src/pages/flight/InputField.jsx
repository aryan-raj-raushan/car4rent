import React from "react";
import FlightIcon from "../../assets/illustrator/flightSearch/flight.png";
import axios from "axios";
import { getAccessToken } from "../../services/AmadeusService";
import { RiFlightTakeoffFill, RiFlightLandFill } from "react-icons/ri";

const InputField = ({
  valueType,
  handleSelectSuggestion,
  suggestions,
  showSuggestions,
  placeHolder,
  name,
  setSuggestions,
  setShowSuggestions,
  setValueType,
}) => {
  const handleInputChange = async (e) => {
    const { value } = e.target;
    setValueType(value);
    try {
      const accessToken = await getAccessToken();
      const response = await axios.get(
        `https://test.api.amadeus.com/v1/reference-data/locations`,
        {
          params: {
            subType: "AIRPORT",
            keyword: value,
            sort: "analytics.travelers.score",
            // view: "LIGHT",
            page: {
              offset: 0,
              limit: 10,
            },
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setSuggestions(response.data.data);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching origin suggestions:", error);
    }
  };

  return (
    <div className="relative w-full border border-gray-300 flex items-center p-2 rounded-md gap-2">
      {name === "origin" ? (
        <RiFlightTakeoffFill className="inline-block text-lg" />
      ) : (
        <RiFlightLandFill className="inline-block text-lg" />
      )}
      <input
        type="text"
        name={name}
        placeholder={placeHolder}
        value={valueType}
        onChange={handleInputChange}
        className=" text-base font-medium text-gray-500 capitalize outline-none w-full"
      />
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-14 max-h-60 bg-white border border-gray-300 rounded-md px-4 py-4 w-96 overflow-y-auto h-auto">
          <ul className=" flex flex-col gap-4 text-sm text-gray-500 h-full">
            {suggestions.map((suggestion) => {
              const { name, subType } = suggestion;
              const { cityName, countryCode } = suggestion.address;
              return (
                <li
                  key={suggestion.id}
                  className="hover:bg-gray-100 cursor-pointer p-1 rounded-lg flex items-center gap-2"
                  onClick={() => handleSelectSuggestion(suggestion)}
                >
                  <img
                    src={FlightIcon}
                    alt="flight-icon"
                    width={100}
                    height={100}
                    className="w-6 h-6 inline-block"
                  />
                  <p className="text-gray-400 font-medium">
                    {" "}
                    {name}
                    {subType} {cityName}/{countryCode} - {suggestion.iataCode}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputField;
