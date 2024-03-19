import Flight from "../assets/illustrator/sidebar/flight.png";
import Stay from "../assets/illustrator/sidebar/stay.png";
import Explore from "../assets/illustrator/sidebar/explore.png";
import CarRental from "../assets/illustrator/sidebar/car.png";
import Heart from "../assets/illustrator/sidebar/heart.png";
import Flag from "../assets/illustrator/sidebar/india-flag.png";
import Package from "../assets/illustrator/sidebar/package.png";
import Time from "../assets/illustrator/sidebar/time.png";
import Discount from "../assets/illustrator/sidebar/discount.png";
import Beach from "../assets/illustrator/sidebar/beach.png";

export const menuItems = [
  { label: "Flight", image: Flight, className: "flight", url: "/flight" },
  { label: "Stays", image: Stay, className: "stays", url: "/stays" },
  {
    label: "Car Rental",
    image: CarRental,
    className: "car-rental",
    url: "/fleet",
  },
  { label: "Package", image: Package, className: "package", url: "/package" },
  { label: "Home", image: Beach, className: "home", url: "/" },
  { label: "Explore", image: Explore, className: "explore", url: "/explore" },
  { label: "Deals", image: Discount, className: "deals", url: "/deals" },
  {
    label: "Time to travel",
    image: Time,
    className: "best-time",
    url: "/time-to-travel",
  },
  { label: "Trips", image: Heart, className: "trips", url: "/trips" },
  { label: "English", image: Flag, className: "english", url: "" },
];
