import BookForm from '../components/BookForm';

export default function EditBookPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Edit Book</h1>
      <BookForm isEdit />
    </div>
  );
}
