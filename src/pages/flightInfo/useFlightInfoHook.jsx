import { useEffect, useState } from "react";
import { getDurationInMinutes } from "../../hoc/FormatedDateDuration";

const useFlightInfoHook = (data) => {
  const minDistance = 60;
  /* -------------------------------------------------------------------------- */
  /*                                 Localstate                                 */
  /* -------------------------------------------------------------------------- */

  const [originalFlights, setOriginalFlights] = useState(data[0]?.data);
  const [flights, setFlights] = useState(originalFlights);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCriteria, setSelectedCriteria] = useState(null);
  const [showStops, setShowStops] = useState(true);
  const [selectedStops, setSelectedStops] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [durationRange, setDurationRange] = useState({ min: 0, max: 0 });
  const [duration, setDuration] = useState([0, 0]);
  const [showPrices, setShowPrices] = useState(true);
  const [showDurations, setShowDurations] = useState(true);
  const [maxPrice, setMaxRange] = useState(0);

  /* -------------------------------------------------------------------------- */
  /*                                handleChange                                */
  /* -------------------------------------------------------------------------- */

  const sortByCriteria = (criteria) => {
    const sortOrderDirection =
      selectedCriteria === criteria
        ? sortOrder === "asc"
          ? "desc"
          : "asc"
        : "asc";

    const sorted = [...flights]?.sort((a, b) => {
      let valueA, valueB;
      switch (criteria) {
        case "departure":
          valueA = new Date(a.itineraries[0].segments[0].departure.at);
          valueB = new Date(b.itineraries[0].segments[0].departure.at);
          break;
        case "duration":
          valueA = getDurationInMinutes(a.itineraries[0].duration);
          valueB = getDurationInMinutes(b.itineraries[0].duration);
          break;
        case "arrival":
          valueA = new Date(a.itineraries[0].segments[0].arrival.at);
          valueB = new Date(b.itineraries[0].segments[0].arrival.at);
          break;
        case "price":
          valueA = parseFloat(a.price.grandTotal);
          valueB = parseFloat(b.price.grandTotal);
          break;
        default:
          return 0;
      }
      return sortOrderDirection === "asc" ? valueA - valueB : valueB - valueA;
    });

    setFlights(sorted);
    setSortOrder(sortOrderDirection);
    setSelectedCriteria(criteria);
  };

  const handleStops = () => setShowStops(!showStops);

  const handleStopOptionClick = (selectedValue) => {
    setSelectedStops(selectedStops === selectedValue ? null : selectedValue);
  };

  const handlePrices = () => setShowPrices(!showPrices);

  const handlePriceChange = (event, newValue) => {
    setMaxRange(newValue);
  };

  const handleDuration = () => setShowDurations(!showDurations);

  const handleDurationChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setDuration([
        Math.min(newValue[0], duration[1] - minDistance),
        duration[1],
      ]);
    } else {
      setDuration([
        duration[0],
        Math.max(newValue[1], duration[0] + minDistance),
      ]);
    }
  };

  const handleShowAll = () => {
    setSelectedStops(null);
    setMaxRange(priceRange.max);
    setDuration([durationRange.min, durationRange.max]);
  };

  const handleClearSort = () => {
    setFlights(originalFlights);
    setSortOrder("asc");
    setSelectedCriteria(null);
  };

  /* -------------------------------------------------------------------------- */
  /*                                   Effect                                   */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    setOriginalFlights(data[0]?.data);
  }, [data]);

  useEffect(() => {
    const minPrice =
      originalFlights &&
      Math.min(
        ...originalFlights.map((flight) => parseFloat(flight.price.grandTotal))
      );
    const maxPrice =
      originalFlights &&
      Math.max(
        ...originalFlights?.map((flight) => parseFloat(flight.price.grandTotal))
      );

    const minDuration =
      originalFlights &&
      Math.min(
        ...originalFlights.map((flight) =>
          getDurationInMinutes(flight.itineraries[0].duration)
        )
      );
    const maxDuration =
      originalFlights &&
      Math.max(
        ...originalFlights.map((flight) =>
          getDurationInMinutes(flight.itineraries[0].duration)
        )
      );
    setPriceRange({ min: minPrice, max: maxPrice });
    setMaxRange(maxPrice);
    setDurationRange({ min: minDuration, max: maxDuration });
    setDuration([minDuration, maxDuration]);
  }, [originalFlights]);

  useEffect(() => {
    const filterFlights = () => {
      const filteredFlights =
        originalFlights &&
        originalFlights.filter((flight) => {
          const numberOfStops = flight.itineraries[0].segments.length - 1;
          const price = parseFloat(flight.price.grandTotal);
          const durations = getDurationInMinutes(
            flight.itineraries[0].duration
          );
          return (
            (selectedStops === null || numberOfStops === selectedStops) &&
            price <= maxPrice &&
            durations >= duration[0] &&
            durations <= duration[1]
          );
        });
      setFlights(filteredFlights);
    };
    filterFlights();
  }, [selectedStops, maxPrice, duration, originalFlights]);

  return {
    data: {
      flights,
      selectedCriteria,
      sortOrder,
      originalFlights,
      showStops,
      duration,
      showPrices,
      maxPrice,
      selectedStops,
      showDurations,
      priceRange,
      durationRange,
    },
    actions: {
      sortByCriteria,
      handleDurationChange,
      handleDuration,
      handlePrices,
      handlePriceChange,
      handleStopOptionClick,
      handleStops,
      handleShowAll,
      handleClearSort,
    },
  };
};

export default useFlightInfoHook;
