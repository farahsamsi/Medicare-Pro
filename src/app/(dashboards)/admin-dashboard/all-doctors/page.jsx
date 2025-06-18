import React from "react";
import moment from "moment";
import AdminQuery from "./components/AdminQuery";

export default function AllDoctorsPage() {
  // TODO: make this dynamic
  const doctors = [
    {
      subscription: {
        planId: "684e70e454551a59e5bcb884",
        startDate: "2025-06-15T07:06:20.244Z",
        endDate: "2026-06-15T07:06:20.244Z",
        isActive: true,
      },
      _id: "684e70ec54551a59e5bcb889",
      name: "Dr. Rahim",
      email: "shahisrailshah43@gmail.com",
      role: "doctor",
      status: "approved",
      createdAt: "2025-06-15T07:06:20.259Z",
      updatedAt: "2025-06-15T07:06:20.259Z",
      __v: 0,
    },
  ];

  return (
    <div className="py-5">
      <h1 className="text-xl font-bold text-center">All Doctors</h1>
      <AdminQuery></AdminQuery>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialization</th>
              <th>Status</th>
              <th>Subscription Start </th>
              <th>Subscription End </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {doctors &&
              doctors?.map((doctor, index) => (
                <tr key={doctor?._id}>
                  <th>{index + 1}</th>
                  <td>{doctor?.name}</td>
                  <td>{doctor?.email}</td>
                  <td>Dentist</td>
                  <td>
                    {doctor?.subscription?.isActive ? "Active" : "Expired"}
                  </td>

                  <td>
                    {moment(doctor?.subscription?.startDate).format(
                      "MMMM D, YYYY"
                    )}
                  </td>
                  <td>
                    {moment(doctor?.subscription?.endDate).format(
                      "MMMM D, YYYY"
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
