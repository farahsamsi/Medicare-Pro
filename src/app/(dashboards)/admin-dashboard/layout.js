"use client";
import { useEffect, useState } from "react";
import AdminSidebarLayout from "./components/AdminSidebarLayout";
import SetCalender from "./components/SetCalender";
import SetClock from "./components/SetClock";
import { useRouter } from "next/navigation";

export default function AdminDashboardLayout({ children }) {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      const parsed = JSON.parse(userData);
      if (parsed?.role === "super_admin") {
        setIsAdmin(true);
      } else {
        router.replace("/");
      }
    } else {
      router.replace("/");
    }
  }, [router]);

  if (!isAdmin) return null;

  return (
    <AdminSidebarLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1">
        {/* Main content */}
        <div className="lg:col-span-9">{children}</div>

        {/* Accessories */}
        <div className="hidden lg:block lg:col-span-3">
          <SetClock></SetClock>
          <div className="divider"></div>
          <SetCalender></SetCalender>
        </div>
      </div>
    </AdminSidebarLayout>
  );
}
