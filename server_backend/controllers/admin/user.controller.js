const { getPaginate, uploadImage } = require("../../helpers");
const { jsonResponse } = require("../../helpers");
const { default: logger } = require("../../helpers/logger");
const { User, UserRole } = require("../../models/_index");

module.exports = {
	me: (req, res) => {
		return res.status(200).json({
			message: "welcome dashboard",
		});
	},
	get: async (req, res) => {
		const { page, item_per_page } = req.query;
		const { limit, offset } = getPaginate(
			parseInt(page),
			parseInt(item_per_page)
		);
		try {
			const users = await User.findAndCountAll({
				include: [
					{
						model: UserRole,
						as: "user_role",
					},
				],
				order: [["created_at", "DESC"]],
				offset: offset,
				limit: limit,
				nest: true,
				raw: true,
			});
			return jsonResponse(res, 200, "success", {
				user: users.rows,
				count: users.count,
			});
		} catch (error) {
			return jsonResponse(res, 500, error);
		}
	},
	store: async (req, res) => {
		const { data } = uploadImage(req.files.logo, "users");
		try {
			req.body.image = data.name;
			req.body.image_url = data.url;
			const users = await User.create(req.body);
			return jsonResponse(res, 200, "success", {
				users: users,
			});
		} catch (error) {
			return jsonResponse(res, 500, "ไม่สามารถเพิ่มได้ หรือ ผู้ใช้งานซ้ำ");
		}
	},
	update: async (req, res) => {
		const { user_id } = req.params;
		if (req.files) {
			const { data } = uploadImage(req.files.logo, "users");
			req.body.image = data.name;
			req.body.image_url = data.url;
		}
		try {
			await User.update(req.body, {
				where: {
					id: user_id,
				},
			});
			return jsonResponse(res, 200, "success");
		} catch (error) {
			return jsonResponse(res, 500, "ไม่สามารอัพเดทข้อมูลได้");
		}
	},
	delete: async (req, res) => {
		const { user_id } = req.params;
		try {
			await User.destroy({
				where: {
					id: user_id,
				},
			});
			return jsonResponse(res, 200, "success");
		} catch (error) {
			return jsonResponse(res, 500, "ไม่สามารถลบข้อมูลได้");
		}
	},
};
