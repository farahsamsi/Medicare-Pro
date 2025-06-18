"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";

import { useGetAllUserQuery } from "@/provider/query/authApi";

import {
  FaSearch,
  FaUser,
  FaFilter,
  FaCalendar,
  FaDownload,
  FaPlus,
} from "react-icons/fa";
import Link from "next/link";

export default function AllDoctorsPage() {
  const { data: users, isLoading } = useGetAllUserQuery();
  const [doctors, setDoctors] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [subscriptionFilter, setSubscriptionFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("");

  const getSubscriptionStatus = (endDate) => {
    const today = moment();
    const end = moment(endDate);
    const daysLeft = end.diff(today, "days");

    if (daysLeft < 0) return "Expired";
    if (daysLeft <= 7) return "Expiring Soon";
    return "Active";
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Active":
        return "badge-success";
      case "Expiring Soon":
        return "badge-warning";
      case "Expired":
        return "badge-error";
      default:
        return "badge-ghost";
    }
  };

  useEffect(() => {
    if (!users) return;

    // Get only doctors
    let result = users?.filter((user) => user?.role === "doctor");

    // search based on doctor name
    if (searchTerm) {
      result = result?.filter((doctor) =>
        doctor?.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // subscription expiry filter
    const today = moment();
    if (subscriptionFilter !== "all") {
      result = result?.filter((doctor) => {
        const end = moment(doctor?.subscription?.endDate);
        const diff = end.diff(today, "days");

        if (subscriptionFilter === "expired") return diff < 0;
        if (subscriptionFilter === "7days") return diff >= 0 && diff <= 7;
        if (subscriptionFilter === "15days") return diff >= 0 && diff <= 15;
        if (subscriptionFilter === "30days") return diff >= 0 && diff <= 30;
        return true;
      });
    }

    // sorting based on expiry date
    if (sortOrder) {
      result = result?.sort((a, b) => {
        const dateA = new Date(a.subscription?.endDate);
        const dateB = new Date(b.subscription?.endDate);
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      });
    }

    setDoctors(result);
  }, [users, searchTerm, subscriptionFilter, sortOrder]);

  return (
    <div className="py-5">
      <h1 className="text-xl font-bold text-center">All Doctors</h1>
      {/* query bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-4 bg-base-100">
        {/* Left Controls */}
        {/* Search based on name: Functional */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered pl-10 w-full"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
        {/* center icons */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          {/* Status Filter: functional */}
          <div className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className="btn btn-outline btn-sm flex gap-2 items-center"
            >
              <FaFilter />
              Filter
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48"
            >
              <li>
                <a onClick={() => setSubscriptionFilter("all")}>All</a>
              </li>
              <li>
                <a onClick={() => setSubscriptionFilter("expired")}>Expired</a>
              </li>
              <li>
                <a onClick={() => setSubscriptionFilter("7days")}>
                  Expiring in 7 days
                </a>
              </li>
              <li>
                <a onClick={() => setSubscriptionFilter("15days")}>
                  Expiring in 15 days
                </a>
              </li>
              <li>
                <a onClick={() => setSubscriptionFilter("30days")}>
                  Expiring in 30 days
                </a>
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
              Sort
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48"
            >
              <li>
                <a onClick={() => setSortOrder("asc")}>
                  Expiry Date Ascending (Soonest)
                </a>
              </li>
              <li>
                <a onClick={() => setSortOrder("desc")}>
                  Expiry Date Descending (Latest)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Buttons : Add doctor */}
        <div className="flex justify-center items-center gap-2">
          <Link href="/admin-dashboard/add-doctor">
            <button className="btn btn-primary btn-sm text-white font-bold">
              <FaPlus className="mr-2" /> Add Doctor
            </button>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        {doctors?.length === 0 ? (
          <h1 className="text-error text-2xl text-center">No Result Found</h1>
        ) : (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                {/* <th>Specialization</th> */}
                <th>Status</th>
                <th>Subscription Start </th>
                <th>Subscription End </th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {isLoading ? (
                <tr className="w-full min-h-screen flex justify-center items-center">
                  <span className=" loading loading-ring loading-xl"></span>
                </tr>
              ) : (
                doctors?.map((doctor, index) => (
                  <tr className="hover:bg-base-300" key={doctor?._id}>
                    <th>{index + 1}</th>
                    <td>{doctor?.name}</td>
                    <td>{doctor?.email}</td>
                    {/* <td>Dentist</td> */}

                    <td>
                      {(() => {
                        const status = getSubscriptionStatus(
                          doctor?.subscription?.endDate
                        );
                        const badgeClass = getStatusBadgeClass(status);
                        return (
                          <div className={`badge ${badgeClass}`}>{status}</div>
                        );
                      })()}
                    </td>

                    <td>
                      {moment(doctor?.subscription?.startDate).format(
                        "MMMM D, YYYY"
                      )}
                    </td>
                    <td>
                      {moment(doctor?.subscription?.endDate).format(
                        "MMMM D, YYYY"
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
