const userController = require("../controllers/admin/user.controller");
const authController = require("../controllers/admin/auth.controller");
const admin = require("../middlewares/admin");
const express = require("express");

module.exports = (app) => {
	const router = express.Router();
	router.post("/signup", authController.signup);
	router.post("/signin", authController.signin);
	app.use("/api/admin/auth", router);
	router.get("/me", userController.me);

	//user
	router.get("/user", userController.get);

	app.use("/api/admin", admin.verifyToken, router);
};
