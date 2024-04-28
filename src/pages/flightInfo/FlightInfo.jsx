import React from "react";
import FlightInfoCard from "./FlightInfoCard";
import { useMyState } from "../../context/myState";
import { IoIosArrowRoundUp } from "react-icons/io";
import useFlightInfoHook from "./useFlightInfoHook";
import FlightSortCard from "./FlightSortCard";
import FlightSearchCard from "./FlightSearchCard";
import WarningSvg from "../../components/Svgs/Warning";
import { Link } from "react-router-dom";
// import { flightInfo as flightData } from "./data";

const FlightInfo = () => {
  const { flightData } = useMyState();
  const { data, actions } = useFlightInfoHook(flightData);
  const { flights, sortOrder, selectedCriteria } = data;
  const { handleClearSort, sortByCriteria, handleClearFilter } = actions;
  const criteriaList = [
    { key: "departure", label: "Departure" },
    { key: "duration", label: "Duration" },
    { key: "arrival", label: "Arrival" },
    { key: "price", label: "Price" },
  ];
  console.log(flightData)
  return (
    <>
      {flightData.length > 0 ? (
        <section className="py-5">
          <div className="Container">
            <div className="mb-8">
              <FlightSearchCard />
            </div>
            <div className="flex gap-8">
              <FlightSortCard data={data} actions={actions} />
              {/* Flight search data */}
              <div className="max-w-4xl flex gap-6 flex-col w-full flex-1">
                <ul className="flex items-center text-center gap-4 bg-slate-100 rounded-3xl py-1 text-sm sticky top-28  cursor-pointer z-30 font-poppins font-light">
                  <li className="basis-1/6 text-center">Airline</li>
                  {criteriaList.map((criteria, ind) => (
                    <li
                      key={ind}
                      className={`${
                        criteria.key === "duration"
                          ? "basis-[12%]"
                          : "basis-[16%]"
                      } ${
                        selectedCriteria === criteria.key ? "text-blue-500" : ""
                      }`}
                      onClick={() => sortByCriteria(criteria.key)}
                    >
                      {criteria.label}
                      {selectedCriteria === criteria.key && (
                        <IoIosArrowRoundUp
                          className={`inline-block duration-200 ${
                            sortOrder === "asc" ? "rotate-0" : "rotate-180"
                          }`}
                        />
                      )}
                    </li>
                  ))}
                  <li
                    onClick={handleClearSort}
                    className="text-xs text-blue-500 basis-[12%]"
                  >
                    Clear all
                  </li>
                </ul>
                {flightData.map((flightData, index) => {
                  const { dictionaries } = flightData;
                  return flights && flights.length > 0 ? (
                    flights.map((flight, num) => {
                      const [itineraries, returnItineraries] =
                        flight?.itineraries;
                      return (
                        <div key={`${index}-${num}`}>
                          {flight.itineraries.length === 1 && (
                            <FlightInfoCard
                              key={`${index}-${num}-one-way`}
                              data={flight}
                              dictionaries={dictionaries}
                              itineraries={itineraries}
                              journey="one-way"
                            />
                          )}
                          {flight.itineraries.length === 2 && (
                            <div className="flex flex-col border max-w-4xl gap-4 rounded-lg p-2">
                              <FlightInfoCard
                                key={`${index}-${num}-one-way`}
                                data={flight}
                                dictionaries={dictionaries}
                                itineraries={itineraries}
                                journey="one-way"
                              />

                              <FlightInfoCard
                                key={`${index}-${num}-two-way`}
                                data={flight}
                                dictionaries={dictionaries}
                                itineraries={returnItineraries}
                                journey="two-way"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div
                      key={`no-data-${index}`}
                      className="flex flex-col justify-center items-center min-h-96 gap-1 cursor-default"
                    >
                      <WarningSvg />
                      <h2 className="text-xl font-semibold pt-2 leading-tight text-gray-500">
                        We couldn't find flights to match your filters
                      </h2>
                      <p className="text-gray-500 text-sm">
                        Please reset your filters to see flights
                      </p>
                      <button
                        className="bg-black px-8 py-2 text-white duration-200 hover:shadow-lg rounded-lg shadow-md mt-4"
                        onClick={handleClearFilter}
                      >
                        Reset Filter
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-96 gap-1 cursor-default">
          <WarningSvg />
          <h2 className="text-xl font-semibold pt-2 leading-tight">
            Oops! No Results Found
          </h2>
          <p className="text-gray-500 text-sm">
            Sorry, we couldn't find any matching flights. Please try searching
            with different criteria.
          </p>

          <Link to={"/flight"}>
            <button className="bg-orange-400 px-8 py-2 text-white duration-200 hover:bg-orange-500 rounded-lg shadow-md mt-4">
              Back to Search
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default FlightInfo;
