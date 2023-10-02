import axios from "axios";
import { toast } from "react-toastify";

export const Helpers = {
	setAuthHeaders: () => {
		const user = JSON.parse(window.localStorage.getItem("user"));
		if (user) {
			axios.defaults.headers.common["x-access-token"] = user.accessToken;
		}
		axios.defaults.headers.post["Content-Type"] = "application/json";
		axios.interceptors.response.use(
			(response) => {
				return Promise.resolve(response);
			},
			(error) => {
				if (error.response.status === 401) {
					window.localStorage.removeItem("user");
					window.location.href = "/login";
				}
				return Promise.reject(error);
			}
		);
	},
	setThemeMode: (theme) => {
		document.documentElement.setAttribute("data-bs-theme", theme);
		document.documentElement.setAttribute("data-topbar", theme);
		document.documentElement.setAttribute("data-sidebar", theme);
	},
	httpRequest: (url, method, data, params = "") => {
		return new Promise((resolve, reject) => {
			return axios
				.request({
					url: url + (params !== null && params),
					method: method,
					data: data,
				})
				.then((response) => {
					return resolve(response);
				})
				.catch((error) => {
					return reject(error.response);
				});
		});
	},
	httpRequestUpload: (url, method, data, params = "") => {
		return new Promise((resolve, reject) => {
			return axios
				.request({
					url: url + (params !== null && params),
					method: method,
					data: data,
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((response) => {
					return resolve(response);
				})
				.catch((error) => {
					console.log(error);
					return reject(error.response);
				});
		});
	},
	notify: (content, type, position = "top-right", theme = "colored") => {
		toast(content, {
			type: type,
			position: position,
			theme: theme,
		});
	},
	sweetalert: () => {},
};
