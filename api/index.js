import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
// Import routes
import userRouter from './routes/user.route.js';
import authRoutes from './routes/auth.routes.js';
import listingRouter from './routes/listing.route.js';


// Load environment variables
dotenv.config({ path: path.resolve('./api/.env') }); // make sure path is correct
console.log('MONGO_URI:', process.env.MONGO_URI);

if (!process.env.MONGO_URI) {
  console.error('❌ MONGO_URI is not defined in .env');
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB!'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

const app = express();
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cookieParser());

// API Routes

app.use(cors({
origin: [
    "http://localhost:5173", // local dev
    "https://project-estate.netlify.app" // deployed frontend
  ],

  credentials: true, 
}));
app.use('/api/user', userRouter);
app.use('/api/auth', authRoutes);
app.use('/api/listing', listingRouter);

// Error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    statusCode,
    message: err.message || 'Internal Server Error',
  });
});

app.get('/api/auth/test', (req, res) => {
  res.send({ message: 'Backend is working!' });
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
