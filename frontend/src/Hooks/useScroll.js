import {useState, useEffect} from "react";

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState("");

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }});

  return scrollPosition;
};

