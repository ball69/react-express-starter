import { Helpers } from "../helpers";

const API_URL = import.meta.env.VITE_API_URL + "/api";

export const UserService = {
	me: async () => {
		try {
			const response = await Helpers.httpRequest(API_URL + "/admin/me", "GET");
			return response;
		} catch (error) {
			return error;
		}
	},
	get: async () => {
		try {
			const response = await Helpers.httpRequest(
				API_URL + "/admin/user",
				"GET"
			);
			return response;
		} catch (error) {
			return error;
		}
	},
};
