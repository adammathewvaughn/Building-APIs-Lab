const express = require('express');
const cors = require('cors');
const app = express();
const apiRouter = require('./routes');

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);
app.listen(3000);