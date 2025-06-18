"use client";

import {
  useGetAllSubscriptionsQuery,
  useGetAllUserQuery,
} from "@/provider/query/authApi";
import { useEffect, useState } from "react";
import { FaUserMd, FaFileMedical } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

export default function AdminStatusCards() {
  const { data: users, isLoading, error } = useGetAllUserQuery();
  const { data: plans } = useGetAllSubscriptionsQuery();

  const [adminCount, setAdminCount] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);

  useEffect(() => {
    const superAdminCount = users?.filter(
      (user) => user.role === "super_admin"
    ).length;
    setAdminCount(superAdminCount);

    const doctorCountFromUsers = users?.filter(
      (user) => user.role === "doctor"
    ).length;
    setDoctorCount(doctorCountFromUsers);
  }, [users]);

  const stats = [
    {
      title: "Admins",
      icon: <RiAdminFill />,
      count: adminCount,
      color: "bg-rose-100",
      iconColor: "bg-rose-300 text-rose-800",
      description:
        "Number of platform administrators managing doctors, users, and subscriptions. ",
    },
    {
      title: "Doctors",
      icon: <FaUserMd />,
      count: doctorCount,
      color: "bg-amber-100",
      iconColor: "bg-amber-300 text-amber-800",
      description:
        "Number of Registered doctors actively using the platform and managing assistants. ",
    },

    {
      title: "Plans",
      icon: <FaFileMedical />,
      count: plans?.length,
      color: "bg-green-100",
      iconColor: "bg-green-300 text-green-800",
      description:
        "Number of Available subscription plans offered to doctors on Medicare Pro. ",
    },
  ];

  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Status Overview
      </h2>
      {isLoading ? (
        <div className="w-full min-h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-xl"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map(
            ({ title, icon, count, color, iconColor, description }) => {
              return (
                <div
                  key={title}
                  className={`rounded-lg p-4 ${color} flex flex-col justify-between`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${iconColor} `}
                    >
                      {icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold">
                        {count}{" "}
                        <span className="text-gray-600 font-normal">
                          {title}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full text-center">{description}</div>
                </div>
              );
            }
          )}
        </div>
      )}
    </section>
  );
}
