//MAIN ENTRY POINT FILE OF Backend

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
// MIDDLEWARE imports
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

// MIDDLEWARE use
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Express Backend Running on ${PORT}`);
});
