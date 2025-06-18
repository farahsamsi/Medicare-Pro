"use client";
import { useGetDoctorMySiteQuery } from "@/provider/query/authApi";
import moment from "moment";
import {
  FaUserMd,
  FaEnvelope,
  FaCheckCircle,
  FaIdBadge,
  FaCalendarAlt,
} from "react-icons/fa";

export default function DoctorDashboardHomePage() {
  const { data, isLoading } = useGetDoctorMySiteQuery();
  const { doctor } = data;

  const { name, email, role, status, subscription, createdAt, updatedAt } =
    doctor || {};

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-6">
      {/* Welcome Header */}
      <h2 className="text-3xl font-bold text-primary text-center">
        Welcome, {name}
      </h2>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center gap-4">
          <FaUserMd className="text-blue-500 text-xl" />
          <div>
            <p className="text-sm text-gray-500">Role</p>
            <p className="font-semibold capitalize">{role}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaEnvelope className="text-blue-500 text-xl" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold">{email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaIdBadge className="text-blue-500 text-xl" />
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p className="badge badge-success capitalize">{status}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaCalendarAlt className="text-blue-500 text-xl" />
          <div>
            <p className="text-sm text-gray-500">Joined</p>
            <p className="font-semibold">
              {moment(createdAt).format("MMMM D, YYYY")}
            </p>
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="p-4 mt-4 rounded-lg bg-blue-50 border border-blue-200">
        <h3 className="text-lg font-bold text-primary mb-2">
          Subscription Info
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500">Start Date</p>
            <p>{moment(subscription?.startDate).format("MMMM D, YYYY")}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">End Date</p>
            <p>{moment(subscription?.endDate).format("MMMM D, YYYY")}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Status</p>
            {subscription?.isActive ? (
              <span className="badge badge-success">Active</span>
            ) : (
              <span className="badge badge-error">Inactive</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
