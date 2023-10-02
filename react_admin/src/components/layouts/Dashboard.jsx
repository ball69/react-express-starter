import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./parts/Footer";
import Header from "./parts/Header";
import Navbar from "./parts/Navbar";
import BreadCrumbs from "./parts/BreadCrumbs";
import { useAuthenticate } from "../../store/authenticate";
import { useEffect } from "react";
import { usePageLoading } from "../../store/loading";
import { AuthService } from "../../services/AuthService";
import Loading from "../Loading";

function LayoutDashboard() {
	const auth = useAuthenticate((state) => state.auth);
	const navigate = useNavigate();
	const { loading, setLoading } = usePageLoading((state) => state);

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
					<Loading />
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
