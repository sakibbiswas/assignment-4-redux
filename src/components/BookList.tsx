import { useGetBooksQuery, useDeleteBookMutation } from '../features/books/booksApi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function BookList() {
  const { data: books, isLoading } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

  if (isLoading) return <p>Loading...</p>;

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this book?')) {
      await deleteBook(id).unwrap();
      toast.success('Book deleted');
    }
  };

  return (
    <table className="w-full table-auto border text-sm">
      <thead>
        <tr className="bg-gray-200">
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>ISBN</th>
          <th>Copies</th>
          <th>Available</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books?.map((book) => (
          <tr key={book._id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.isbn}</td>
            <td>{book.copies}</td>
            <td>{book.available ? 'Yes' : 'No'}</td>
            <td className="space-x-2">
              <Link to={`/edit-book/${book._id}`} className="text-blue-600">Edit</Link>
              <Link to={`/borrow/${book._id}`} className="text-green-600">Borrow</Link>
              <button onClick={() => handleDelete(book._id!)} className="text-red-600">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
