import BookForm from '../components/BookForm';

export default function CreateBookPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Add New Book</h1>
      <BookForm />
    </div>
  );
}
