const { jsonResponse } = require("../../helpers");
const { default: logger } = require("../../helpers/logger");
const { User } = require("../../models/_index");

module.exports = {
	me: (req, res) => {
		return res.status(200).json({
			message: "welcome dashboard",
		});
	},
	get: async (req, res) => {
		try {
			const users = await User.findAll();
			return res.status(200).json({
				users: users,
			});
		} catch (error) {
			return jsonResponse(res, 500, error.message);
		}
	},
};
