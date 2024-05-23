const express = require('express');
const apiV1Router = require('./routes/api-v1');
const banner = require('./banner');
const requestLogger = require('./request-logger');

const app = express();

app.listen(8000, () => {
	console.log(banner);
});

app.use(requestLogger);

app.use('/api/v1', apiV1Router);
