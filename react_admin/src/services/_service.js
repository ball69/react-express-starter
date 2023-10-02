import { Helpers } from "../helpers";

const API_URL = import.meta.env.VITE_API_URL + "/api";

export const Service = {
	get: async () => {
		return await Helpers.httpRequest(API_URL + "/", "GET");
	},
	create: async (data) => {
		return await Helpers.httpRequest(API_URL + "/", "POST", data);
	},
	update: async () => {
		return await Helpers.httpRequest(API_URL + "/", "PUT");
	},
	delete: async () => {
		return await Helpers.httpRequest(API_URL + "/", "DELETE");
	},
};
