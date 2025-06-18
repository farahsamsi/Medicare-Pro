"use client";

import {
  useDeleteAssistantMutation,
  useGetAllMyAssistantsQuery,
  useUpdateAssistantMutation,
} from "@/provider/query/authApi";
import React, { useState } from "react";
import {
  FaEdit,
  FaEnvelope,
  FaLock,
  FaToggleOff,
  FaToggleOn,
  FaTrash,
  FaUser,
} from "react-icons/fa";
import moment from "moment";
import Swal from "sweetalert2";

export default function MyAssistantsPage() {
  const { data, isLoading, refetch } = useGetAllMyAssistantsQuery();
  const [deleteAssistant] = useDeleteAssistantMutation();
  const [updateAssistant] = useUpdateAssistantMutation();

  const [form, setForm] = useState({
    name: "",
    permissions: {
      managePatients: false,
      manageAppointments: false,
      manageSchedule: false,
    },
  });

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const togglePermission = (key) =>
    setForm({
      ...form,
      permissions: {
        ...form.permissions,
        [key]: !form.permissions[key],
      },
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("updated data", form);

    const getForm = e.target;
    const id = getForm.id.value;

    // const result = await updateAssistant(id, form);
    // console.log(result);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await deleteAssistant(id);
          Swal.fire({
            title: "Deleted!",
            text: `${result?.data?.message}`,
            icon: "success",
          });
          refetch();
        } catch (err) {
          console.error("Delete failed:", err);
        }
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">All Assistants</h2>

        {isLoading ? (
          <div className="w-full min-h-screen flex justify-center items-center">
            <span className="loading loading-ring loading-xl"></span>
          </div>
        ) : (
          <table className="table w-full">
            <thead>
              <tr className="bg-base-200 text-sm text-gray-700">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Permissions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.assistants.map((a, i) => (
                <tr key={a._id} className="hover">
                  <td>{i + 1}</td>
                  <td>{a.name}</td>
                  <td>{a.email}</td>
                  <td>
                    {Object.entries(a.permissions)
                      .filter(([, val]) => val)
                      .map(([key]) => (
                        <span
                          key={key}
                          className="badge badge-info badge-sm mr-1 capitalize"
                        >
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                      ))}
                  </td>
                  <td className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        document.getElementById(`${a?._id}`).showModal()
                      }
                      className="btn btn-sm btn-primary"
                    >
                      <FaEdit className="text-xl" />
                    </button>
                    {/* PATCH modal */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <dialog id={`${a?._id}`} className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <h2 className="text-2xl font-bold text-center  mb-6">
                          Add New Assistant
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                          <input
                            name="id"
                            value={a?._id}
                            readOnly
                            className="hidden"
                          />
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
                              value={a?.email}
                              readOnly
                              // onChange={handleChange}
                              type="email"
                              placeholder="Assistant's Email"
                              className="input input-bordered w-full pl-10"
                              required
                            />
                            <FaEnvelope className="absolute top-3 left-3 text-primary" />
                          </div>

                          {/* Permissions */}
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h3 className="font-semibold mb-2 text-blue-700">
                              Permissions
                            </h3>
                            {Object.keys(form.permissions).map((key) => (
                              <div
                                key={key}
                                className="flex justify-between items-center py-2"
                              >
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
                            type="submit"
                            className="btn btn-primary w-full"
                          >
                            Update
                          </button>
                        </form>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                    <button
                      onClick={() => handleDelete(a._id)}
                      className="btn btn-sm bg-red-600 text-white"
                    >
                      <FaTrash className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
