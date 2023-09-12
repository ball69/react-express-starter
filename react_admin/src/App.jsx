// import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./AppRoutes.jsx";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { Helpers } from "./helpers/index.js";

Helpers.setAuthHeaders();

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<BrowserRouter>
		<Routes />
	</BrowserRouter>
	// </React.StrictMode>
);
