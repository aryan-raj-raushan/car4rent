import React, { useState, useCallback, useEffect } from "react";

const ScrollToTop = ({minScrollY = 600}) => {
  const [scrollUp, setScrollUp] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const onPageScroll = useCallback(() => {
    setScrollUp(window.pageYOffset > minScrollY);
  }, [minScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, [onPageScroll]);

  return (
    <div
      onClick={scrollToTop}
      className={`scroll-up fixed bottom-5 sm:bottom-10 right-10 flex items-center justify-center bg-orange-500 border-4 border-white w-12 h-12 text-white text-2xl font-bold rounded-full cursor-pointer transition duration-300 z-50 ${
        scrollUp ? "block" : "hidden"
      }`}
    >
      ^
    </div>
  );
};

export default ScrollToTop;
