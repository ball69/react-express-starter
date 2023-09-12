// import DropdownApp from "../dropdowns/App";
// import DropdownCart from "../dropdowns/Cart";
// import DropdownLanguage from "../dropdowns/Language";
import DropdownNotification from "../dropdowns/Notification";
import DropdownThemeMode from "../dropdowns/ThemeMode";
import DropdownUser from "../dropdowns/User";
import { PiListBold } from "react-icons/pi";

function Header() {
	const handleSidebar = () => {
		const innerWidth = window.innerWidth;
		if (innerWidth < 460) {
			document.body.classList.add("vertical-sidebar-enable");
		} else {
			const sidebarAttr =
				document.documentElement.getAttribute("data-sidebar-size");
			if (sidebarAttr === "sm") {
				document.documentElement.setAttribute("data-sidebar-size", "lg");
			} else if (sidebarAttr === "lg") {
				document.documentElement.setAttribute("data-sidebar-size", "sm");
			}
		}
	};
	return (
		<>
			<header id="page-topbar">
				<div className="layout-width">
					<div className="navbar-header">
						<div className="d-flex">
							{/* LOGO */}
							<div className="navbar-brand-box horizontal-logo">
								<a href="index.html" className="logo logo-dark">
									<span className="logo-sm">
										<img
											src="/assets/images/logo-sm.png"
											alt="true"
											height={22}
										/>
									</span>
									<span className="logo-lg">
										<img
											src="/assets/images/logo-dark.png"
											alt="true"
											height={17}
										/>
									</span>
								</a>
								<a href="index.html" className="logo logo-light">
									<span className="logo-sm">
										<img
											src="/assets/images/logo-sm.png"
											alt="true"
											height={22}
										/>
									</span>
									<span className="logo-lg">
										<img
											src="/assets/images/logo-light.png"
											alt="true"
											height={17}
										/>
									</span>
								</a>
							</div>
							<button
								onClick={() => {
									handleSidebar();
								}}
								type="button"
								className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
								id="topnav-hamburger-icon"
							>
								<PiListBold size={24} />
							</button>
							{/* <form className="app-search d-none d-md-block">
								<div className="position-relative">
									<input
										type="text"
										className="form-control"
										placeholder="Search..."
										autoComplete="off"
										id="search-options"
										defaultValue
									/>
									<span className="mdi mdi-magnify search-widget-icon" />
									<span
										className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
										id="search-close-options"
									/>
								</div>
								<div
									className="dropdown-menu dropdown-menu-lg"
									id="search-dropdown"
								>
									<div data-simplebar style={{ maxHeight: 320 }}>
										<div className="dropdown-header">
											<h6 className="text-overflow text-muted mb-0 text-uppercase">
												Recent Searches
											</h6>
										</div>
										<div className="dropdown-item bg-transparent text-wrap">
											<a
												href="index.html"
												className="btn btn-soft-secondary btn-sm rounded-pill"
											>
												how to setup <i className="mdi mdi-magnify ms-1" />
											</a>
											<a
												href="index.html"
												className="btn btn-soft-secondary btn-sm rounded-pill"
											>
												buttons <i className="mdi mdi-magnify ms-1" />
											</a>
										</div>

										<div className="dropdown-header mt-2">
											<h6 className="text-overflow text-muted mb-1 text-uppercase">
												Pages
											</h6>
										</div>

										<a className="dropdown-item notify-item">
											<i className="ri-bubble-chart-line align-middle fs-18 text-muted me-2" />
											<span>Analytics Dashboard</span>
										</a>

										<a className="dropdown-item notify-item">
											<i className="ri-lifebuoy-line align-middle fs-18 text-muted me-2" />
											<span>Help Center</span>
										</a>

										<a className="dropdown-item notify-item">
											<i className="ri-user-settings-line align-middle fs-18 text-muted me-2" />
											<span>My account settings</span>
										</a>

										<div className="dropdown-header mt-2">
											<h6 className="text-overflow text-muted mb-2 text-uppercase">
												Members
											</h6>
										</div>
										<div className="notification-list">
											<a className="dropdown-item notify-item py-2">
												<div className="d-flex">
													<img
														src="/assets/images/users/avatar-2.jpg"
														className="me-3 rounded-circle avatar-xs"
														alt="user-pic"
													/>
													<div className="flex-grow-1">
														<h6 className="m-0">Angela Bernier</h6>
														<span className="fs-11 mb-0 text-muted">
															Manager
														</span>
													</div>
												</div>
											</a>

											<a className="dropdown-item notify-item py-2">
												<div className="d-flex">
													<img
														src="/assets/images/users/avatar-3.jpg"
														className="me-3 rounded-circle avatar-xs"
														alt="user-pic"
													/>
													<div className="flex-grow-1">
														<h6 className="m-0">David Grasso</h6>
														<span className="fs-11 mb-0 text-muted">
															Web Designer
														</span>
													</div>
												</div>
											</a>

											<a className="dropdown-item notify-item py-2">
												<div className="d-flex">
													<img
														src="/assets/images/users/avatar-5.jpg"
														className="me-3 rounded-circle avatar-xs"
														alt="user-pic"
													/>
													<div className="flex-grow-1">
														<h6 className="m-0">Mike Bunch</h6>
														<span className="fs-11 mb-0 text-muted">
															React Developer
														</span>
													</div>
												</div>
											</a>
										</div>
									</div>
									<div className="text-center pt-3 pb-1">
										<a
											href="pages-search-results.html"
											className="btn btn-primary btn-sm"
										>
											View All Results{" "}
											<i className="ri-arrow-right-line ms-1" />
										</a>
									</div>
								</div>
							</form> */}
							{/* <div className="dropdown d-md-none topbar-head-dropdown header-item">
								<button
									type="button"
									className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
									id="page-header-search-dropdown"
									data-bs-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<i className="bx bx-search fs-22" />
								</button>
								<div
									className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
									aria-labelledby="page-header-search-dropdown"
								>
									<form className="p-3">
										<div className="form-group m-0">
											<div className="input-group">
												<input
													type="text"
													className="form-control"
													placeholder="Search ..."
													aria-label="Recipient's username"
												/>
												<button className="btn btn-primary" type="submit">
													<i className="mdi mdi-magnify" />
												</button>
											</div>
										</div>
									</form>
								</div>
							</div> */}
						</div>
						<div className="d-flex align-items-center">
							{/* <DropdownLanguage /> */}
							{/* <DropdownApp /> */}
							{/* <DropdownCart /> */}
							<DropdownThemeMode />
							<DropdownNotification />
							<DropdownUser />
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
