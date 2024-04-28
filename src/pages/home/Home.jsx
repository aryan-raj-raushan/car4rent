import React from "react";
import Hero from "../../components/Hero-Section/Hero";
import BookCar from "../../components/Book-Car/BookCar";
import PlanTrip from "../../components/Plan-Trip/PlanTrip";
import PickCar from "../../components/Pick-Car/PickCar";
import Banner from "../../components/Banner/Banner";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Testimonials from "../../components/Testimonial/Testimonials";
import Faq from "../../components/Faq/Faq";
import Download from "../../components/Download-Banner/Download";

const Home = () => {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
    </>
  );
};

export default Home;
