import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://620eeca5ec8b2ee2832efb48.mockapi.io/' }),
  tagTypes:['Phone'],
  endpoints: (builder) => ({
    getContactByName: builder.query({
      query: (name) => `phones`,
      providesTags:['Phone']
    }),
    deletePhone: builder.mutation({
      query: (id) => ({
        url: `phones/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:['Phone']
    }),
    addPhone: builder.mutation({
      query: (contact) => ({
        url: 'phones',
        method: 'POST',
        body: {
          name: contact.name,
          phone: contact.phone,
        }
      }),
      invalidatesTags:['Phone']
    })
  }),
})
// https://620eeca5ec8b2ee2832efb48.mockapi.io/:endpoint

export const { useGetContactByNameQuery, useDeletePhoneMutation, useAddPhoneMutation } = phonebookApi;
