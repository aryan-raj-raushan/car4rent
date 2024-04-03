import React from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { Slider } from "@mui/material";

const FlightSortCard = ({ data, actions }) => {
  const {
    flights,
    originalFlights,
    showStops,
    durationRange,
    duration,
    showPrices,
    maxPrice,
    selectedStops,
    showDurations,
    priceRange,
  } = data;
  const {
    handleDuration,
    handleStopOptionClick,
    handleStops,
    handlePriceChange,
    handlePrices,
    handleDurationChange,
    handleShowAll,
  } = actions;
  const stopOptions = [
    { value: 0, label: "Non-stop" },
    { value: 1, label: "1 stop" },
    { value: 2, label: "2 stops" },
  ];
  const flightLength = flights && flights.length;
  const originalFlightsLength = originalFlights && originalFlights.length;
  return (
    <div className="flex flex-col gap-2 basis-1/5 h-full border px-7 py-4 sticky top-28 rounded-lg">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          <span className="font-medium text-gray-700"> {flightLength}</span> of{" "}
          <span className="font-medium text-gray-700">
            {originalFlightsLength}
          </span>{" "}
          flights
        </p>
        {flightLength !== originalFlightsLength && (
          <p
            className="text-xs font-light text-blue-600 cursor-pointer"
            onClick={handleShowAll}
          >
            Show all
          </p>
        )}
      </div>
      <div
        className="flex justify-between items-center text-gray-500 cursor-pointer duration-500 transition-all ease-in-out"
        onClick={handleStops}
      >
        <h6 className="font-semibold text-gray-500 text-sm">Stop</h6>
        <IconChevronDown
          className={`${
            showStops ? "rotate-180" : "rotate-0"
          } duration-200 text-xs`}
        />
      </div>
      <div
        className={`${
          showStops ? "max-h-[8rem]" : "max-h-0"
        } flex flex-col gap-2 cursor-pointer transition-all ease-in-out overflow-hidden duration-500 pb-1`}
      >
        {stopOptions.map((stopOption, index) => (
          <div key={index} className="flex items-center gap-2 ">
            <input
              type="checkbox"
              id={`stop-${stopOption.value}`}
              name="stopType"
              checked={selectedStops === stopOption.value}
              className="w-3 h-3 rounded cursor-pointer accent-black"
              onChange={() => handleStopOptionClick(stopOption.value)}
            />
            <label
              htmlFor={`stop-${stopOption.value}`}
              className="text-gray-500 text-sm cursor-pointer "
            >
              {stopOption.label}
            </label>
          </div>
        ))}
      </div>
      {/* Price */}
      <div className="flex flex-col gap-1 border-t-2 border-t-gray-200 pt-3">
        <div
          className="flex justify-between items-center text-gray-500 cursor-pointer duration-500 transition-all ease-in-out"
          onClick={handlePrices}
        >
          <h2 className="font-semibold text-sm text-gray-500">Price Range</h2>
          <IconChevronDown
            className={`${
              showPrices ? "rotate-180" : "rotate-0"
            } duration-200 text-xs`}
          />
        </div>
        <div
          className={`${
            showPrices ? "max-h-[6rem]" : "max-h-0"
          } flex flex-col gap-1 cursor-pointer transition-all ease-in-out overflow-hidden duration-500 pb-1`}
        >
          <h6 className="font-rubik text-sm font-light">
            Up to &#8377;{maxPrice}
          </h6>
          <div className="px-2">
            <Slider
              size="small"
              getAriaLabel={() => "Minimum price"}
              color="black"
              value={maxPrice}
              onChange={handlePriceChange}
              min={priceRange.min}
              max={priceRange.max}
            />
          </div>

          <div className="flex justify-between items-center text-xs font-light text-gray-500">
            <h6>&#8377; {priceRange.min}</h6>
            <h6>&#8377; {priceRange.max}</h6>
          </div>
        </div>
      </div>
      {/* Trip */}
      <div className="flex flex-col gap-1 border-t-2 border-t-gray-200 pt-3">
        <div
          className="flex justify-between items-center text-gray-500 cursor-pointer duration-500 transition-all ease-in-out"
          onClick={handleDuration}
        >
          <h2 className="font-semibold text-sm text-gray-500">Trip Duration</h2>
          <IconChevronDown
            className={`${
              showDurations ? "rotate-180" : "rotate-0"
            } duration-200 text-xs`}
          />
        </div>
        <div
          className={`${
            showDurations ? "max-h-[6rem]" : "max-h-0"
          } flex flex-col gap-1 cursor-pointer transition-all ease-in-out overflow-hidden duration-500 pb-1`}
        >
          <div className="flex items-center justify-between pt-1 px-1">
            <h6 className="text-xs text-gray-500 font-light">
              {Math.floor(duration[0] / 60)}h {duration[0] % 60}m
            </h6>
            <h6 className="text-xs text-gray-500 font-light">
              {Math.floor(duration[1] / 60)}h {duration[1] % 60}m
            </h6>
          </div>
          <div className="px-2">
            <Slider
              size="small"
              color="black"
              getAriaLabel={() => "Minimum duration"}
              value={duration}
              onChange={handleDurationChange}
              min={durationRange.min}
              max={durationRange.max}
              disableSwap
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSortCard;
