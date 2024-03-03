import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAuth = createApi({
  reducerPath: "userAuth",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (form) => ({
        url: "register",
        method: "POST",
        body: form,
      }),
    }),
    

   
  }),
});

export const {
  useRegisterMutation,
  
} = userAuth;