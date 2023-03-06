//MAIN ENTRY POINT FILE OF Backend

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Express Backend Running on ${PORT}`);
});
