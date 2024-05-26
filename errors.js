class ValidationError extends Error {
	constructor(message, { statusCode, cause, code, errors }) {
		super(message, { cause });
		this.name       = this.constructor.name;
		this.statusCode = statusCode || 400;
		this.code       = code || 'ERR_DEFAULT';
		this.erros      = errors || [];
	}
}

class ApplicationError extends Error {
	constructor(message, { statusCode, cause, code, errors }) {
		super(message, { cause });
		this.name       = this.constructor.name;
		this.statusCode = statusCode || 500;
		this.code       = code || 'ERR_DEFAULT';
		this.erros      = errors || [];
	}
}

module.exports = { ValidationError, ApplicationError };
