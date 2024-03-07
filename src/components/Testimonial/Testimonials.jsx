import { IconQuote } from "@tabler/icons-react";
import Img2 from "../../assets/images/testimonials/pfp1.jpg";
import Img3 from "../../assets/images/testimonials/pfp2.jpg";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section bg-[#f8f8f8] py-24 text-black">
        <div className="container max-w-screen-xl !my-0 !mx-auto py-0 px-1">
          <div className="testimonials-content flex flex-col">
            <div className="testimonials-content__title flex flex-col text-center mb-12 max-w-[700px] mx-auto">
              <h4 className="text-2xl -tracking-wide font-medium font-rubik">
                Reviewed by People
              </h4>
              <h2 className="text-[2.5rem] leading-[3.25rem] tracking-wide font-bold mb-3.5">
                Client's Testimonials
              </h2>
              <p className="text-base font-rubik text-gray-500 leading-snug">
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>

            <div className="all-testimonials flex justify-center gap-7 lg:p-7 w-full">
              <div className="all-testimonials__box flex flex-col justify-between bg-white shadow-xl w-[34rem] lg:py-14 lg:px-14 relative py-12 px-7 gap-5">
                <span className="quotes-icon absolute hidden xs:block text-6xl bottom-14 right-16 text-orange-500">
                  <IconQuote width={60} height={60} />
                </span>
                <p className="text-xl font-medium leading-[2rem]">
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable."
                </p>
                <div className="all-testimonials__box__name__profile flex items-center gap-5">
                  <img
                    src={Img2}
                    alt="user_img"
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-lg font-bold">Harry Potter</h4>
                    <p className="text-gray-800 text-base font-rubik font-normal">
                      Belgrade
                    </p>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box hidden lg:flex flex-col justify-between bg-white shadow-xl w-[34rem] lg:py-14 lg:px-14 relative py-12 px-7 gap-5">
                <span className="quotes-icon absolute hidden xs:block text-6xl bottom-14 right-16 text-orange-500">
                  <IconQuote width={60} height={60} />
                </span>
                <p className="text-xl font-medium leading-[2rem]">
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
                <div className="all-testimonials__box__name__profile flex items-center gap-5 ">
                  <img
                    src={Img3}
                    alt="user_img"
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-lg font-bold">Ron Wizzly</h4>
                    <p className="text-gray-800 text-base font-rubik font-normal">
                      Novi Sad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
