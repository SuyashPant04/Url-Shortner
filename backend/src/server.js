import dotenv from "dotenv";
import { connectMongoDB } from "./db.js";
import express from 'express';
import cors from 'cors';
import router from "./routes.js";

dotenv.config();

connectMongoDB();

const app = express();
const PORT = process.env.PORT || 8000;
const BACKEND_URL = process.env.BACKEND_URL

// Enable CORS
app.use(cors({
    origin: BACKEND_URL, // Allow frontend origin
    credentials: true,
}));

app.use(express.json());

app.use('/', router);

// Basic route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// import dotenv from "dotenv";
// import { connectMongoDB } from "./db.js";
// import express from 'express';
// import router from "./routes.js";

// dotenv.config();

// connectMongoDB();

// const app = express();
// const PORT = process.env.PORT || 8000;

// app.use(express.json());

// app.use('/', router);

// // Basic route
// app.get('/', (req, res) => {
//     res.send('Server is running');
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });













// import dotenv from "dotenv";
// import { connectMongoDB } from "./db.js";

// dotenv.config();
// connectMongoDB();

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const routes = require('./routes');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(cors());

// app.use('/', routes);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// console.log("PORT:", process.env.PORT);
// console.log("MongoDB URI:", process.env.MONGO_URI);