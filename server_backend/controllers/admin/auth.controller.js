const { model, User, UserRole } = require("../../models/_index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const configs = require("../../config");

module.exports = {
	signup: async (req, res) => {
		let userCheck = await User.findOne({
			where: {
				username: req.body.username,
			},
		});
		if (userCheck) {
			res.status(400).send({
				message: "Failed Username is already in user",
			});
			return;
		}
		let userRole = await UserRole.findOne(req.user_role_id);
		try {
			var userCreate = await User.create({
				user_role_id: userRole.id,
				name: req.body.name,
				username: req.body.username,
				password: bcrypt.hashSync(req.body.password, 12),
			});
		} catch (error) {
			res.status(500).send({
				message: error.message,
			});
			return;
		}
		res.status(200).send({
			message: "success",
			user: userCreate,
		});
		return;
	},
	signin: async (req, res) => {
		let user = await User.findOne({
			// attributes: { exclude: ["password"] },
			where: {
				username: req.body.username,
			},
			include: {
				model: UserRole,
				attributes: ["name_en"],
			},
			raw: true,
			nest: true,
		});
		if (!user) {
			return res.status(401).send({
				message: "Username or password is invalid",
			});
		}
		let passwordCheck = await bcrypt.compareSync(
			req.body.password,
			user.password
		);
		if (!passwordCheck) {
			return res.status(401).send({
				message: "Username or password is invalid",
			});
		}
		try {
			var token = await jwt.sign({ id: user.id, type: 1 }, configs.secret, {
				expiresIn: 86400, // 24 hours
			});
		} catch (err) {
			return res.status(500).json(err);
		}
		return res.status(200).json({
			accessToken: token,
			user: user,
		});
	},
};
