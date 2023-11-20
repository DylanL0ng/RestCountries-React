const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.listen(process.env.EXPRESS_PORT, () => console.log(`Server listening on port ${process.env.EXPRESS_PORT}`))