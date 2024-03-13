import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

const Faq = () => {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id
      ? "max-h-[12rem] px-11 py-7 transition-all duration-500 ease-in-out "
      : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "bg-orange-600 text-white shadow-xl" : "";
  };

  return (
    <>
      <section
        className="faq-section bg-faq-section bg-no-repeat py-24 bg-auto bg-white"
        style={{ backgroundPosition: "0 70%" }}
      >
        <div className="container max-w-screen-xl !my-0 !mx-auto py-0 px-1">
          <div className="faq-content text-black flex flex-col">
            <div className="faq-content__title text-center max-w-[50rem] mx-auto flex flex-col leading-5">
              <h5 className="text-2xl font-bold">FAQ</h5>
              <h2 className="text-[42px] leading-[3rem] tracking-wide font-bold mb-5">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-gray-500">
                Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="all-questions flex flex-col items-center mt-16">
              <div className="faq-box w-full md:w-[50rem] cursor-pointer flex flex-col text-black bg-white shadow-[0_10px_15px_0_rgba(0,0,0,0.1)]">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question ${getClassQuestion(
                    "q1"
                  )} flex justify-between items-center px-11 py-4 transition-all duration-150 ease-in-out shadow-[0_3px_6px_0_rgba(0,0,0,0.1)]`}
                >
                  <p className="text-lg font-medium">
                    1. What is special about comparing rental car deals?
                  </p>
                  <IconChevronDown className="text-xl" />
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer(
                    "q1"
                  )} text-base font-normal font-rubik text-gray-700 px-11 overflow-hidden max-h-0 transition-all duration-500`}
                >
                  Comparing rental car deals is important as it helps find the
                  best deal that fits your budget and requirements, ensuring you
                  get the most value for your money. By comparing various
                  options, you can find deals that offer lower prices,
                  additional services, or better car models. You can find car
                  rental deals by researching online and comparing prices from
                  different rental companies.
                </div>
              </div>
              <div className="faq-box w-full md:w-[50rem] cursor-pointer flex flex-col text-black bg-white shadow-[0_10px_15px_0_rgba(0,0,0,0.1)]">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion(
                    "q2"
                  )} flex justify-between items-center px-11 py-4 transition-all duration-150 ease-in-out shadow-[0_3px_6px_0_rgba(0,0,0,0.1)]`}
                >
                  <p className="text-lg font-medium">
                    2. How do I find the car rental deals?
                  </p>
                  <IconChevronDown className="text-xl" />
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer(
                    "q2"
                  )} text-base font-normal font-rubik text-gray-700  px-11 overflow-hidden max-h-0 transition-all duration-500`}
                >
                  You can find car rental deals by researching online and
                  comparing prices from different rental companies. Websites
                  such as Expedia, Kayak, and Travelocity allow you to compare
                  prices and view available rental options. It is also
                  recommended to sign up for email newsletters and follow rental
                  car companies on social media to be informed of any special
                  deals or promotions.
                </div>
              </div>
              <div className="faq-box w-full md:w-[50rem] cursor-pointer flex flex-col text-black bg-white shadow-[0_10px_15px_0_rgba(0,0,0,0.1)]">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion(
                    "q3"
                  )} flex justify-between items-center px-11 py-4 transition-all duration-150 ease-in-out shadow-[0_3px_6px_0_rgba(0,0,0,0.1)]`}
                >
                  <p className="text-lg font-medium">
                    3. How do I find such low rental car prices?
                  </p>
                  <IconChevronDown className="text-xl" />
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer(
                    "q3"
                  )} text-base font-normal font-rubik text-gray-700  px-11 overflow-hidden max-h-0 transition-all duration-500`}
                >
                  Book in advance: Booking your rental car ahead of time can
                  often result in lower prices. Compare prices from multiple
                  companies: Use websites like Kayak, Expedia, or Travelocity to
                  compare prices from multiple rental car companies. Look for
                  discount codes and coupons: Search for discount codes and
                  coupons that you can use to lower the rental price. Renting
                  from an off-airport location can sometimes result in lower
                  prices.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
