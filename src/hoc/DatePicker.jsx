import DatePicker from "react-datepicker";
import { CiCalendarDate } from "react-icons/ci";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { addDays } from "date-fns";

export const DateRangeSelector = ({
  setStartDate,
  setEndDate,
  endDate,
  setPickupTime,
  setDropoffTime,
  startDate,
  pickupTime,
  dropoffTime,
}) => {
  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (date > endDate) {
      setEndDate(addDays(date, 1));
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  const handleTimeChange = (time) => {
    setPickupTime(time);
  };

  const handleDropOffTIme = (time) => {
    setDropoffTime(time);
  };

  return (
    <div className="flex gap-4">
      <div className="border border-gray-300 p-1 rounded-md cursor-pointer flex items-center w-full">
        <CiCalendarDate className="inline-block mr-2" />
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          toggleCalendarOnIconClick
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          placeholderText="Select Pick-up Date"
          className="outline-none text-gray-500 text-base cursor-pointer w-28"
          dateFormat="dd-MM-yyyy"
          // shouldCloseOnSelect={false}
        />
        <div className="border-l pl-2">
          <DatePicker
            selected={pickupTime}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeFormat="HH:mm"
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="HH:mm"
            className="outline-none text-gray-500 text-base cursor-pointer w-12"
          />
        </div>
      </div>

      <div className="border border-gray-300 p-1 rounded-md cursor-pointer flex items-center">
        <CiCalendarDate className="inline-block mr-2" />
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Select Drop-off Date"
          className="outline-none text-gray-500 text-base cursor-pointer w-36"
          dateFormat="dd-MM-yyyy"
        />
        <div className="border-l pl-2">
          <DatePicker
            selected={dropoffTime}
            onChange={handleDropOffTIme}
            showTimeSelect
            showTimeSelectOnly
            timeFormat="HH:mm"
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="HH:mm"
            className="outline-none text-gray-500 text-base cursor-pointer w-12"
          />
        </div>
      </div>
    </div>
  );
};
