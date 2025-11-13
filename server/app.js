const express = require('express');
const router = require('./routers');
const cors = require('cors');
const { errorHandlers } = require('./middleware');
const { STATIC_PATH } = require('./constants');

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json());

app.use(express.static(`${STATIC_PATH}`));

app.use('/api', router);

app.use(errorHandlers.dbErrorHandler, errorHandlers.errorHandler);

module.exports = app;
