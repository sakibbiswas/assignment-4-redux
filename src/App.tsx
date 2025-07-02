// import { Route, Routes, NavLink } from 'react-router-dom';
// import BooksPage from './pages/BooksPage';
// import CreateBookPage from './pages/CreateBookPage';
// import EditBookPage from './pages/EditBookPage';
// import BorrowPage from './pages/BorrowPage';
// import BorrowSummaryPage from './pages/BorrowSummaryPage';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function App() {
//   return (
//     <div>
//       <nav className="bg-blue-600 text-white p-4 flex gap-6">
//         <NavLink to="/books">All Books</NavLink>
//         <NavLink to="/create-book">Add Book</NavLink>
//         <NavLink to="/borrow-summary">Borrow Summary</NavLink>
//       </nav>

//       <div className="container mx-auto p-4">
//         <Routes>
//           <Route path="/books" element={<BooksPage />} />
//           <Route path="/create-book" element={<CreateBookPage />} />
//           <Route path="/edit-book/:id" element={<EditBookPage />} />
//           <Route path="/borrow/:bookId" element={<BorrowPage />} />
//           <Route path="/borrow-summary" element={<BorrowSummaryPage />} />
//           <Route path="*" element={<BooksPage />} />
//         </Routes>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// }



import { Route, Routes, NavLink } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import CreateBookPage from './pages/CreateBookPage';
import EditBookPage from './pages/EditBookPage';
import BorrowPage from './pages/BorrowPage';
import BorrowSummaryPage from './pages/BorrowSummaryPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div>
      <nav className="bg-blue-600 text-white p-4 flex gap-6">
        <NavLink
          to="/books"
          className={({ isActive }) => (isActive ? 'font-bold underline' : '')}
        >
          All Books
        </NavLink>
        <NavLink
          to="/create-book"
          className={({ isActive }) => (isActive ? 'font-bold underline' : '')}
        >
          Add Book
        </NavLink>
        <NavLink
          to="/borrow-summary"
          className={({ isActive }) => (isActive ? 'font-bold underline' : '')}
        >
          Borrow Summary
        </NavLink>
      </nav>

      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/books" element={<BooksPage />} />
          <Route path="/create-book" element={<CreateBookPage />} />
          <Route path="/edit-book/:id" element={<EditBookPage />} />
          <Route path="/borrow/:bookId" element={<BorrowPage />} />
          <Route path="/borrow-summary" element={<BorrowSummaryPage />} />
          <Route path="*" element={<BooksPage />} />
        </Routes>
      </div>

      <ToastContainer />
    </div>
  );
}
