import CarAudi from "../assets/images/cars-big/audia1.jpg";
import CarGolf from "../assets/images/cars-big/golf6.jpg";
import CarToyota from "../assets/images/cars-big/toyotacamry.jpg";
import CarBmw from "../assets/images/cars-big/bmw320.jpg";
import CarMercedes from "../assets/images/cars-big/benz.jpg";
import CarPassat from "../assets/images/cars-big/passatcc.jpg";
import {
  IconCar,
  IconMapPinFilled,
  IconCalendarEvent,
} from "@tabler/icons-react";

export const formFields = [
  {
    label: "Your Car Type",
    icon: IconCar,
    field: "carType",
    options: [
      "Audi A1 S-Line",
      "VW Golf 6",
      "Toyota Camry",
      "BMW 320 ModernLine",
      "Mercedes-Benz GLK",
      "VW Passat CC",
    ],
  },
  {
    label: "Pick-up",
    icon: IconMapPinFilled,
    field: "pickUp",
    options: ["Belgrade", "Novi Sad", "Nis", "Kragujevac", "Subotica"],
  },
  {
    label: "Drop-off",
    icon: IconMapPinFilled,
    field: "dropOff",
    options: ["Novi Sad", "Belgrade", "Nis", "Kragujevac", "Subotica"],
  },
  {
    label: "Pick-up",
    icon: IconCalendarEvent,
    field: "pickTime",
    type: "date",
  },
  {
    label: "Drop-off",
    icon: IconCalendarEvent,
    field: "dropTime",
    type: "date",
  },
];

export const detailsArray = (pickTime, dropTime, pickUp, dropOff) => [
  { title: "Pick-Up Date & Time", value: pickTime, input: true },
  { title: "Drop-Off Date & Time", value: dropTime, input: true },
  { title: "Pick-Up Location", value: pickUp, input: false },
  { title: "Drop-Off Location", value: dropOff, input: false },
];

export const modalFormFields = (formData) => [
  {
    label: "First Name",
    id: "name",
    name: "name",
    value: formData.name,
    type: "text",
    placeholder: "Enter your first name",
  },
  {
    label: "Last Name",
    id: "lastName",
    name: "lastName",
    value: formData.lastName,
    type: "text",
    placeholder: "Enter your last name",
  },
  {
    label: "Phone",
    id: "phone",
    name: "phone",
    value: formData.phone,
    type: "tel",
    placeholder: "Enter your phone number",
  },
  {
    label: "Age",
    id: "age",
    name: "age",
    value: formData.age,
    type: "number",
    placeholder: "Enter your age",
  },
  {
    label: "Email",
    id: "email",
    name: "email",
    value: formData.email,
    type: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Address",
    id: "address",
    name: "address",
    value: formData.address,
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    id: "city",
    name: "city",
    value: formData.city,
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Zip Code",
    id: "zipcode",
    name: "zipcode",
    value: formData.zipcode,
    type: "number",
    placeholder: "Enter your zip code",
  },
];

export const carImages = {
  "Audi A1 S-Line": CarAudi,
  "VW Golf 6": CarGolf,
  "Toyota Camry": CarToyota,
  "BMW 320 ModernLine": CarBmw,
  "Mercedes-Benz GLK": CarMercedes,
  "VW Passat CC": CarPassat,
};
