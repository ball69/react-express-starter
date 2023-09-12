const Sequelize = require("sequelize");
const { db } = require("../config/database");

module.exports = {
	User: db.define(
		"users",
		{
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
			},
			image: {
				type: Sequelize.STRING,
				allownull: true,
			},
			user_role_id: {
				type: Sequelize.UUID,
				allownull: false,
			},
			username: {
				type: Sequelize.STRING,
				unique: true,
			},
			password: {
				type: Sequelize.STRING,
			},
			name: {
				type: Sequelize.STRING,
			},
			status: {
				type: Sequelize.INTEGER,
				defaultValue: 1,
			},
		},
		{
			freezeTableName: true,
			timestamps: true,
			paranoid: true,
			underscored: true,
		}
	),
};
