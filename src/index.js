import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

// Routes
import geocodeRoute from './routes/geocode.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', geocodeRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
   console.log(`🚀 Server is running on port ${PORT}`);
});
