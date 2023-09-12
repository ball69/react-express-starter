require("dotenv").config();
var sequelize = require("sequelize");
module.exports = {
	// db: new sequelize(
	// 	process.env.DB_NAME,
	// 	process.env.DB_USER,
	// 	process.env.DB_PASSWORD,
	// 	{
	// 		dialect: "mysql",
	// 		host: process.env.DB_HOST,
	// 		port: process.env.DB_PORT,
	// 		useUTC: false, // for reading from database
	// 		dialectOptions: {
	// 			typeCast: function (field, next) {
	// 				// for reading from database
	// 				if (field.type === "DATETIME") {
	// 					return field.string();
	// 				}
	// 				return next();
	// 			},
	// 		},
	// 		pool: {
	// 			max: 5,
	// 			min: 0,
	// 			acquire: 30000,
	// 			idle: 10000,
	// 		},
	// 		timezone: process.env.APP_TIMEZONE,
	// 		underscored: true,
	// 	}
	// ),
	db: new sequelize({
		database: "defaultdb",
		username: "doadmin",
		password: "AVNS_D5zNDj4qvki-MCnR6SV",
		host: "dgpostgres-do-user-7562880-0.b.db.ondigitalocean.com",
		port: 25060,
		dialect: "postgres",
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
			},
		},
	}),
};
