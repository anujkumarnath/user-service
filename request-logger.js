module.exports = (req, res, next) => {
	const method   = req.method;
	const ip       = req.ip;
	const hostname = req.ip;
	const path     = req.path;

	console.log(`[${method}]${ip} => ${hostname}${path}`);
	next();
};
