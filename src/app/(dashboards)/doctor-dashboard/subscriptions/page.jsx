"use client";
import { useGetAllSubscriptionsQuery } from "@/provider/query/authApi";
import { FaCrown, FaDollarSign, FaClock } from "react-icons/fa";

export default function SubscriptionsPage() {
  const { data: plans, isLoading } = useGetAllSubscriptionsQuery();
  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }
  return (
    <div className="p-4 bg-base-100 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center ">
        Available Subscription Plans
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra table-md">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th className="text-left whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <FaCrown />
                  Plan Name
                </div>
              </th>
              <th className="text-left whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <FaDollarSign /> Price ($)
                </div>
              </th>
              <th className="text-left whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <FaClock /> Duration (Days)
                </div>
              </th>

              <th>Features</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {plans?.map((plan, index) => (
              <tr key={plan._id}>
                <td>{index + 1}</td>
                <td>
                  <span className="font-semibold">{plan.name}</span>
                  {plan.isDefault && (
                    <div className="badge badge-sm badge-info ml-2">
                      Default
                    </div>
                  )}
                </td>
                <td className="text-green-600 font-medium">
                  {plan.price.toFixed(2)}
                </td>
                <td>{plan.durationInDays}</td>
                <td>
                  <ul className="list-disc pl-4">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="text-sm">
                        {f}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  {plan.isActive ? (
                    <div className="badge badge-success">Active</div>
                  ) : (
                    <div className="badge badge-error">Inactive</div>
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
