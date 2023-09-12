const { jsonResponse } = require("../../helpers");
const { UserRole } = require("../../models/user-role.model");

module.exports = {
	get: async (req, res) => {
		try {
			const user_roles = await UserRole.find();
			return jsonResponse(res, 200, "success", {
				user_roles: user_roles,
			});
		} catch (error) {
			return jsonResponse(res, 500, error);
		}
	},
	create: () => {},
	update: () => {},
	delete: () => {},
};
