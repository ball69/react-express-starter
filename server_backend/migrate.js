const { db } = require("./config/database");
const bankSeeder = require("./seeder/bank.seeder");
const userRolePermissionSeeder = require("./seeder/user-role-permission.seeder");
const userRoleSeeder = require("./seeder/user-role.seeder");
const userSeeder = require("./seeder/user.seeder");
(async () => {
	await db.sync({
		force: true,
	});

	await bankSeeder();

	await userRoleSeeder();

	await userSeeder();

	await userRolePermissionSeeder();
})();
