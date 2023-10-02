import { Helpers } from "../helpers";

const API_URL = import.meta.env.VITE_API_URL + "/api";

export const AuthService = {
	login: async (data) => {
		return await Helpers.httpRequest(
			API_URL + "/admin/auth/signin",
			"POST",
			data
		);
	},
	me: async () => {
		return await Helpers.httpRequest(API_URL + "/admin/me", "GET");
	},
};
