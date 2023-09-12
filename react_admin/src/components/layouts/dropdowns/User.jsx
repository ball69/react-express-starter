import { useNavigate } from "react-router-dom";
import { useAuthenticate } from "../../../store/authenticate";

function DropdownUser() {
	const { auth } = useAuthenticate((state) => state.auth);
	const removeAuth = useAuthenticate((state) => state.removeAuth);
	const navigate = useNavigate();
	const logout = () => {
		window.localStorage.removeItem("user");
		removeAuth();
		navigate("/login");
	};
	return (
		<>
			<div className="dropdown ms-sm-3 header-item topbar-user">
				<button
					type="button"
					className="btn"
					id="page-header-user-dropdown"
					data-bs-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<span className="d-flex align-items-center">
						<img
							className="rounded-circle header-profile-user"
							src="/assets/images/users/avatar-1.jpg"
							alt="Header Avatar"
						/>
						{auth && (
							<>
								<span className="text-start ms-xl-2">
									<span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
										{auth.user.username}
									</span>
									<span className="d-none d-xl-block ms-1 fs-12 user-name-sub-text">
										{auth.user.user_role.name_en}
									</span>
								</span>
							</>
						)}
					</span>
				</button>
				<div className="dropdown-menu dropdown-menu-end">
					<h6 className="dropdown-header">Welcome Anna!</h6>
					<a className="dropdown-item">
						<i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1" />
						<span className="align-middle">Profile</span>
					</a>
					{/* <a className="dropdown-item">
						<i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1" />
						<span className="align-middle">Messages</span>
					</a>
					<a className="dropdown-item">
						<i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1" />
						<span className="align-middle">Taskboard</span>
					</a>
					<a className="dropdown-item">
						<i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1" />
						<span className="align-middle">Help</span>
					</a> */}
					<div className="dropdown-divider" />
					<a className="dropdown-item">
						<i className="mdi mdi-wallet text-muted fs-16 align-middle me-1" />
						<span className="align-middle">
							Balance : <b>$5971.67</b>
						</span>
					</a>
					{/* <a className="dropdown-item">
						<span className="badge bg-success-subtle text-success mt-1 float-end">
							New
						</span>
						<i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1" />
						<span className="align-middle">Settings</span>
					</a> */}
					<a className="dropdown-item">
						<i className="mdi mdi-lock text-muted fs-16 align-middle me-1" />
						<span className="align-middle">Lock screen</span>
					</a>
					<a className="dropdown-item" onClick={() => logout()}>
						<i className="mdi mdi-logout text-muted fs-16 align-middle me-1" />
						<span className="align-middle" data-key="t-logout">
							Logout
						</span>
					</a>
				</div>
			</div>
		</>
	);
}

export default DropdownUser;
