import mongoose from 'mongoose';
import app from './app.js';

const PORT = 5000;

const main = async () => {
  try {
    await mongoose.connect("mongodb+srv://sazzadur:sakib9988@cluster0.uxaxmsb.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

main();



