import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const productsApi = createApi({
  reducerPath: "productsApi",
//   refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `https://dummyjson.com/`,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
        query: () => "products"
    }),
    getProductById: builder.query({
        query: ({id}) => `products/${id}`
    })
  })
});

export const { useGetProductByIdQuery, useGetProductsQuery } = productsApi;
