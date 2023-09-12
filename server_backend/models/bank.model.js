const Sequelize = require("sequelize");
const { db } = require("../config/database");

module.exports = {
	Bank: db.define(
		"banks",
		{
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				//  autoIncrement: true,
				primaryKey: true,
			},
			logo: {
				type: Sequelize.STRING,
				allownull: true,
			},
			code: {
				type: Sequelize.STRING,
			},
			code_scb: {
				type: Sequelize.STRING,
			},
			name: {
				type: Sequelize.STRING,
			},
			background_color: {
				type: Sequelize.STRING,
			},
			font_color: {
				type: Sequelize.STRING,
			},
			order: {
				type: Sequelize.INTEGER,
				defaultValue: 0,
			},
		},
		{
			freezeTableName: true,
			timestamps: true,
			// paranoid: true,
			underscored: true,
		}
	),
};
