# 📚 Library Management System

A full-stack **Library Management System** built with the **MERN stack** (MongoDB, Express, React, Node.js) and **TypeScript**. It supports book inventory, borrowing functionality, and viewing borrow summaries.



### 💻 Frontend

* React
* TypeScript
* Tailwind CSS
* Redux Toolkit Query
* React Hook Form
* React Toastify

### 🌐 Backend

* Node.js
* Express.js
* TypeScript
* MongoDB (Mongoose)



## 📦 Features

* ✅ Add, Edit, and Delete Books
* ✅ Borrow Books with Quantity & Due Date
* ✅ Update Book Availability Based on Borrow
* ✅ View Borrow Summary by Book
* ✅ REST API with Express
* ✅ Form Validation & Toast Notifications
* ✅ Modular Folder Structure

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/library-management-system.git
cd library-management-system
```

### 2. Install Dependencies

```bash
# For both frontend and backend
npm install
```

### 3. Setup MongoDB Connection

Create a `.env` file or directly edit `server.ts`:

```ts
const MONGO_URI = 'your-mongodb-connection-string';
```

### 4. Run Backend

```bash
npm run dev
# or
ts-node-dev src/server.ts
```

### 5. Run Frontend

```bash
npm run dev:client
```

---

## 🔗 API Endpoints

### Books

* `GET    /api/books` – Get all books
* `POST   /api/books` – Add new book
* `PUT    /api/books/:id` – Update book
* `DELETE /api/books/:id` – Delete book

### Borrows

* `POST   /api/borrows/:bookId` – Borrow a book
* `GET    /api/borrows/summary/all` – Borrow summary grouped by book





## 🙋‍♂️ Author

* Developed by **Sorna Sakib**
* 📧 \[[YourEmail@example.com](mailto:YourEmail@example.com)]



## 📝 License

This project is licensed under the MIT License.
