const Banner = () => {
  return (
    <>
      <section className="banner-section bg-gray-800 py-12 lg:py-16 text-white text-center w-full h-auto my-14 lg:my-20">
        <div className="Container">
          <div className="banner-content text-white flex items-center justify-center w-full h-full">
            <div className="banner-content__text flex flex-col gap-4">
              <h2 className="text-xl sm:text-3xl lg:text-4xl lg:tracking-wide font-semibold lg:font-bold">
                Save big with our cheap car rental!
              </h2>
              <p className="text-lg sm:text-2xl mt-1">
                Top Airports. Local Suppliers.{" "}
                <span className="text-orange-500 font-medium">24/7</span>{" "}
                Support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
