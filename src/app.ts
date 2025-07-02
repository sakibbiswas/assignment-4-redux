
// import express from 'express';
// import cors from 'cors';
// import booksRouter from './routes/books.js';
// import borrowsRouter from './routes/borrows.js';
// import { errorHandler } from './middlewares/errorHandler.js';

// const app = express();

// // ✅ Middlewares
// app.use(cors());
// app.use(express.json());

// // ✅ Root route (no unused req warning)
// app.get('/', (_req, res) => {
//   res.send('Server is up and running!');
// });

// // ✅ API Routes
// app.use('/api/books', booksRouter);
// app.use('/api/borrows', borrowsRouter);

// // ✅ Global Error Handler
// app.use(errorHandler);

// export default app;



import express from 'express';
import cors from 'cors';
import booksRouter from './routes/books.js';
import borrowsRouter from './routes/borrows.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

// Root test
app.get('/', (_req, res) => {
  res.send('Server is up and running!');
});

// ✅ Keep "/api"
app.use('/api/books', booksRouter);
app.use('/api/borrows', borrowsRouter);

// Error handler
app.use(errorHandler);

export default app;



