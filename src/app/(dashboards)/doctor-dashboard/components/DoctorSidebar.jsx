"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaUserMd,
  FaChartBar,
  FaFileMedical,
  FaHome,
  FaEnvelope,
  FaUserPlus,
} from "react-icons/fa";
import DoctorDashboardHeader from "./DoctorDashboardHeader";

export default function DoctorSidebar({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navLinks = [
    { label: "Dashboard", icon: <FaChartBar />, href: "/doctor-dashboard" },
    {
      label: "Add Assistant",
      icon: <FaUserPlus />,
      href: "/doctor-dashboard/add-assistant",
    },
    {
      label: "My Assistants",
      icon: <FaUserMd />,
      href: "/doctor-dashboard/my-assistants",
    },
    {
      label: "Subscription",
      icon: <FaFileMedical />,
      href: "",
    },
  ];

  return (
    <div className="min-h-screen flex bg-[#0b1120] text-white relative">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside
          className={`fixed top-0 left-0 h-full w-56 bg-[#0b1120] z-40 transform transition-transform duration-300 
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0`}
        >
          <div className="px-4 py-2 flex items-center justify-between ">
            <div className="text-2xl font-light">Medicare Pro</div>

            {/* Home link Button */}
            <div className="flex items-center gap-1">
              <Link
                href="/"
                className="w-10 h-10 flex items-center justify-center bg-[#121519] hover:bg-[#2a2d33] transition"
                title="Go To Home Page"
              >
                <FaHome className="text-xl " />
              </Link>
            </div>
          </div>
          <nav className="space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "hover:bg-white/5 text-gray-300"
                  }`}
                  //   onClick={() => setSidebarOpen(false)}
                >
                  <span className="text-base">{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>
      )}

      {/* Content Overlay (mobile) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      {/* Main content */}
      <main className="flex-1 bg-base-100 p-6 text-base-content">
        <DoctorDashboardHeader
          onMenuClick={toggleSidebar}
        ></DoctorDashboardHeader>
        {children}
      </main>
    </div>
  );
}
