var path = require("path");
const fs = require("fs");
const logger = require("./logger");

module.exports = {
	uploadImage: (files, floder) => {
		try {
			if (!files) {
				return {
					status: false,
					message: "No File Upload",
				};
			} else {
				let file = files.image;

				let paths = path.extname(file.name).substr(1);

				file.name = Date.now() + "." + paths;

				file.mv("./storage/" + floder + "/" + file.name);

				let url = process.env.APP_URL + "/storage/" + floder + "/" + file.name;

				return {
					status: true,
					message: "File is uploaded",
					data: {
						name: file.name,
						mimetype: file.mimetype,
						size: file.size,
						url: url,
						path: "storage/" + floder + "/" + file.name,
					},
				};
			}
		} catch (error) {
			return {
				status: false,
				message: "Server Error",
			};
		}
	},
	jsonResponse: (res, status, message, ...data) => {
		if (status === 500) {
			logger.error(message);
		}
		return res.status(status).json({
			message: message,
			...data[0],
		});
	},
	generateCode: (length) => {
		let result = "";
		const characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		const charactersLength = characters.length;
		let counter = 0;
		while (counter < length) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
			counter += 1;
		}
		return result.toUpperCase();
	},
};
