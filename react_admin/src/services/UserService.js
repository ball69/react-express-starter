import { Helpers } from "../helpers";

const API_URL = import.meta.env.VITE_API_URL + "/api";

export const UserService = {
	me: async () => {
		return await Helpers.httpRequest(API_URL + "/admin/me", "GET");
	},
	get: async (pageinate_params) => {
		return await Helpers.httpRequest(
			API_URL + "/admin/user",
			"GET",
			null,
			pageinate_params
		);
	},
	create: async (data) => {
		return await Helpers.httpRequestUpload(
			API_URL + "/admin/user/store",
			"POST",
			data,
			"",
			true
		);
	},
	update: async (data, user_id) => {
		return await Helpers.httpRequestUpload(
			API_URL + "/admin/user/update/" + user_id,
			"PUT",
			data
		);
	},
	delete: async (user_id) => {
		return await Helpers.httpRequest(
			API_URL + "/admin/user/delete/" + user_id,
			"DELETE",
			null
		);
	},
};
