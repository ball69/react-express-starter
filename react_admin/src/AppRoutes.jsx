import { Route, Routes } from "react-router-dom";
import LayoutDashboard from "./components/layouts/Dashboard";
import Home from "./pages/Home";
import User from "./pages/users/User";
// import UserDetail from "./pages/users/UserDetail";
import LayoutAuthenticate from "./components/layouts/Authenticate";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppRoutes() {
	return (
		<>
			<Routes>
				<Route element={<LayoutDashboard />}>
					<Route path="/" exact element={<Home />} />
					<Route path="/user" element={<User />} />
					{/* <Route path="/user/:user_id" exact element={<UserDetail />} /> */}
				</Route>
				<Route element={<LayoutAuthenticate />}>
					<Route path="/login" element={<Login />} />
				</Route>
			</Routes>
			<ToastContainer />
		</>
	);
}

export default AppRoutes;
