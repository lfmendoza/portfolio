import { useState, useEffect } from "react";

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [observedElements, setObservedElements] = useState([]);
  const [thresholds, setThresholds] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (observedElements.length === 0) return;

    const observers = observedElements.map((elementRef) => {
      const threshold = thresholds[elementRef.current?.id] || 0.1;
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible((prev) => ({
            ...prev,
            [elementRef.current?.id]: entry.isIntersecting,
          }));
        },
        { threshold }
      );
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
      return { observer, elementRef };
    });

    return () => {
      observers.forEach(({ observer, elementRef }) => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
        observer.disconnect();
      });
    };
  }, [observedElements, thresholds]);

  const observeElement = (elementRef, threshold = 0.1) => {
    setObservedElements((prev) => {
      if (!prev.includes(elementRef)) {
        return [...prev, elementRef];
      }
      return prev;
    });
    setThresholds((prev) => ({
      ...prev,
      [elementRef.current?.id]: threshold,
    }));
  };

  return { scrollY, isVisible, observeElement };
};
