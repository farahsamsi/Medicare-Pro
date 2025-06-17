"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function SetCalender() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="w-full flex justify-center">
      <Calendar onChange={setDate} value={date} />
    </div>
  );
}
