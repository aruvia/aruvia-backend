import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
import cartRoutes from './routes/cart.route.js';
import orderRoutes from './routes/order.route.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';

dotenv.config(); // Load .env first

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: '*' }));

// Root route message
app.get('/', (req, res) => {
  res.send('🚀 API is running... Welcome to the backend!');
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);

app.listen(PORT, async () => {
  await connectDB(); // Ensure DB connection before listening
  console.log(`✅ Server started at http://localhost:${PORT}`);
});
