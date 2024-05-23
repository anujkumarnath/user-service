const z = require('zod');
const MongooseSchema = require('mongoose').Schema; 

const isEmail = (string) => {
	return z.string().email().safeParse(string).success;
}

module.exports = new MongooseSchema(
	{
		name: { type: 'String', required: true },

		email: {
			type: 'String',
			required: true,
			unique: true,
			index: true,
			validate: {
				validator: isEmail,
				message: 'invalid email address'
			}
		},

	}
);
