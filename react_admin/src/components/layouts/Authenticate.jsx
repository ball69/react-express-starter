import { Outlet, useNavigate } from "react-router-dom";
import { useAuthenticate } from "../../store/authenticate";
import { useEffect } from "react";

function LayoutAuthenticate() {
	const auth = useAuthenticate((state) => state.auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (auth.isLoggedIn) {
			navigate("/");
		}
	});

	return (
		<>
			<div className="auth-page-wrapper pt-5">
				<div className="auth-page-content">
					<div className="container">
						<div className="row justify-content-center">{<Outlet />}</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default LayoutAuthenticate;
