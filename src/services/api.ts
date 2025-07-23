// src/services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    // Məsələn, sadə endpoint
    getPosts: builder.query<unknown, void>({
      query: () => 'posts',
    }),
  }),
})

export const { useGetPostsQuery } = api
