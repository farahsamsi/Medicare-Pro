"use client";
import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

export default function SetClock() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-full p-2 flex items-center justify-center">
      <Clock value={value} renderNumbers={true} />;
    </div>
  );
}
