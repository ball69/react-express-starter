import { Helpers } from "../helpers";

const API_URL = import.meta.env.VITE_API_URL + "/api";

export const UserRoleService = {
	get: async () => {
		return await Helpers.httpRequest(API_URL + "/admin/user-role", "GET");
	},
	me: async () => {
		return await Helpers.httpRequest(API_URL + "/admin/me", "GET");
	},
};
