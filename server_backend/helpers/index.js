var path = require("path");
const fs = require("fs");
const logger = require("./logger");

module.exports = {
	uploadImage: (files, floder) => {
		try {
			var floderPath = "./storage/" + floder;
			if (!fs.existsSync(floderPath)) {
				fs.mkdirSync(floderPath);
			}
			if (!files) {
				return {
					status: false,
					message: "No File Upload",
				};
			} else {
				let file = files;
				let paths = path.extname(file.name).substr(1);
				file.name = Date.now() + "." + paths;
				file.mv("./storage/" + floder + "/" + file.name);
				let url = process.env.APP_URL + "/storage/" + floder + "/" + file.name;
				return {
					status: true,
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
				message: error.message,
			};
		}
	},
	thisLine: () => {
		const e = new Error();
		const regex = /\((.*):(\d+):(\d+)\)$/;
		const match = regex.exec(e.stack.split("\n")[2]);
		return {
			filepath: match[1],
			line: match[2],
			column: match[3],
		};
	},
	jsonResponse: (res, status, message, ...data) => {
		if (status === 500) {
			logger.error(message);
			return res.status(status).send(message);
		} else {
			return res.status(status).json({
				message: message,
				...data[0],
			});
		}
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
	getPaginate: (page, item_per_page) => {
		const limit = item_per_page;
		const offset = parseInt(page - 1) * parseInt(limit);
		return { limit: limit, offset: offset };
	},
};
