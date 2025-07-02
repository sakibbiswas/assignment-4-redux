
import { useForm } from 'react-hook-form';
import { useBorrowBookMutation } from '../features/borrows/borrowsApi';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export type BorrowFormData = {
  quantity: number;
  dueDate: string;
};

export default function BorrowForm() {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<BorrowFormData>();
  const [borrowBook] = useBorrowBookMutation();

  const onSubmit = async (data: BorrowFormData) => {
    if (!bookId) {
      toast.error('❌ Missing book ID from URL.');
      return;
    }

    try {
      await borrowBook({ bookId, data }).unwrap();
      toast.success('✅ Book borrowed successfully');
      navigate('/borrow-summary');
    } catch (err: any) {
      toast.error(err?.data?.message || '❌ Failed to borrow');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto mt-8 p-4 border rounded"
    >
      <h2 className="text-xl font-bold mb-4">Borrow Book</h2>

      <input
        type="number"
        {...register('quantity', { required: true, min: 1 })}
        placeholder="Quantity"
        className="border p-2 w-full"
      />

      <input
        type="date"
        {...register('dueDate', { required: true })}
        className="border p-2 w-full"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Borrow Book
      </button>
    </form>
  );
}

