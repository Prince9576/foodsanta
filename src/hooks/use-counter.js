import { useState, useEffect } from "react";

const useCounter = (forwads = true, timeout = 0) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevState) => {
        if (forwads) {
          return (prevState = prevState + timeout);
        } else {
          return (prevState = prevState - timeout);
        }
      });
    }, 1000);
    return () => {
      return clearTimeout(timer);
    };
  }, [forwads, timeout]);
  return counter;
};

export default useCounter;
