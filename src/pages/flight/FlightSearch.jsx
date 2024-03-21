import React from "react";
import { DateRangeSelector } from "../../hoc/DatePicker";
import { SelectByDefault } from "../../hoc/DynamicSelect";
import { FiChevronDown } from "react-icons/fi";
import DatePicker from "react-datepicker";
import { CiCalendarDate } from "react-icons/ci";
import InputField from "./InputField";
import useFlightSearchHook from "./useFlightSearchHook";

const Search = () => {
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
  } = useFlightSearchHook();

  const travelClass = [
    { label: "Economy", value: "economy" },
    { label: "Business", value: "business" },
    { label: "Premium", value: "Premium_Economy" },
    { label: "First Class", value: "First" },
  ];
  const trips = [
    { label: "One Way", value: "one-way" },
    { label: "Round Trip", value: "round-trip" },
  ];
  const travelers = [
    { label: "Adults", type: "adults" },
    { label: "Children", sub: "(2-12)age", type: "children" },
    { label: "Infants", sub: "(0-2)age", type: "infants" },
  ];
  return (
    <section className="px-4 sm:px-10 mt-10">
      <div className="Container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Where you want to go?</h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <SelectByDefault
              label={"Trip"}
              options={trips}
              value={flightSearchData.travelType}
              handleChange={handleChange}
              name="travelType"
            />
            <SelectByDefault
              label={"Travel Class"}
              options={travelClass}
              value={flightSearchData.travelClass}
              handleChange={handleChange}
              name="travelClass"
            />
            <div
              className="relative cursor-pointer h-fit"
              onClick={handleOpen}
              ref={ref}
            >
              <p className="text-lg flex items-center text-gray-400 font-medium">
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
                  className="absolute bg-white z-50 border border-gray-300 px-4 py-3 min-w-48 flex gap-1 flex-col rounded-md shadow-md top-9"
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
                      <small className="text-gray-400 text-xs">
                        {counter.sub}
                      </small>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Search field */}
          <div className="flex items-center gap-4 w-full mb-4 ">
            <InputField
              placeHolder="Origin"
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
            />
            <InputField
              placeHolder={"Destination"}
              suggestions={destinationSuggestions}
              setSuggestions={setDestinationSuggestions}
              showSuggestions={showSuggestions}
              setShowSuggestions={setShowSuggestions}
              handleSelectSuggestion={(suggestion) =>
                handleSelectSuggestion(suggestion, "destination")
              }
              setValueType={setDestinationValue}
              valueType={destionationValue}
            />
            {flightSearchData.travelType === "one-way" ? (
              <div className="border border-gray-300 p-1 rounded-md cursor-pointer flex items-center">
                <CiCalendarDate className="inline-block mr-2" />
                <DatePicker
                  selected={flightSearchData.startDate}
                  onChange={(date) =>
                    handleChange({ target: { name: "startDate", value: date } })
                  }
                  placeholderText="Select Pick-up Date"
                  className="outline-none text-gray-500 text-base cursor-pointer w-36"
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
              />
            )}
            <button
              onClick={searchFlight}
              className="bg-orange-500 text-white px-8 py-2 rounded-md"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
