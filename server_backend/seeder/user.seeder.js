const { User, UserRole } = require("../models/_index");
const bcrypt = require("bcryptjs");

module.exports = async () => {
	const user_role_administrator = await UserRole.findOne({
		where: {
			name_en: "Administrator",
		},
	});
	const user_role_support = await UserRole.findOne({
		where: {
			name_en: "Support",
		},
	});
	await User.create({
		user_role_id: user_role_administrator.id,
		image_url: "https://via.placeholder.com/150",
		name: "administrator",
		username: "admin",
		password: bcrypt.hashSync("123123", 12),
	});

	for (var i = 1; i <= 40; i++) {
		await User.create({
			user_role_id: user_role_support.id,
			image_url: "https://via.placeholder.com/150",
			name: "support" + i,
			username: "Support " + i,
			password: bcrypt.hashSync("123123", 12),
		});
	}
};
