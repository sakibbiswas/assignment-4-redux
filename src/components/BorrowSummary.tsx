
import { useGetBorrowSummaryQuery } from '../features/borrows/borrowsApi';

export default function BorrowSummary() {
  const { data, isLoading } = useGetBorrowSummaryQuery();

  if (isLoading) return <p className="text-center text-blue-500 font-semibold mt-6">Loading summary...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-10">
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">📊 Borrow Summary</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 shadow-sm rounded-lg bg-white">
            <thead className="bg-indigo-100 text-indigo-700">
              <tr>
                <th className="px-4 py-3 text-left">📘 Title</th>
                <th className="px-4 py-3 text-left">🔢 ISBN</th>
                <th className="px-4 py-3 text-left">📦 Total Borrowed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data?.map((item, idx) => (
                <tr key={idx} className="hover:bg-indigo-50 transition duration-200">
                  <td className="px-4 py-3 font-medium text-gray-800">{item.title}</td>
                  <td className="px-4 py-3 text-gray-700">{item.isbn}</td>
                  <td className="px-4 py-3 text-gray-900 font-semibold">{item.totalQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

