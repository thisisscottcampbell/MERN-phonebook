//'import' express
const express = require('express');
//import DB
const connectDB = require('./config/db');

//initialze express
const app = express();

//Connect Database
connectDB();

//Init middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.json({msg: 'Welcome to the contact keeper api'}));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

