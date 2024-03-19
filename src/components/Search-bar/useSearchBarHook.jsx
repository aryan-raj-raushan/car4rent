import { useState } from "react";
import {
  startOfDay,
  addDays,
  addHours,
  setHours,
  setMinutes,
  startOfHour,
} from "date-fns";

const useSearchBarHook = () => {
  const [option, setOption] = useState("");
  const [driveAge, setDriverAge] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(startOfDay(new Date()), 1));
  const initialPickupTime = addHours(startOfHour(new Date()), 1);
  const [pickupTime, setPickupTime] = useState(initialPickupTime);
  const initialDropoffTime = setHours(setMinutes(new Date(), 0), 12);
  const [dropoffTime, setDropoffTime] = useState(initialDropoffTime);

  const handlePickup = (event) => {
    setOption(event.target.value);
  };
  const handleAge = (event) => {
    setDriverAge(event.target.value);
  };

  const handleSearch = () => {
    const searchData = {
      pickup: option,
      ageGropup: driveAge,
      location: { pickupLocation, dropoffLocation },
      pickupDateTime: new Date(
        startDate.setHours(pickupTime.getHours(), pickupTime.getMinutes())
      ),
      dropoffDateTime: new Date(
        endDate.setHours(dropoffTime.getHours(), dropoffTime.getMinutes())
      ),
    };
    console.log("Search Data:", searchData);
  };

  const options = [
    { label: "Same Drop-off", value: "same" },
    { label: "Different Drop-off", value: "different" },
  ];
  const age = [
    { label: "26-65", value: "26-65" },
    { label: "18-25", value: "18-25" },
  ];

  return {
    option,
    age,
    driveAge,
    handleAge,
    options,
    pickupLocation,
    setPickupLocation,
    handlePickup,
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
  };
};

export default useSearchBarHook;
