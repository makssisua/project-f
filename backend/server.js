const express = require('express');
const dotenv = require('dotenv').config();
const trainingsRoutes = require('./routes/trainingRoutes')
const { errorHendler } = require('./middleware/errorMiddleware');
const { connectDB } = require('./config/db');
const port = process.env.SERVER_PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/trainings', trainingsRoutes);

app.use(errorHendler);

app.listen(port, () => console.log(`Server started on port: ${port}`))