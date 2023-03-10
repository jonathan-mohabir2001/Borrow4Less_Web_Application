//MAIN ENTRY POINT FILE OF Backend

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//NODE Modules Imports
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');

// import the connection string
const connection = require('./database_configs/connectionString');
const cString = connection.connectionString;
// assign cString to the property connectionString

//END of imports

// MIDDLEWARE use
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mongoose.createConnection(cString);

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('MongoDB connected');
});

app.listen(PORT, () => {
  console.log(`Express Backend Running on ${PORT}`);
});
