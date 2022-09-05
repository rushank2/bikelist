const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const dotenv = require("dotenv");

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/bikes', require('./routes/api/bikes'));
app.use('/api/users', require('./routes/api/users'));


if (process.env.NODE_ENV === 'production') {

  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
