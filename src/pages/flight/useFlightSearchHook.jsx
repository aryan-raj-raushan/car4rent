import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { toast } from "react-toastify";
import { useMyState } from "../../context/myState";
import { getAccessToken } from "../../services/AmadeusService";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {flightData} from "../../redux/flightSlice"
import { format } from "date-fns";
import { flightData as flightInfoData } from "./data";

const useFlightSearchHook = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setLoading, setFlightData } = useMyState();

  const initialData = {
    origin: "",
    destination: "",
    startDate: new Date(),
    endDate: "",
    travelType: "one-way",
    adults: 1,
    children: 0,
    infants: 0,
    travelClass: "ECONOMY",
    nonStop: false,
    arrivalAirport: "",
    departureAirport: "",
  };
  const [flightSearchData, setFlightSearchData] = useState(initialData);
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [originValue, setOriginValue] = useState("");
  const [destionationValue, setDestinationValue] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "startDate" || name === "endDate") {
      setFlightSearchData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setFlightSearchData((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSelectSuggestion = (suggestion, fieldName) => {
    const { cityName, countryCode } = suggestion.address;
    setFlightSearchData((prevState) => ({
      ...prevState,
      [fieldName]: suggestion.iataCode,
      [fieldName === "origin" ? "departureAirport" : "arrivalAirport"]:
        suggestion.name,
    }));
    if (fieldName === "origin") {
      setOriginValue(`${suggestion.iataCode} - ${cityName},${countryCode}`);
      setOriginSuggestions([]);
    } else if (fieldName === "destination") {
      setDestinationValue(
        `${suggestion.iataCode} - ${cityName},${countryCode}`
      );
      setDestinationSuggestions([]);
    }
    setShowSuggestions(false);
  };

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
    if (
      type === "adults" &&
      action === "subtract" &&
      flightSearchData[type] === 1
    ) {
      return;
    }
    setFlightSearchData((prevData) => ({
      ...prevData,
      [type]:
        action === "add" ? prevData[type] + 1 : Math.max(0, prevData[type] - 1),
    }));
  };

  const totalTravelers =
    flightSearchData.adults +
    flightSearchData.children +
    flightSearchData.infants;

  const formattedDate = (date) => {
    return format(date, "yyyy-MM-dd");
  };

  const searchFlight = async () => {
    const {
      origin,
      destination,
      startDate,
      endDate,
      travelType,
      adults,
      children,
      infants,
      travelClass,
      nonStop,
    } = flightSearchData;
    if (!origin || !destination) {
      toast.error(
        `Please select an ${
          !origin ? "origin" : "destination"
        } from the suggestions.`,
        {
          autoClose: 1500,
        }
      );
      return;
    }
    if (!startDate) {
      toast.error("Please select a start date.", { autoClose: 1500 });
      return;
    }
    if (travelType === "round-trip" && !endDate) {
      toast.error("Please fill the return date.", { autoClose: 1500 });
      return;
    }
    setError(null);
    setLoading(true);
    const formattedStartDate = formattedDate(startDate);
    const formattedEndDate =
      travelType === "round-trip" ? formattedDate(endDate) : null;
    dispatch(
      flightData({
        origin,
        destination,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        travelType,
        adults,
        children,
        infants,
        travelClass,
        nonStop,
      })
    );
    try {
      // const accessToken = await getAccessToken();
      // const url = "https://test.api.amadeus.com/v2/shopping/flight-offers";

      // let params = {
      //   originLocationCode: origin,
      //   destinationLocationCode: destination,
      //   departureDate: formattedDate(startDate),
      //   adults: adults,
      //   children: children,
      //   infants: infants,
      //   travelClass: travelClass,
      //   nonStop: nonStop,
      //   currencyCode: "INR",
      //   max: 250,
      // };
      // if (travelType === "round-trip") {
      //   params.returnDate = formattedDate(endDate);
      // }
      // const headers = {
      //   Authorization: `Bearer ${accessToken}`,
      // };
      // const response = await axios.get(url, { params, headers });
      // setFlightData([response.data]);
      setFlightData(flightInfoData);
      let url = `/flightinfo?origin=${origin}&destination=${destination}&departure=${formattedDate(
        startDate
      )}`;
      if (travelType === "round-trip" && endDate) {
        url += `&return=${formattedDate(endDate)}`;
      }
      navigate(url);
      setLoading(false);
    } catch (error) {
      console.error("Error searching flights:", error);
      setError("Error searching flights. Please try again later.");
    } finally {
      setLoading(false);
    }
    console.log("successfully filled", flightSearchData);
    setFlightSearchData(initialData);
  };

  useOnClickOutside(ref, handleClose);

  return {
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
    error,
  };
};

export default useFlightSearchHook;