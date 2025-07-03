
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
      className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-br from-white via-blue-50 to-sky-100 shadow-md rounded-xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-blue-700">📘 Borrow Book</h2>

      {/* Quantity */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Quantity</label>
        <input
          type="number"
          {...register('quantity', { required: true, min: 1 })}
          placeholder="Enter quantity"
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>

      {/* Due Date */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Due Date</label>
        <input
          type="date"
          {...register('dueDate', { required: true })}
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300"
        >
          📥 Borrow Book
        </button>
      </div>
    </form>
  );
}
