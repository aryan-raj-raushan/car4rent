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

const useFlightSearchHook = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {setLoading,setFlightData} = useMyState()

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
  }
  const [flightSearchData, setFlightSearchData] = useState(initialData);

  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [originValue, setOriginValue] = useState("");
  const [destionationValue, setDestinationValue] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'startDate' || name === 'endDate') {
      const formattedDate = format(new Date(value), 'yyyy-MM-dd');
      setFlightSearchData((prevState) => ({
        ...prevState,
        [name]: formattedDate,
      }));
    } else {
      setFlightSearchData((prevState) => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
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

  const searchFlight = async () => {
    const { origin, destination, startDate, endDate, travelType,adults, children,infants,travelClass,nonStop } =
      flightSearchData;
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
    dispatch(flightData(flightSearchData));
    try {
      const accessToken = await getAccessToken();
      const url = 'https://test.api.amadeus.com/v2/shopping/flight-offers';
      let params = {
        originLocationCode: origin,
        destinationLocationCode: destination,
        departureDate: startDate,
        adults: adults,
        children: children,
        infants: infants,
        travelClass: travelClass,
        nonStop: nonStop,
        currencyCode: 'INR',
        max: 250
      };
      if (travelType === 'return') {
        params.returnDate = endDate;
      }  
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };
      const response = await axios.get(url, { params, headers });
      setFlightData([response.data])
      navigate(`/flightinfo?origin=${origin}&destination=${destination}`);
      setLoading(false)
    } catch (error) {
      console.error("Error searching flights:", error);
      setError("Error searching flights. Please try again later.");
    } finally {
      setLoading(false);
    }
    console.log("successfully filled", flightSearchData);
    setFlightSearchData(initialData);
  }

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
    error
  };
};

export default useFlightSearchHook;



 //   const searchFlight = async () => {
      // setError(null); // Reset error state
      // try {
      //   const accessToken = await getAccessToken();
      //   const response = await axios.get(
      //     `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}&adults=1&max=5`,
      //     {
      //       headers: {
      //         Authorization: `Bearer ${accessToken}`,
      //       },
      //     }
      //   );
      //   setFlights(response.data.data);
      // } catch (error) {
      //   console.error("Error searching flights:", error);
      //   setError("Error searching flights. Please try again later.");
  //     }
    // }



    // https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=CCU&destinationLocationCode=DEL&departureDate=2024-03-28T14:19:28.000Z&adults=1&children=0&infants=0&travelClass=ECONOMY&nonStop=false&currencyCode=INR&max=250