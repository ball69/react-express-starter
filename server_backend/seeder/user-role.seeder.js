const { UserRole } = require("../models/user-role.model");

module.exports = async () => {
	//Admin Panel
	await UserRole.create({
		name_en: "Administrator",
		name_th: "ผู้ดูแลระบบ",
	});
	await UserRole.create({
		name_en: "Support",
		name_th: "ผู้ช่วย",
	});

	//Agent Panel
	// await model.UserRole.create({
	//     name_en: "Agent",
	//     name_th: "เอเย่นต์"
	// })
	// await model.UserRole.create({
	//     name_en: "Manager",
	//     name_th: "ผู้จัดการ"
	// })
	// await model.UserRole.create({
	//     name_en: "Employee",
	//     name_th: "พนักงาน"
	// })
};
