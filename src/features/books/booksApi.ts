
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Book = {
  _id?: string;
  title: string;
  author: string;
  genre?: string;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
};

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.PROD ? '/api' : 'http://localhost:5000/api'
  }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => '/books',
      providesTags: ['Books'],
    }),
    getBookById: builder.query<Book, string>({
      query: (id) => `/books/${id}`,
    }),
    createBook: builder.mutation<Book, Partial<Book>>({
      query: (newBook) => ({
        url: '/books',
        method: 'POST',
        body: newBook,
      }),
      invalidatesTags: ['Books'],
    }),
    updateBook: builder.mutation<Book, { id: string; data: Partial<Book> }>({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),
    deleteBook: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
