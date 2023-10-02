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
	db: new sequelize(
		process.env.PG_DB_NAME,
		process.env.PG_DB_USER,
		process.env.PG_DB_PASS,
		{
			dialect: "postgres",
			host: process.env.PG_DB_HOST,
			port: process.env.PG_DB_PORT,
			query: {
				raw: true,
			},
			logging: false,
			dialectOptions: {
				ssl: {
					require: true,
					rejectUnauthorized: false,
				},
				useUTC: false, //for reading from database
				dateStrings: true,
			},
			timezone: "+07:00",
		}
	),
};
