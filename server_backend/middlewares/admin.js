const jwt = require("jsonwebtoken");
const configs = require("../config");

module.exports = {
	verifyToken: (req, res, next) => {
		let token = req.headers["x-access-token"];
		if (!token) {
			return res.status(403).send({
				message: "No token provider",
			});
		}
		jwt.verify(token, configs.secret, (err, decoded) => {
			if (err) {
				return res.send(401).status({
					message: "Unauthorized",
				});
			}
			req.userId = decoded.id;
			if (decoded.type != 1) {
				return res.status(401).send({
					message: "Restrict Area",
				});
			}
			req.type = decoded.type;
			next();
		});
	},
};
