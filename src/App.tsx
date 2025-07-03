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
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 items-center">
          <NavLink
            to="/books"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md transition ${
                isActive ? 'bg-white text-blue-600 font-semibold' : 'hover:bg-blue-500'
              }`
            }
          >
            📚 All Books
          </NavLink>

          <NavLink
            to="/create-book"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md transition ${
                isActive ? 'bg-white text-blue-600 font-semibold' : 'hover:bg-blue-500'
              }`
            }
          >
            ➕ Add Book
          </NavLink>

          <NavLink
            to="/borrow-summary"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md transition ${
                isActive ? 'bg-white text-blue-600 font-semibold' : 'hover:bg-blue-500'
              }`
            }
          >
            📊 Borrow Summary
          </NavLink>
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/books" element={<BooksPage />} />
          <Route path="/create-book" element={<CreateBookPage />} />
          <Route path="/edit-book/:id" element={<EditBookPage />} />
          <Route path="/borrow/:bookId" element={<BorrowPage />} />
          <Route path="/borrow-summary" element={<BorrowSummaryPage />} />
          <Route path="*" element={<BooksPage />} />
        </Routes>
      </main>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

