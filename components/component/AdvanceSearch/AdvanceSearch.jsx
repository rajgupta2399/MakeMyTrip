"use client";
import React from "react";
import { useTheme } from "next-themes";
import { CheckInDate } from "../Carousel/CheckInDate";
import { CheckOutDate } from "../Carousel/CheckOutDate";
import Occupancy from "../Carousel/Occupancy";

const AdvanceSearch = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`absolute left-1/2 transform -translate-x-1/2 p-4 flex flex-col sm:flex-row sm:gap-4 items-center justify-between sm:-mt-24 sm:relative z-[100] w-[85%] rounded-lg ${
        theme === "light"
          ? "bg-white text-[#1D232A]"
          : "bg-[#30373e] text-white"
      }`}
    >
      <div className="flex-1">
        <label
          className={`block text-sm font-medium ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          CheckIn Date
        </label>
        <CheckInDate />
      </div>
      <div className="flex-1">
        <label
          className={`block text-sm font-medium ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          CheckOut Date
        </label>
        <CheckOutDate />
      </div>
      <div className="flex-1">
        <label
          className={`block text-sm font-medium ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          Guest
        </label>
        <Occupancy />
      </div>
    </div>
  );
};

export default AdvanceSearch;
