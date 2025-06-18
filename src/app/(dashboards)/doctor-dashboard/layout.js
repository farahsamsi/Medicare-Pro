import SetCalender from "../admin-dashboard/components/SetCalender";
import DoctorSidebar from "./components/DoctorSidebar";

export default function DoctorDashboardLayout({ children }) {
  return (
    <DoctorSidebar>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1">
        {/* Main content */}
        <div className="lg:col-span-9">{children}</div>

        {/* Accessories */}
        <div className="hidden lg:block lg:col-span-3">
          <SetCalender></SetCalender>
        </div>
      </div>
    </DoctorSidebar>
  );
}
