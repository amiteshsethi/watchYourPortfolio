import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import portfolioRoutes from './routes/portfolio';
import './utils/scheduler'; // This starts the scheduler

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB without extra deprecated options
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio_monitor')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use('/api/portfolio', portfolioRoutes);

export default app;
