import { useEffect, useState, useCallback, useRef } from "react";

const useHeroHook = () => {
  const [scrollUp, setScrollUp] = useState(false);
  const bookingSectionRef = useRef(null);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToBookingSection = useCallback(() => {
    if (bookingSectionRef.current) {
      bookingSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [bookingSectionRef]);

  const onPageScroll = useCallback(() => {
    setScrollUp(window.pageYOffset > 600);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, [onPageScroll]);
 
  return { scrollUp, scrollToTop, scrollToBookingSection };
};

export default useHeroHook;
