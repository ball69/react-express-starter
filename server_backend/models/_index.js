const { User } = require("./user.model");
const { UserRole } = require("./user-role.model");
const { UserRolePermission } = require("./user-role-permission.model");
const { Bank } = require("./bank.model");

User.belongsTo(UserRole);
UserRole.hasMany(User);

module.exports = {
	Bank,
	User,
	UserRole,
	UserRolePermission,
};
