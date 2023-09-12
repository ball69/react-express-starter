const Sequelize = require("sequelize");
const { db } = require("../config/database");

module.exports = {
	UserRole: db.define(
		"user_roles",
		{
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4, //1 ผู้บริหาร //2 ผู้จัดการ //3 พนักงานเติมเงิน //4 พนักงานถอนเงิน //5 พนักงานประชาสัมพันธ์ด้านการขาย
				primaryKey: true,
			},
			name_en: {
				type: Sequelize.STRING,
				allownull: false,
			},
			name_th: {
				type: Sequelize.STRING,
				allownull: false,
			},
			// status: {
			//    type: Sequelize.INTEGER,
			//    allownull: false,
			// },
		},
		{
			freezeTableName: true,
			timestamps: true,
			// paranoid: true,
			underscored: true,
		}
	),
};
