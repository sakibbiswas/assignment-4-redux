import { useForm } from 'react-hook-form';
import { useCreateBookMutation, useUpdateBookMutation, useGetBookByIdQuery } from '../features/books/booksApi';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import type { Book } from '../features/books/booksApi'; 

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
        toast.success('Book updated');
      } else {
        const newBook: Partial<Book> = { ...data, available: true }; 
        await createBook(newBook).unwrap();
        toast.success('Book added');
      }
      navigate('/books');
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg">
      <input {...register('title', { required: true })} placeholder="Title" className="input" />
      <input {...register('author', { required: true })} placeholder="Author" className="input" />
      <input {...register('genre')} placeholder="Genre" className="input" />
      <input {...register('isbn', { required: true })} placeholder="ISBN" className="input" />
      <textarea {...register('description')} placeholder="Description" className="input" />
      <input type="number" {...register('copies', { required: true })} placeholder="Copies" className="input" />
      <button type="submit" className="btn">
        {isEdit ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
}


