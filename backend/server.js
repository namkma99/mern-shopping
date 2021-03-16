const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const db = require('./config/db');
const routes = require('./routes');

db.connectDB();

app.use(express.json());

routes(app);

app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
})