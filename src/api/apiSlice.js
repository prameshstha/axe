import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    tagTypes: ["products"],
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/Data/productsData.json",
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ["products"],
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
