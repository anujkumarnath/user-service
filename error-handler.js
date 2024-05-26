function errorHandler(err, req, res, next) {
	console.error(err);

	const status  = err.statusCode || 500;
	const message = err.message || 'Internal Server Error';

	res.status(status).json({
		status: 'error',
		message,
	});
}

module.exports = errorHandler;
