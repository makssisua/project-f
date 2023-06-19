const express = require('express');
require('dotenv').config();
const trainingsRoutes = require('./routes/trainingRoutes');
const usersRoutes = require('./routes/userRoutes')
const { errorHendler } = require('./middleware/errorMiddleware');
const { connectDB } = require('./config/db');
const port = process.env.SERVER_PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/trainings', trainingsRoutes);
app.use('/api/users', usersRoutes);

app.use(errorHendler);

app.listen(port, () => console.log(`Server started on port: ${port}`))