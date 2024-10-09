import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import { connectDB } from './db/connectDB.js';
import authRoute from './routes/auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  connectDB();
  console.log('server is running at http://localhost:4000');
});
