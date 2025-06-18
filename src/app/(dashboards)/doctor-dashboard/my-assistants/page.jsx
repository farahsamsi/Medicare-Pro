"use client";

import {
  useDeleteAssistantMutation,
  useGetAllMyAssistantsQuery,
} from "@/provider/query/authApi";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import moment from "moment";
import Swal from "sweetalert2";

export default function MyAssistantsPage() {
  const { data, isLoading, refetch } = useGetAllMyAssistantsQuery();
  const [deleteAssistant] = useDeleteAssistantMutation();

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
                    <button className="btn btn-sm btn-primary">
                      <FaEdit className="text-xl" />
                    </button>
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
