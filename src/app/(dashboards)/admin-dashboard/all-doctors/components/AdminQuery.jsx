"use client";

import {
  FaSearch,
  FaUser,
  FaFilter,
  FaCalendar,
  FaDownload,
  FaPlus,
} from "react-icons/fa";

export default function AdminQuery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-4 bg-base-100">
      {/* Left Controls */}
      {/* Search */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered pl-10 w-full"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
      </div>
      {/* center icons */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        {/* Status Filter */}
        <div className="dropdown dropdown-hover">
          <label
            tabIndex={0}
            className="btn btn-outline btn-sm flex gap-2 items-center"
          >
            <FaFilter />
            Status
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
          >
            <li>
              <a>Active</a>
            </li>
            <li>
              <a>Expired</a>
            </li>
            <li>
              <a>Pending</a>
            </li>
          </ul>
        </div>

        {/* Date Filter */}
        <div className="dropdown dropdown-hover">
          <label
            tabIndex={0}
            className="btn btn-outline btn-sm flex gap-2 items-center"
          >
            <FaCalendar />
            Date
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
          >
            <li>
              <a>Recent</a>
            </li>
            <li>
              <a>Oldest</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Buttons */}
      <div className="flex justify-center items-center gap-2">
        <button className="btn btn-primary btn-sm text-white font-bold">
          <FaPlus className="mr-2" /> Add Doctor
        </button>
      </div>
    </div>
  );
}
