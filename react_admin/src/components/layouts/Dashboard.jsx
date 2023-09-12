import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./parts/Footer";
import Header from "./parts/Header";
import Navbar from "./parts/Navbar";
import BreadCrumbs from "./parts/BreadCrumbs";
import { useAuthenticate } from "../../store/authenticate";
import { useEffect } from "react";
import { usePageLoading } from "../../store/loading";
import { Helpers } from "../../helpers";
import { AuthService } from "../../services/AuthService";

function LayoutDashboard() {
	const auth = useAuthenticate((state) => state.auth);
	const navigate = useNavigate();
	const { loading, setLoading } = usePageLoading((state) => state);

	Helpers.setThemeMode("dark");

	if (!auth.isLoggedIn) {
		navigate("/login");
		setLoading(false);
	}

	useEffect(() => {
		AuthService.me();
	}, []);

	return (
		<>
			{loading && (
				<>
					<div id="preloader">
						<div id="status">
							<div
								className="spinner-border text-primary avatar-sm"
								role="status"
							>
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					</div>
				</>
			)}
			<>
				<div id="layout-wrapper">
					<Header />
					<Navbar />
					<div className="vertical-overlay"></div>
					<div className="main-content">
						<div className="page-content">
							<div className="container-fluid">
								<BreadCrumbs />
								<Outlet />
							</div>
						</div>
						<Footer />
					</div>
				</div>
			</>
		</>
	);
}

export default LayoutDashboard;
