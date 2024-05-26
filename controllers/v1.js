const z = require('zod');
const { ApplicationError, ValidationError } = require('../errors');

const userSchema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
});

class Controller {

	static get(req, res, next) {
		res.status(200).json();
	}

	static add (req, res, next) {
		const data = req.body;

		try {
			const user = userSchema.parse(data);
			/* TODO: learn more about status codes */
			res.status(201).send('User created');
		}
		catch (err) {
			if (err instanceof z.ZodError)
				next(new ValidationError(err.errors.map(e => e.message).join(', ')));
			else
				next(new ApplicationError('An unexpected error occured'));
		}

	}

	static update(req, res, next) {
		res.status(200).json();
	}

	static remove(req, res, next) {
		res.status(200).json();
	}

}

module.exports = Controller;
