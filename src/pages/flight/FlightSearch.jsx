import React, { useRef, useState } from "react";
import axios from "axios";
import { getAccessToken } from "../../services/AmadeusService";
import { DateRangeSelector } from "../../hoc/DatePicker";
import { SelectByDefault } from "../../hoc/DynamicSelect";
import { useOnClickOutside } from "usehooks-ts";
import { FiChevronDown } from "react-icons/fi";
import DatePicker from "react-datepicker";
import { CiCalendarDate } from "react-icons/ci";
import { toast } from "react-toastify";
import FlightIcon from "../../assets/illustrator/flightSearch/flight.png";

const Search = () => {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    startDate: new Date(),
    endDate: "",
    travelType: "one-way",
    adults: 1,
    children: 0,
    infants: 0,
    travelClass: "economy",
  });

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

  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false);
  const [originValue, setOriginValue] = useState("");

  const handleChange = async (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleInputChange = async (e) => {
    const { value } = e.target;
    setOriginValue(value);

    try {
      const accessToken = await getAccessToken();
      const response = await axios.get(
        `https://test.api.amadeus.com/v1/reference-data/locations`,
        {
          params: {
            subType: "AIRPORT",
            keyword: value,
            sort: "analytics.travelers.score",
            view: "LIGHT",
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
      setOriginSuggestions(response.data.data);
      setShowOriginSuggestions(true);
    } catch (error) {
      console.error("Error fetching origin suggestions:", error);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setFormData((prevState) => ({
      ...prevState,
      origin: suggestion.iataCode,
    }));
    setOriginValue(suggestion.iataCode);
    setOriginSuggestions([]);
    setShowOriginSuggestions(false);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlePrevent = (e) => {
    e.stopPropagation();
  };
  const handleCounterChange = (type, action) => {
    if (type === "adults" && action === "subtract" && formData[type] === 1) {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [type]:
        action === "add" ? prevData[type] + 1 : Math.max(0, prevData[type] - 1),
    }));
  };

  console.log(formData);

  const searchFlight = () => {
    const { origin, destination, startDate, endDate, travelType } = formData;
    if (!origin || !destination || !startDate) {
      toast.error("Please fill all mandatory fields.", { autoClose: 1500 });
      return;
    }
    if (travelType === "round-trip" && !endDate) {
      toast.error("Please fill the return date.", { autoClose: 1500 });
      return;
    }
    console.log("succesfully filled",formData);
  };
  const totalTravelers = formData.adults + formData.children + formData.infants;
  //   const searchFlight = async () => {
  //     setError(null); // Reset error state
  //     try {
  //       const accessToken = await getAccessToken();
  //       const response = await axios.get(
  //         `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}&adults=1&max=5`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         }
  //       );
  //       setFlights(response.data.data);
  //     } catch (error) {
  //       console.error("Error searching flights:", error);
  //       setError("Error searching flights. Please try again later.");
  //     }
  //   };

  useOnClickOutside(ref, handleClose);
  return (
    <section className="px-4 sm:px-10 mt-10">
      <div className="Container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Where you want to go?</h1>
        {formData.error && <div className="text-red-500">{formData.error}</div>}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <SelectByDefault
              label={"Trip"}
              options={trips}
              value={formData.travelType}
              handleChange={handleChange}
              name="travelType"
            />
            <SelectByDefault
              label={"Travel Class"}
              options={travelClass}
              value={formData.travelClass}
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
                            {formData[counter.type]}
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

          <div className="flex items-center gap-4 w-full mb-4 ">
            <div className="relative">
              <input
                type="text"
                name="origin"
                placeholder="Origin"
                value={originValue}
                onChange={handleInputChange}
                className="border rounded-md p-2 uppercase outline-none "
              />
              {showOriginSuggestions && originSuggestions.length > 0 && (
                <div className="absolute top-14 max-h-60 bg-white border border-gray-300 rounded-md px-4 py-4 w-96 overflow-y-auto h-auto">
                  <ul className=" flex flex-col gap-4 text-sm text-gray-500 h-full">
                    {originSuggestions.map((suggestion) => {
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
                            {subType} {cityName}/{countryCode} -{" "}
                            {suggestion.iataCode}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={formData.destination}
              onChange={handleChange}
              className="border rounded-md p-2 w-1/4 uppercase outline-none"
            />
            {formData.travelType === "one-way" ? (
              <div className="border border-gray-300 p-1 rounded-md cursor-pointer flex items-center">
                <CiCalendarDate className="inline-block mr-2" />
                <DatePicker
                  selected={formData.startDate}
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
                startDate={formData.startDate}
                endDate={formData.endDate}
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
