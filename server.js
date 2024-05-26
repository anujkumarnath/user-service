const express       = require('express');
const apiV1Router   = require('./routes/api-v1');
const banner        = require('./banner');
const requestLogger = require('./request-logger');
const errorHandler  = require('./error-handler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.use('/api/v1', apiV1Router);
app.use(errorHandler);

app.listen(8000, () => {
	console.log(banner);
});
