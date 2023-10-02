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
			user_role_id: {
				type: Sequelize.UUID,
				allownull: false,
			},
			image: {
				type: Sequelize.STRING,
				allownull: true,
			},
			image_url: {
				type: Sequelize.STRING,
				allownull: true,
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
			exprieDate: {
				type: Sequelize.DATE(6),
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
