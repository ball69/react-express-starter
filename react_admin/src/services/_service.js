import { Helpers } from "../helpers";

const API_URL = import.meta.env.VITE_API_URL + "/api";

export const Service = {
	get: async () => {
		try {
			const response = await Helpers.httpRequest(API_URL + "/", "GET");
			return response;
		} catch (error) {
			return error.response;
		}
	},
	create: async () => {
		try {
			const response = await Helpers.httpRequest(API_URL + "/", "POST");
			return response;
		} catch (error) {
			return error.response;
		}
	},
	update: async () => {
		try {
			const response = await Helpers.httpRequest(API_URL + "/", "PUT");
			return response;
		} catch (error) {
			return error.response;
		}
	},
	delete: async () => {
		try {
			const response = await Helpers.httpRequest(API_URL + "/", "DELETE");
			return response;
		} catch (error) {
			return error.response;
		}
	},
};
