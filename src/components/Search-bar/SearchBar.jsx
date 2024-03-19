import React from "react";
import { DateRangeSelector } from "../../hoc/DatePicker";
import { Autocomplete } from "../../hoc/AutoComplete";
import useSearchBarHook from "./useSearchBarHook";
import { DynamicSelect } from "../../hoc/DynamicSelect";

const SearchBar = () => {
  const {
    pickupLocation,
    setPickupLocation,
    dropoffLocation,
    setDropoffLocation,
    startDate,
    endDate,
    setDropoffTime,
    setPickupTime,
    setEndDate,
    setStartDate,
    pickupTime,
    dropoffTime,
    handleSearch,
    option,
    options,
    handlePickup,
    age,
    driveAge,
    handleAge,
  } = useSearchBarHook();

  return (
    <section className="h-full w-full">
      <div className="Container">
        <div className="mx-auto">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <DynamicSelect
                label="Pickup"
                options={options}
                value={option}
                onChange={handlePickup}
              />
              <DynamicSelect
                label="Driver's age"
                options={age}
                value={driveAge}
                onChange={handleAge}
              />
            </div>

            <div className="flex items-center gap-6 mt-3 justify-between ">
              <div className="flex items-center gap-4 lg:max-w-4xl flex-1">
                <Autocomplete
                  location={pickupLocation}
                  setLocation={setPickupLocation}
                />
                {option && option === "different" && (
                  <Autocomplete
                    location={dropoffLocation}
                    setLocation={setDropoffLocation}
                  />
                )}
              </div>
              <DateRangeSelector
                setDropoffTime={setDropoffTime}
                setPickupTime={setPickupTime}
                startDate={startDate}
                endDate={endDate}
                setEndDate={setEndDate}
                setStartDate={setStartDate}
                pickupTime={pickupTime}
                dropoffTime={dropoffTime}
              />
              <button
                onClick={handleSearch}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded "
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
