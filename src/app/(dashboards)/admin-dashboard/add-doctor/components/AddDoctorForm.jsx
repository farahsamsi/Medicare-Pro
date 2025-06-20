"use client";
import { useAddDoctorMutation } from "@/provider/query/authApi";
import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaStethoscope,
  FaUserPlus,
} from "react-icons/fa";

export default function AddDoctorForm() {
  const [addDoctor, { isLoading, isError, error }] = useAddDoctorMutation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    specialization: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doctorInfo = {
      ...form,
      role: "doctor",
      status: "approved",
      //   TODO: make this plan id from all subscriptions dynamic data dropdown
      planId: "685132e7b5ccc078a6091fbe",
      subscription: {
        planId: "6851a8e6ef37864d7d429460",
        startDate: "2025-06-18T06:11:28.468Z",
        endDate: "2025-07-18T06:11:28.468Z",
        isActive: true,
      },
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add Doctor!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await addDoctor(doctorInfo);
        Swal.fire({
          title: "Added!",
          text: `${result?.data?.message}`,
          icon: "success",
        });
      }
    });
  };

  const passwordStrength = () => {
    const length = form.password.length;
    if (length > 8) return "bg-blue-900";
    if (length > 5) return "bg-yellow-500";
    if (length > 2) return "bg-yellow-300";
    return "bg-gray-300";
  };

  return (
    <div className="min-h-screen py-5 bg-base-100">
      {/*  Form Section */}
      <div className="py-5 flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold mb-6 text-[#0B1120]">Add Doctor</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Doctor name"
              value={form.name}
              onChange={handleChange}
              className="input input-bordered w-full pl-10 text-gray-800"
              required
            />
            <FaUser className="absolute left-3 top-3 text-blue-600" />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Doctor e-mail"
              value={form.email}
              onChange={handleChange}
              className="input input-bordered w-full pl-10 text-gray-800"
              required
            />
            <FaEnvelope className="absolute left-3 top-3 text-blue-600" />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={form.password}
              onChange={handleChange}
              className="input input-bordered w-full pl-10 text-gray-800"
              required
            />
            <FaLock className="absolute left-3 top-3 text-blue-600" />
          </div>

          {/* Password Strength Bar */}
          <div className="w-full   rounded">
            <h1 className=" py-1">Password Strength</h1>
            <div
              className={`h-1 rounded ${passwordStrength()}`}
              style={{ width: "100%" }}
            ></div>
          </div>

          {/* Specialization */}
          <div className="relative">
            <input
              type="text"
              name="specialization"
              placeholder="Specialization"
              value={form.specialization}
              onChange={handleChange}
              className="input input-bordered w-full pl-10 text-gray-800"
              required
            />
            <FaStethoscope className="absolute left-3 top-3 text-blue-600" />
          </div>

          {/* Buttons */}
          <div className="flex w-full justify-center mt-4">
            <button
              disabled={isLoading}
              type="submit"
              className="btn btn-primary font-bold"
            >
              <FaUserPlus></FaUserPlus>
              {isLoading ? "Please Wait.." : "Add Doctor"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
