// import { useForm } from 'react-hook-form';
// import { useCreateBookMutation, useUpdateBookMutation, useGetBookByIdQuery } from '../features/books/booksApi';
// import { useNavigate, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { useEffect } from 'react';
// import type { Book } from '../features/books/booksApi'; 

// type BookFormFields = {
//   title: string;
//   author: string;
//   genre?: string;
//   isbn: string;
//   description?: string;
//   copies: number;
// };

// export default function BookForm({ isEdit = false }: { isEdit?: boolean }) {
//   const { id } = useParams();
//   const { register, handleSubmit, reset } = useForm<BookFormFields>();
//   const [createBook] = useCreateBookMutation();
//   const [updateBook] = useUpdateBookMutation();
//   const { data: bookData } = useGetBookByIdQuery(id!, { skip: !isEdit });

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isEdit && bookData) {
//       reset(bookData);
//     }
//   }, [isEdit, bookData, reset]);

//   const onSubmit = async (data: BookFormFields) => {
//     try {
//       if (isEdit && id) {
//         await updateBook({ id, data }).unwrap();
//         toast.success('Book updated');
//       } else {
//         const newBook: Partial<Book> = { ...data, available: true }; 
//         await createBook(newBook).unwrap();
//         toast.success('Book added');
//       }
//       navigate('/books');
//     } catch (err) {
//       toast.error('Something went wrong');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg">
//       <input {...register('title', { required: true })} placeholder="Title" className="input" />
//       <input {...register('author', { required: true })} placeholder="Author" className="input" />
//       <input {...register('genre')} placeholder="Genre" className="input" />
//       <input {...register('isbn', { required: true })} placeholder="ISBN" className="input" />
//       <textarea {...register('description')} placeholder="Description" className="input" />
//       <input type="number" {...register('copies', { required: true })} placeholder="Copies" className="input" />
//       <button type="submit" className="btn">
//         {isEdit ? 'Update Book' : 'Add Book'}
//       </button>
//     </form>
//   );
// }




import { useForm } from "react-hook-form";
import {
  useCreateBookMutation,
  useUpdateBookMutation,
  useGetBookByIdQuery,
} from "../features/books/booksApi";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import type { Book } from "../features/books/booksApi";

type BookFormFields = {
  title: string;
  author: string;
  genre?: string;
  isbn: string;
  description?: string;
  copies: number;
};

export default function BookForm({ isEdit = false }: { isEdit?: boolean }) {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm<BookFormFields>();
  const [createBook] = useCreateBookMutation();
  const [updateBook] = useUpdateBookMutation();
  const { data: bookData } = useGetBookByIdQuery(id!, { skip: !isEdit });

  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit && bookData) {
      reset(bookData);
    }
  }, [isEdit, bookData, reset]);

  const onSubmit = async (data: BookFormFields) => {
    try {
      if (isEdit && id) {
        await updateBook({ id, data }).unwrap();
        toast.success("✅ Book updated successfully!");
      } else {
        const newBook: Partial<Book> = { ...data, available: true };
        await createBook(newBook).unwrap();
        toast.success("📚 Book added successfully!");
      }
      navigate("/books");
    } catch (err) {
      toast.error("❌ Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      // className="max-w-2xl mx-auto p-8 bg-red-100 shadow-md rounded-xl space-y-6"
      className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-white via-sky-50 to-blue-50 shadow-lg rounded-xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-blue-600">
        {isEdit ? "✏️ Update Book" : "➕ Add New Book"}
      </h2>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          {...register("title", { required: true })}
          placeholder="Book title"
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Author */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
        <input
          {...register("author", { required: true })}
          placeholder="Author name"
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Genre */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Genre</label>
        <input
          {...register("genre")}
          placeholder="Genre (optional)"
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* ISBN */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">ISBN</label>
        <input
          {...register("isbn", { required: true })}
          placeholder="ISBN number"
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          {...register("description")}
          placeholder="Short description"
          className="w-full border border-gray-300 px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={3}
        />
      </div>

      {/* Copies */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Copies</label>
        <input
          type="number"
          min={1}
          {...register("copies", { required: true })}
          placeholder="Available copies"
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className={`bg-${isEdit ? "yellow" : "blue"}-600 hover:bg-${isEdit ? "yellow" : "blue"}-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300`}
        >
          {isEdit ? "✏️ Update Book" : "➕ Add Book"}
        </button>
      </div>
    </form>
  );
}

