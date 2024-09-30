import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66f3151c71c84d805877c872.mockapi.io",
  }),

  endpoints: builder => ({
    getAllTasks: builder.query({
      query: () => `tasks/`,
    }),
  }),
});

export const { useGetAllTasksQuery } = tasksApi;
