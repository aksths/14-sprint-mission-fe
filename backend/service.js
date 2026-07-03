import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB 연결');

    app.listen(process.env.PORT, () => {
      console.log('Server Start');
    });
  });