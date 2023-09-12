const express = require("express");
const userController = require("../controllers/user/user.controller");
const userRoleController = require("../controllers/user/user-role.controller");

module.exports = (app) => {
	const router = express.Router();

	router.get("/user", userController.get);
	router.post("/user/store", userController.store);

	router.get("/user-role", userRoleController.get);
	router.post("/user-role", userRoleController.store);

	app.use("/api", router);
};
