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
