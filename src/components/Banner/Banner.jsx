const Banner = () => {
  return (
    <>
      <section className="banner-section bg-gray-800 py-16 text-white text-center w-full h-auto my-20">
        <div className="container max-w-screen-xl !my-0 !mx-auto py-0 px-1">
          <div className="banner-content text-white flex items-center justify-center w-full h-full">
            <div className="banner-content__text flex flex-col gap-4">
              <h2 className="text-4xl sm:text-5xl tracking-wide font-bold">
                Save big with our cheap car rental!
              </h2>
              <p className="text-xl sm:text-2xl mt-1">
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
