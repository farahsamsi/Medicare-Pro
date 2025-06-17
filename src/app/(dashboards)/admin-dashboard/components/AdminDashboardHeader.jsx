"use client";

import {
  FaBars,
  FaSyncAlt,
  FaTh,
  FaSearch,
  FaSlidersH,
  FaCommentDots,
} from "react-icons/fa";
import Image from "next/image";

export default function AdminDashboardHeader({ onMenuClick }) {
  return (
    <div className="w-full flex items-center justify-between px-4 py-3 bg-white shadow-sm border-b">
      {/* Left: Menu & Icons */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="text-gray-500 hover:text-black text-lg cursor-pointer"
        >
          <FaBars />
        </button>
        <FaSyncAlt className="text-gray-500 hover:text-black text-lg cursor-pointer" />
        <FaTh className="text-gray-500 hover:text-black text-lg cursor-pointer" />
        <div className="w-px h-5 bg-gray-300 mx-2" />
      </div>

      {/* Center field */}
      <div className="hidden md:flex items-center gap-2 text-gray-500 text-sm">
        <FaSearch />
        <span className="text-gray-500">Search Dashboard</span>
      </div>

      {/* Right: Profile & Actions */}
      <div className="flex items-center gap-4">
        {/* Profile Picture */}
        <div className="relative">
          <Image
            src="https://images.unsplash.com/vector-1740801152014-dd3a3246af19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-teal-500 border-2 border-white rounded-full" />
        </div>
        <FaSlidersH className="text-gray-500 hover:text-black text-lg cursor-pointer" />
        <FaCommentDots className="text-gray-500 hover:text-black text-lg cursor-pointer" />
      </div>
    </div>
  );
}
