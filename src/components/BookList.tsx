
import { useGetBooksQuery, useDeleteBookMutation } from '../features/books/booksApi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function BookList() {
  const { data: books, isLoading } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

  if (isLoading) return <p className="text-center text-lg font-semibold text-gray-600">Loading...</p>;

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this book?')) {
      await deleteBook(id).unwrap();
      toast.success('Book deleted');
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 text-sm shadow-md rounded-md overflow-hidden">
        <thead className="bg-sky-100 text-sky-800 text-left">
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Genre</th>
            <th className="px-4 py-2">ISBN</th>
            <th className="px-4 py-2">Copies</th>
            <th className="px-4 py-2">Available</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {books?.map((book) => (
            <tr key={book._id} className="hover:bg-gray-50">
              <td className="px-4 py-2">{book.title}</td>
              <td className="px-4 py-2">{book.author}</td>
              <td className="px-4 py-2">{book.genre}</td>
              <td className="px-4 py-2">{book.isbn}</td>
              <td className="px-4 py-2">{book.copies}</td>
              <td className="px-4 py-2">{book.available ? 'Yes' : 'No'}</td>
              <td className="px-4 py-2 flex gap-2 justify-center flex-wrap">
                <Link
                  to={`/edit-book/${book._id}`}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs font-medium"
                >
                  Edit
                </Link>
                <Link
                  to={`/borrow/${book._id}`}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-medium"
                >
                  Borrow
                </Link>
                <button
                  onClick={() => handleDelete(book._id!)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-medium"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
