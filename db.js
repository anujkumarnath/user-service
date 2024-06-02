const mongoose = require('mongoose');

class DB {
	static #conn = null;

	static async init () {
		try {
			const { MONGO_HOST, MONGO_PORT, MONGO_NAME } = process.env;

			if (!MONGO_HOST || !MONGO_PORT || !MONGO_NAME)
				throw new Error('missing env variable(s)');

			const uri = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_NAME}`;
			DB.#conn = await mongoose.connect(uri);

			console.log('db init ok');
		}
		catch (err) {
			console.log('db init failed');
			throw err;
		}
	}

	static async deinit() {
		try {
			if (!DB.#conn)
				return;

			await DB.#conn.close();
			console.log('db deinit ok');
		}
		catch (err) {
			console.error('deb deinit failed');
			throw err;
		}
	}

	static get conn() {
		return DB.#conn;
	}

}

module.exports = DB;
