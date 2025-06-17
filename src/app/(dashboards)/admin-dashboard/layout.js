import AdminSidebarLayout from "./components/AdminSidebarLayout";
import SetClock from "./components/SetClock";

export default function AdminDashboardLayout({ children }) {
  return (
    <AdminSidebarLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1">
        {/* Main content */}
        <div className="lg:col-span-10">{children}</div>

        {/* Accessories */}
        <div className="lg:col-span-2">
          <SetClock></SetClock>
        </div>
      </div>
    </AdminSidebarLayout>
  );
}
