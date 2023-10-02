const userController = require("../controllers/admin/user.controller");
const authController = require("../controllers/admin/auth.controller");
const admin = require("../middlewares/admin");
const express = require("express");
const userRoleController = require("../controllers/admin/user-role.controller");

module.exports = (app) => {
	const router = express.Router();
	router.post("/signup", authController.signup);
	router.post("/signin", authController.signin);
	app.use("/api/admin/auth", router);
	router.get("/me", userController.me);

	//user
	router.get("/user", userController.get);
	router.post("/user/store", userController.store);
	router.put("/user/update/:user_id", userController.update);
	router.delete("/user/delete/:user_id", userController.delete);

	//UserRole
	router.get("/user-role", userRoleController.get);

	app.use("/api/admin", admin.verifyToken, router);
};
