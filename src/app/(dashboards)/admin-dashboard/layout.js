import AdminSidebarLayout from "./components/AdminSidebarLayout";

export default function AdminDashboardLayout({ children }) {
  return (
    <AdminSidebarLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Main content */}
        <div className="lg:col-span-9">{children}</div>

        {/* Accessories */}
        <div className="lg:col-span-3"></div>
      </div>
    </AdminSidebarLayout>
  );
}
