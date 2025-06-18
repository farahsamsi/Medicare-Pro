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

      getAllUser: builder.query({
        query: () => ({
          url: "/api/v1/admin/users",
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
} = authApi;
