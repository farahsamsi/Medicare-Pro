// src/features/auth/authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://medicare-pro-backend.vercel.app",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => {
    return {
      loginAdmin: builder.mutation({
        query: (credentials) => ({
          url: "/api/v1/auth/login",
          method: "POST",
          body: credentials,
        }),
      }),

      addDoctor: builder.mutation({
        query: (doctorInfo) => ({
          url: "/api/v1/admin/create-doctor",
          method: "POST",
          body: doctorInfo,
        }),
      }),

      addAssistant: builder.mutation({
        query: (assistantInfo) => ({
          url: "/api/v1/doctor/assistants",
          method: "POST",
          body: assistantInfo,
        }),
      }),

      getAllMyAssistants: builder.query({
        query: () => ({
          url: "/api/v1/doctor/assistants",
          method: "GET",
        }),
      }),

      deleteAssistant: builder.mutation({
        query: (assistantId) => ({
          url: `/api/v1/doctor/assistants/${assistantId}`,
          method: "DELETE",
        }),
      }),

      updateAssistant: builder.mutation({
        query: (assistantId, updatedDoc) => ({
          url: `/api/v1/doctor/assistants/${assistantId}`,
          method: "PATCH",
          body: updatedDoc,
        }),
      }),

      getAllUser: builder.query({
        query: () => ({
          url: "/api/v1/admin/users",
          method: "GET",
        }),
      }),

      getDoctorMySite: builder.query({
        query: () => ({
          url: "/api/v1/doctor/profile",
          method: "GET",
        }),
      }),

      getAllSubscriptions: builder.query({
        query: () => ({
          url: "/api/v1/admin/plans",
          method: "GET",
        }),
      }),
    };
  },
});

export const {
  useLoginAdminMutation,
  useGetAllUserQuery,
  useGetAllSubscriptionsQuery,
  useAddDoctorMutation,
  useGetDoctorMySiteQuery,
  useAddAssistantMutation,
  useGetAllMyAssistantsQuery,
  useDeleteAssistantMutation,
  useUpdateAssistantMutation,
} = authApi;
