"use client";
import { useAddAssistantMutation } from "@/provider/query/authApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";
import Swal from "sweetalert2";

export default function AddAssistantForm() {
  const [addAssistant, { isLoading }] = useAddAssistantMutation();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    permissions: {
      managePatients: false,
      manageAppointments: false,
      manageSchedule: false,
    },
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const togglePermission = (key) =>
    setForm({
      ...form,
      permissions: {
        ...form.permissions,
        [key]: !form.permissions[key],
      },
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add Assistant!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await addAssistant(form);
        if (result?.data) {
          Swal.fire({
            title: "Success",
            text: `${result?.data?.message}`,
            icon: "success",
          });
          setForm({
            name: "",
            email: "",
            password: "",
            permissions: {
              managePatients: false,
              manageAppointments: false,
              manageSchedule: false,
            },
          });
          router.replace("/doctor-dashboard/my-assistants");
        }
        if (result?.error) {
          Swal.fire({
            title: "Error",
            text: `${result?.error?.data?.message}`,
            icon: "error",
          });
          setForm({
            name: "",
            email: "",
            password: "",
            permissions: {
              managePatients: false,
              manageAppointments: false,
              manageSchedule: false,
            },
          });
        }
      }
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center  mb-6">
        Add New Assistant
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div className="relative">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Assistant's Name"
            className="input input-bordered w-full pl-10"
            required
          />
          <FaUser className="absolute top-3 left-3 text-primary" />
        </div>

        {/* Email */}
        <div className="relative">
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Assistant's Email"
            className="input input-bordered w-full pl-10"
            required
          />
          <FaEnvelope className="absolute top-3 left-3 text-primary" />
        </div>

        {/* Password */}
        <div className="relative">
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="Create Password"
            className="input input-bordered w-full pl-10"
            required
          />
          <FaLock className="absolute top-3 left-3 text-primary" />
        </div>

        {/* Permissions */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="font-semibold mb-2 text-blue-700">Permissions</h3>
          {Object.keys(form.permissions).map((key) => (
            <div key={key} className="flex justify-between items-center py-2">
              <span className="capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              <button
                type="button"
                className="text-xl"
                onClick={() => togglePermission(key)}
              >
                {form.permissions[key] ? (
                  <FaToggleOn className="text-green-500" />
                ) : (
                  <FaToggleOff className="text-gray-400" />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Submit */}
        <button
          disabled={isLoading}
          type="submit"
          className="btn btn-primary w-full"
        >
          {isLoading ? "Please Wait.." : "Add Assistant"}
        </button>
      </form>
    </div>
  );
}
