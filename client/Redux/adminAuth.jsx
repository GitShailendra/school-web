import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productionUrl="https://school-web-50fi.onrender.com/api/admin/"
const devUrl="http://localhost:4000/api/admin/"

export const adminApi = createApi({


  reducerPath: "admin",
  baseQuery: fetchBaseQuery({
    baseUrl: productionUrl,
  }),
  tagTypes: ["Events","News","Gallery","Awards"],
  endpoints: (builder) => ({
    events: builder.query({
      query: () => ({
        url: "events",
        credentials:"include",
        
    }),
    providesTags:["Events"]

    }),

    deleteEventById: builder.mutation({
        query: (id) => ({
          url:`event/${id}`,
          method: "DELETE",
          credentials:"include"
  
        }),
invalidatesTags:["Events"]

   
    }),

    updateEvent: builder.mutation({
        query: ({event,id}) => ({
          url:`event/${id}`,
          method: "PUT",
          credentials:"include",
          body:event
  
        }),
invalidatesTags:["Events"]

   
    }),

    postNewEvent: builder.mutation({
      query: (event) => ({
        url:`postEvent`,
        method: "POST",
        credentials:"include",
        body:event

      }),
invalidatesTags:["Events"]

 
  }),
    getSingleEvent: builder.query({
      query: (id) => ({
        url:`event/${id}`,
        method: "GET",
        credentials:"include",

      }),
invalidatesTags:["Events"]

 
  }),
    getAllNews: builder.query({
      query: () => ({
        url:`news`,
        method: "GET",
        credentials:"include",

      }),

      providesTags:["News"]
 
  }),

  deleteNews: builder.mutation({
    query: (newsId) => ({
      url:`news/${newsId}`,
      method: "DELETE",
      credentials:"include",

    }),

    invalidatesTags:["News"]

}),
  updateNews: builder.mutation({
    query: (newsId) => ({
      url:`news/${newsId}`,
      method: "PUT",
      credentials:"include",

    }),

    invalidatesTags:["News"]

}),
  postNews: builder.mutation({
    query: (data) => ({
      url:`postNews`,
      method: "POST",
      credentials:"include",
      body:data

    }),

    invalidatesTags:["News"]

}),

getAllGallery: builder.query({
  query: () => ({
    url:`gallery`,
    method: "GET",
  }),

providesTags:["Gallery"]

}),


  postGallery: builder.mutation({
    query: (data) => ({
      url:`gallery/addContent`,
      method: "POST",
      credentials:"include",
      body:data

    }),

    invalidatesTags:["Gallery"]

}),

  deleteGallery: builder.mutation({
    query: (id) => ({
      url:`gallery/${id}`,
      method: "DELETE",
      credentials:"include",
    }),

    invalidatesTags:["Gallery"]

}),

updateGallery: builder.mutation({
  query: ({ id, data }) => ({
    url: `gallery/${id}`,
    method: "PUT",
    credentials: "include",
    body: data,
  }),
  invalidatesTags: ["Gallery"],
  onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
    try {
      // Perform any additional operations before the mutation is executed
      console.log('Gallery update started:', args);

      // Wait for the mutation to complete
      const { data } = await queryFulfilled;

      // Perform any additional operations after the mutation is completed
      console.log('Gallery update completed:', data);
    } catch (error) {
      // Handle any errors that occurred during the mutation
      console.error('Gallery update error:', error);
    }
  },
}),

getSingleGallery: builder.query({
  query: (id) => ({
    url:`gallery/${id}`,
    method: "GET",
    credentials:"include",

  }),

  invalidatesTags:["Gallery"]

}),


getAllAwards: builder.query({
  query: () => ({
    url:`awards`,
    method: "GET",
    
  }),

  providesTags:["Awards"]

}),


postAward: builder.mutation({
  query: (data) => ({
    url:`awards/addAward`,
    method: "POST",
    credentials:"include",
    body:data

  }),

  invalidatesTags:["Awards"]

}),

deleteAward: builder.mutation({
  query: (id) => ({
    url:`awards/${id}`,
    method: "DELETE",
    credentials:"include",
  }),

  invalidatesTags:["Awards"]

}),


updateAward: builder.mutation({
  query: ({id,data}) => ({
    url:`awards/${id}`,
    method: "PUT",
    credentials:"include",
    body:data
  }),

  invalidatesTags:["Awards"]

}),

getSingleAward:builder.query({
  query:(id)=>({

    url:`awards/${id}`,
    method: "GET",
    credentials:"include",


  })
}),



  }),

  
  
  
});

export const {
useEventsQuery,
useDeleteEventByIdMutation,
usePostNewEventMutation,
useGetAllNewsQuery,
useDeleteNewsMutation,
usePostNewsMutation,
useUpdateEventMutation,
useUpdateNewsMutation,
useGetSingleEventQuery,
useDeleteGalleryMutation,
useUpdateGalleryMutation,
useGetSingleGalleryQuery,
usePostGalleryMutation,
useGetAllGalleryQuery,
useGetAllAwardsQuery,
useDeleteAwardMutation,
useUpdateAwardMutation,
useGetSingleAwardQuery,
usePostAwardMutation

} = adminApi;
