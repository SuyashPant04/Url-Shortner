import dotenv from "dotenv";
import { connectMongoDB } from "./db.js";
import express from 'express';
import cors from 'cors';
import router from "./routes.js";

dotenv.config();

connectMongoDB();

const app = express();
const PORT = process.env.PORT || 8000;
const FRONTEND_BASE_URL = process.env.FRONTEND_BASE_URL

app.use(cors({
    origin: FRONTEND_BASE_URL, 
    credentials: true,
}));

app.use(express.json());

app.use('/', router);

app.get('/', (req, res) => {
    res.send('Server is running');
});

// Handle 404 errors

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

