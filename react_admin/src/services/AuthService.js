import { Helpers } from "../helpers";

const API_URL = import.meta.env.VITE_API_URL + "/api";

export const AuthService = {
	login: async (data) => {
		try {
			const response = await Helpers.httpRequest(
				API_URL + "/admin/auth/signin",
				"POST",
				data
			);
			window.localStorage.setItem("user", JSON.stringify(response.data));
			Helpers.setAuthHeaders();
			return response;
		} catch (error) {
			return error.response;
		}
	},
	me: async () => {
		try {
			const response = await Helpers.httpRequest(API_URL + "/admin/me", "GET");
			return response;
		} catch (error) {
			return error.response;
		}
	},
};
