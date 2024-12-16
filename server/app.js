 
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json());
app.use('/api', userRoutes);

module.exports = app;
