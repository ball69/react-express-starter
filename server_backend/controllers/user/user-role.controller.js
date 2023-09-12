const { UserRole } = require("../../models/_index");
const { jsonResponse } = require("../../helpers");

module.exports = {
	get: async (req, res) => {
		try {
			const user_roles = await UserRole.findAll();
			return jsonResponse(res, 200, "success", {
				user_roles: user_roles,
			});
		} catch (error) {
			return jsonResponse(res, 500, error.message);
		}
	},
	store: (req, res) => {
		console.log("create banks");
	},
	update: (req, res) => {
		console.log("update bank");
	},
	delete: (req, res) => {
		console.log("delete banks");
	},
};
