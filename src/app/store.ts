import { configureStore } from '@reduxjs/toolkit';
import { booksApi } from '../features/books/booksApi';
import { borrowsApi } from '../features/borrows/borrowsApi';

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    [borrowsApi.reducerPath]: borrowsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, borrowsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
