import { useState } from "react";
import { Tooltip, styled, tooltipClasses } from "@mui/material";
import { Fade } from "@mui/material";

const useFlightDetailsCardHook = ({ price, travelDetails }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { total } = price;
  const travelClass = travelDetails.fareDetailsBySegment[0].cabin;
  const { weight, weightUnit } =
    travelDetails.fareDetailsBySegment[0].includedCheckedBags;
  const travelType = travelDetails.travelerType;

  const calculateLayovers = (segments) => {
    return segments.slice(0, -1).map((segment, index) => {
      const arrivalTime = new Date(segment.arrival.at);
      const departureTime = new Date(segments[index + 1].departure.at);
      const layoverMinutes = Math.round(
        (departureTime - arrivalTime) / (1000 * 60)
      );
      const layoverHours = Math.floor(layoverMinutes / 60);
      const remainingMinutes = layoverMinutes % 60;
      return `${
        layoverHours > 0 ? layoverHours + "h" : ""
      } ${remainingMinutes}m`;
    });
  };

  const handlePrevent = (e) => e.stopPropagation();

  //   Tooltip component
  const handleKnowMore = () => {
    setIsOpen(!isOpen);
  };
  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip
      {...props}
      classes={{ popper: className }}
      placement="bottom-end"
      leaveDelay={200}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      arrow
      open={isOpen}
      onClose={() => setIsOpen(false)}
    />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 400,
    },
  });
  const roundToNearestHundreds = (num) => {
    return Math.round(num / 100) * 100;
  };
  const AirlineFee = roundToNearestHundreds(total) / 2;
  const forTwoHourFee = new Intl.NumberFormat("en-IN").format(
    roundToNearestHundreds(total) * 0.8
  );
  const changingFee = new Intl.NumberFormat("en-IN").format(
    roundToNearestHundreds(total) * 0.4
  );
  const formattedAirlineFee = new Intl.NumberFormat("en-IN").format(AirlineFee);
  const KnowMore = (
    <div className="flex flex-col gap-2 py-1">
      <div className="flex items-start gap-2 justify-around border-b pb-2 border-b-gray-300">
        <div className="flex flex-col gap-0.5">
          <p className="underline decoration-dashed underline-offset-4 pb-1">
            <strong>Cancellation fee per person:</strong>
          </p>
          <p>Airline Fee: ₹{formattedAirlineFee}</p>
          <p>Car4Rent Fee: ₹400</p>
          <p className="text-[0.64rem] text-gray-400">
            0 hours - 24hours: ₹{forTwoHourFee}
          </p>
          <p className="text-[0.64rem] text-gray-400">
            3 days - 365 days: ₹{formattedAirlineFee}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="underline decoration-dashed underline-offset-4 pb-1">
            <strong>Flight change fee per person:</strong>
          </p>
          <p>Airline Fee: ₹{changingFee}</p>
          <p>Car4Rent Fee: ₹400</p>
        </div>
      </div>

      <p className="px-2">
        <em className="text-gray-300">
          Cancellation/Flight change charges are indicative. Airline policy
          applicable during cancellation/ flight change will be final. We won't
          be able to accept cancellation/change requests 3 hours before flight
          departure.
        </em>
      </p>
    </div>
  );
  return {
    calculateLayovers,
    handleKnowMore,
    handlePrevent,
    travelClass,
    CustomWidthTooltip,
    KnowMore,
    weight,
    weightUnit,
    travelType,
  };
};

export default useFlightDetailsCardHook;
