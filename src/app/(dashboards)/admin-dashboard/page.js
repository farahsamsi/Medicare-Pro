import React from "react";
import AdminStatusCards from "./components/AdminStatusCards";

export default function AdminDashboardHomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold my-4 text-center">Admin Dashboard</h1>
      <AdminStatusCards></AdminStatusCards>
    </div>
  );
}
