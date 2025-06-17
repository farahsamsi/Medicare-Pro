"use client";

import { FaUserMd, FaUserNurse, FaFileMedical } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

// TODO: make this dynamic
const stats = [
  {
    title: "Admins",
    icon: <RiAdminFill />,
    count: 40,
    total: 60,
    color: "bg-rose-100",
    iconColor: "bg-rose-300 text-rose-800",
    progressColor: "text-rose-400",
  },
  {
    title: "Doctors",
    icon: <FaUserMd />,
    count: 18,
    total: 30,
    color: "bg-amber-100",
    iconColor: "bg-amber-300 text-amber-800",
    progressColor: "text-amber-400",
  },

  {
    title: "Plans",
    icon: <FaFileMedical />,
    count: 5,
    total: 10,
    color: "bg-green-100",
    iconColor: "bg-green-300 text-green-800",
    progressColor: "text-green-400",
  },
];

export default function AdminStatusCards() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Status Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map(({ title, icon, count, color, iconColor }) => {
          return (
            <div
              key={title}
              className={`rounded-lg p-4 ${color} flex items-center justify-between`}
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
                    <span className="text-gray-600 font-normal">{title}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
