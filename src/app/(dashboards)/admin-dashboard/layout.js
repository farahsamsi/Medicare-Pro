import AdminSidebarLayout from "./components/AdminSidebarLayout";
import SetCalender from "./components/SetCalender";
import SetClock from "./components/SetClock";

export default function AdminDashboardLayout({ children }) {
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
