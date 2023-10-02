const Sequelize = require("sequelize");
const { db } = require("../config/database");

module.exports = {
	UserRolePermission: db.define(
		"user_role_permission",
		{
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4, //1 ผู้บริหาร //2 ผู้จัดการ //3 พนักงานเติมเงิน //4 พนักงานถอนเงิน //5 พนักงานประชาสัมพันธ์ด้านการขาย
				// autoIncrement: true,
				primaryKey: true,
			},
			user_role_id: {
				type: Sequelize.UUID,
				allownull: false,
			},
			module: {
				type: Sequelize.STRING,
				allownull: false,
			},
			read: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
			},
			write: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
			},
			update: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
			},
			delete: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
			},

			// createdAt: {
			// 	allowNull: false,
			// 	type: Sequelize.DATE,
			// 	defaultValue: Sequelize.fn("NOW"),
			// },
			// updatedAt: {
			// 	allowNull: false,
			// 	type: Sequelize.DATE,
			// 	defaultValue: Sequelize.fn("NOW"),
			// },
		},
		{
			freezeTableName: true,
			timestamps: true,
			underscored: true,
		}
	),
};
