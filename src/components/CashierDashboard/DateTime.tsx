import React, { useState, useEffect } from "react";

type Props = {
  time: Date; // Use Date type for the time prop
};
const Time = ({ time: initial }: Props) => {
  const [time, setTime] = useState(initial);
  useEffect(() => {
    console.log("Time", new Date().getTime());
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount
  const formatDate = (date: Date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-2xl">{formatDate(time)}</div>
      <div className="text-5xl">{time.toLocaleTimeString()}</div>
    </div>
  );
};
export default Time;
