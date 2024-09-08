const express = require("express");
const app = express();
const mainRouter = require('./routers/app');
const PORT = 8000;

app.use('/', mainRouter);

app.listen(PORT, () => console.log(PORT));






