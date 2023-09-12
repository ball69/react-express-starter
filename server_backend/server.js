const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const app = express();
const logger = require("./helpers/logger");
require("dotenv").config();
app.use(
	cors({
		origin: ["http://localhost:3000"],
	})
);
app.use(fileUpload());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
		keepExtensions: true,
	})
);

require("./routes/admin.route")(app);
require("./routes/user.route")(app);

app.use("/storage", express.static("public"));
app.use("/storage", express.static("storage"));

const PORT = process.env.APP_PORT || 8081;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
