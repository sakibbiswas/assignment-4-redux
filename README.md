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

###  Clone the Repository

```bash
git clone https://github.com/sakibbiswas/assignment-4-redux
```
### Deploy
`vercel link :` https://library-management-system-nine-iota.vercel.app



###  Install Dependencies

```bash
# For both frontend and backend
npm install
```

###  Setup MongoDB Connection

` MONGO_URI = "mongodb+srv://sazzadur:sakib9988@cluster0.uxaxmsb.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";`


###  Run Backend

```bash
npm run dev


### 5. Run Frontend

```bash
npm run dev

##  API Endpoints

### Books

* `GET    /api/books` – Get all books
* `POST   /api/books` – Add new book
* `PUT    /api/books/:id` – Update book
* `DELETE /api/books/:id` – Delete book

### Borrows

* `POST   /api/borrows/:bookId` – Borrow a book
* `GET    /api/borrows/summary/all` – Borrow summary grouped by book


## 🙋‍♂️ Author

* Developed by **Sakib** 





