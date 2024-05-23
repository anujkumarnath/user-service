module.exports = (req, res, next) => {

	console.log({
		path    : req.path,
		method  : req.method,
		baseUrl : req.baseUrl,
		query   : req.query,
		params  : req.params,
	});

	next();
};
