const { UserRolePermission } = require("../models/user-role-permission.model");
const { UserRole } = require("../models/user-role.model");

module.exports = async () => {
	const MODULE = ["user", "game"];

	const user_roles = await UserRole.findAll();

	await Promise.all(
		user_roles.map((user_role) => {
			MODULE.map((module) => {
				UserRolePermission.create({
					user_role_id: user_role.id,
					module: module,
				});
			});
		})
	);
};
