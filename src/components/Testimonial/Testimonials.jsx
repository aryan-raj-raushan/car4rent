import { IconQuote } from "@tabler/icons-react";
import { testimonialData } from "../../constant/TestimonialConst";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section px-2 py-8 lg:py-24 text-black">
        <div className="Container">
          <div className="testimonials-content flex flex-col w-full">
            <div className="testimonials-content__title flex flex-col text-center mb-12 max-w-[700px] mx-auto">
              <h4 className="text-lg lg:text-2xl -tracking-wide font-medium font-rubik">
                Reviewed by People
              </h4>
              <h2 className="text-2xl lg:text-[2.5rem] lg:leading-[3.25rem] tracking-wide font-bold mb-3.5">
                Client's Testimonials
              </h2>
              <p className="text-sm sm:text-base font-rubik text-gray-500 leading-snug">
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>

            <div className="all-testimonials flex lg:justify-center gap-7 p-2 lg:p-7 overflow-x-auto no-scrollbar w-full">
              {testimonialData.map((testimonial, index) => (
                <div
                  key={index}
                  className="all-testimonials__box flex flex-col justify-between bg-white shadow-xl w-full lg:w-[34rem] lg:py-14 lg:px-14 relative px-7 py-7 rounded-md lg:rounded-none gap-5 min-w-[20rem]"
                >
                  <span className="quotes-icon absolute hidden md:block text-6xl bottom-14 right-16 text-orange-500">
                    <IconQuote width={60} height={60} />
                  </span>
                  <p className="text-sm md:text-xl font-medium md:leading-[2rem] text-gray-500">
                    {testimonial.text}
                  </p>
                  <div className="all-testimonials__box__name__profile flex items-center gap-5">
                    <img
                      src={testimonial.img}
                      alt={`user_img_${index}`}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex flex-col">
                      <h4 className="text-lg font-bold">{testimonial.name}</h4>
                      <p className="text-gray-800 text-base font-rubik font-normal">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
