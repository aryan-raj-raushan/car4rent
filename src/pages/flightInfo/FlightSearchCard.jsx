import React from "react";
import {
  travelClass,
  trips,
  travelers,
} from "../../constant/FlightSearchConst";
import { DateRangeSelector } from "../../hoc/DatePicker";
import { SelectSearch } from "../../hoc/DynamicSelect";
import { FiChevronDown } from "react-icons/fi";
import InputField from "../../hoc/InputField";
import { CiCalendarDate } from "react-icons/ci";
import DatePicker from "react-datepicker";
import useFlightSearchCardHook from "./useFlightSearchCardHook";

const FlightSearchCard = () => {
  const {
    flightSearchData,
    originSuggestions,
    setOriginSuggestions,
    setOriginValue,
    handleSelectSuggestion,
    setShowSuggestions,
    showSuggestions,
    originValue,
    destinationSuggestions,
    setDestinationSuggestions,
    setDestinationValue,
    destionationValue,
    handleChange,
    searchFlight,
    handleOpen,
    ref,
    totalTravelers,
    open,
    handlePrevent,
    handleCounterChange,
  } = useFlightSearchCardHook();
  return (
    <div className="flex gap-4 items-center mx-auto justify-center">
      <div className="flex items-center gap-4">
        <SelectSearch
          label={"Trip"}
          options={trips}
          value={flightSearchData.travelType}
          handleChange={handleChange}
          name="travelType"
        />
        <SelectSearch
          label={"Travel Class"}
          options={travelClass}
          value={flightSearchData.travelClass}
          handleChange={handleChange}
          name="travelClass"
        />
        <div
          className="relative cursor-pointer h-fit w-fit"
          onClick={handleOpen}
          ref={ref}
        >
          <p className="text-sm flex items-center w-fit text-gray-400 font-medium">
            {totalTravelers} {totalTravelers > 1 ? "Travelers" : "Traveler"}
            <span
              className={`inline-block ml-2 duration-200 transition ${
                open ? "rotate-180" : "rotate-0"
              }`}
            >
              <FiChevronDown />
            </span>
          </p>
          {open && (
            <div
              className="absolute bg-white z-40 border border-gray-300 px-4 py-3 min-w-48 flex gap-1 flex-col rounded-md shadow-md top-9 "
              onClick={handlePrevent}
            >
              {travelers.map((counter) => (
                <div className="" key={counter.type}>
                  <div className="flex items-center justify-between">
                    <h6 className="text-base font-medium text-gray-500">
                      {counter.label}:{" "}
                    </h6>

                    <div className="w-2/5 flex items-center justify-between text-lg leading-tight">
                      <button
                        onClick={(e) =>
                          handleCounterChange(counter.type, "subtract")
                        }
                        className="text-gray-400 text-2xl leading-tight h-fit"
                      >
                        -
                      </button>
                      <span className="text-gray-500 font-semibold">
                        {flightSearchData[counter.type]}
                      </span>
                      <button
                        onClick={(e) =>
                          handleCounterChange(counter.type, "add")
                        }
                        className="text-gray-400 text-2xl leading-tight h-fit"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <small className="text-gray-400 text-xs">{counter.sub}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Search field */}
      <div className="flex items-center gap-4">
        <InputField
          placeHolder="Where from?"
          name="origin"
          suggestions={originSuggestions}
          setSuggestions={setOriginSuggestions}
          setValueType={setOriginValue}
          handleSelectSuggestion={(suggestion) =>
            handleSelectSuggestion(suggestion, "origin")
          }
          setShowSuggestions={setShowSuggestions}
          showSuggestions={showSuggestions}
          valueType={originValue}
          className="classes"
        />
        <InputField
          placeHolder="Where to?"
          suggestions={destinationSuggestions}
          setSuggestions={setDestinationSuggestions}
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
          handleSelectSuggestion={(suggestion) =>
            handleSelectSuggestion(suggestion, "destination")
          }
          setValueType={setDestinationValue}
          valueType={destionationValue}
          className="classes"
        />
        {flightSearchData.travelType === "one-way" ? (
          <div className="border border-gray-300 p-1 rounded-md cursor-pointer flex items-center z-40">
            <CiCalendarDate className="inline-block mr-2" />
            <DatePicker
              selected={flightSearchData.startDate}
              onChange={(date) =>
                handleChange({
                  target: { name: "startDate", value: date },
                })
              }
              placeholderText="Pick-up Date"
              className="outline-none text-gray-500 text-xs cursor-pointer w-24 "
              dateFormat="dd-MM-yyyy"
              name="startDate"
              minDate={new Date()}
            />
          </div>
        ) : (
          <DateRangeSelector
            startDate={flightSearchData.startDate}
            endDate={flightSearchData.endDate}
            setEndDate={(date) =>
              handleChange({ target: { name: "endDate", value: date } })
            }
            setStartDate={(date) =>
              handleChange({ target: { name: "startDate", value: date } })
            }
            className="classes"
          />
        )}
        <button
          onClick={searchFlight}
          className="bg-black text-white text-sm px-6 py-1 rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FlightSearchCard;
