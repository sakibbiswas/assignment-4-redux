import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface BorrowPayload {
  quantity: number;
  dueDate: string;
}

interface BorrowSummary {
  title: string;
  isbn: string;
  totalQuantity: number;
}

export const borrowsApi = createApi({
  reducerPath: 'borrowsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.PROD ? '/api/borrows' : 'http://localhost:5000/api/borrows'
  }),
  tagTypes: ['Borrow'],
  endpoints: (builder) => ({
    borrowBook: builder.mutation<any, { bookId: string; data: BorrowPayload }>({
      query: ({ bookId, data }) => ({
        url: `/${bookId}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Borrow'],
    }),
    getBorrowSummary: builder.query<BorrowSummary[], void>({
      query: () => '/summary/all',
      providesTags: ['Borrow'],
    }),
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowsApi;
