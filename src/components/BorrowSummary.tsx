import { useGetBorrowSummaryQuery } from '../features/borrows/borrowsApi';

export default function BorrowSummary() {
  const { data, isLoading } = useGetBorrowSummaryQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <table className="w-full table-auto border text-sm">
      <thead>
        <tr className="bg-gray-200">
          <th>Title</th>
          <th>ISBN</th>
          <th>Total Borrowed</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, idx) => (
          <tr key={idx}>
            <td>{item.title}</td>
            <td>{item.isbn}</td>
            <td>{item.totalQuantity}</td>
          </tr>
        ))}                                                            
      </tbody>
    </table>
  );
}
