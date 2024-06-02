require('dotenv').config();

const express       = require('express');
const apiV1Router   = require('./routes/api-v1');
const banner        = require('./banner');
const requestLogger = require('./request-logger');
const errorHandler  = require('./error-handler');
const db            = require('./db.js');

const init = async () => {
	await db.init();
}

const startServer = (app, port=8000) => {
	app.listen(port, () => {
		console.log(banner);
	});
}

const createServer = () => {
	const app = express();
	return app;
}

const addMiddlewares = (app) => {
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(requestLogger);
	app.use('/api/v1', apiV1Router);
	app.use(errorHandler);
}

const deinit = async () => {
	await db.deinit();
}

(async () => {
	const EXPRESS_PORT = process.env.EXPRESS_PORT;

	if (!EXPRESS_PORT)
		throw new Error('missing env variable: EXPRESS_PORT');

	await init();
	const app = createServer(EXPRESS_PORT);
	addMiddlewares(app);
	startServer(app);
})();
