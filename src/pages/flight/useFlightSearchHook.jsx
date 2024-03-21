import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { toast } from "react-toastify";

const useFlightSearchHook = () => {
  const ref = useRef(null);
  const [flightSearchData, setFlightSearchData] = useState({
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

  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [originValue, setOriginValue] = useState("");
  const [destionationValue, setDestinationValue] = useState("");

  const handleChange = async (e) => {
    const { name, value, type, checked } = e.target;
    setFlightSearchData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectSuggestion = (suggestion, fieldName) => {
    setFlightSearchData((prevState) => ({
      ...prevState,
      [fieldName]: suggestion.iataCode,
    }));

    if (fieldName === "origin") {
      setOriginValue(`${suggestion.name} - ${suggestion.iataCode}`);
      setOriginSuggestions([]);
    } else if (fieldName === "destination") {
      setDestinationValue(`${suggestion.name} - ${suggestion.iataCode}`);
      setDestinationSuggestions([]);
    }
    setShowSuggestions(false);
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

  const searchFlight = () => {
    const { origin, destination, startDate, endDate, travelType } =
      flightSearchData;
    if (!origin || !destination || !startDate) {
      toast.error("Please fill all mandatory fields.", { autoClose: 1500 });
      return;
    }
    if (travelType === "round-trip" && !endDate) {
      toast.error("Please fill the return date.", { autoClose: 1500 });
      return;
    }
    console.log("succesfully filled", flightSearchData);
  };
  const totalTravelers =
    flightSearchData.adults +
    flightSearchData.children +
    flightSearchData.infants;
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
  };
};

export default useFlightSearchHook;
