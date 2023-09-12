import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { PiWarehouseBold } from "react-icons/pi";

function Navbar() {
	window.addEventListener("click", () => {
		// ...
		const links = document.querySelectorAll(".link-to");

		links.forEach((link) => {
			link.addEventListener("click", function handleClick() {
				document.body.classList.remove("vertical-sidebar-enable");
				// link.setAttribute("style", "background-color: yellow;");
			});
		});
	});
	useEffect(() => {}, []);
	return (
		<>
			<div className="app-menu navbar-menu" id="appBar">
				<div className="menu-close d-lg-none d-md-none">
					<button
						className="btn btn-default btn-sm"
						onClick={() =>
							document.body.classList.remove("vertical-sidebar-enable")
						}
					>
						<i className="fa fa-times"></i>
					</button>
				</div>
				<div className="navbar-brand-box">
					<a href="index.html" className="logo logo-dark">
						<span className="logo-sm">
							{/* <img src="/assets/images/logo-sm.png" alt="true" height={22} /> */}
						</span>
						<span className="logo-lg">
							{/* <img src="/assets/images/logo-dark.png" alt="true" height={17} /> */}
						</span>
					</a>
					<a href="index.html" className="logo logo-light">
						<span className="logo-sm">
							<PiWarehouseBold size={24} />
							{/* <img src="/assets/images/logo-sm.png" alt="true" height={22} /> */}
						</span>
						<span className="logo-lg">
							<PiWarehouseBold size={26} />{" "}
							<span
								style={{
									position: "relative",
									top: "5%",
									left: "2.5%",
									textTransform: "uppercase",
								}}
							>
								{import.meta.env.VITE_APP_NAME}
							</span>
							{/* <img src="/assets/images/logo-light.png" alt="true" height={17} /> */}
						</span>
					</a>
					<button
						type="button"
						className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
						id="vertical-hover"
					>
						<i className="ri-record-circle-line" />
					</button>
				</div>
				<div id="scrollbar">
					<div className="container-fluid">
						<div id="two-column-menu" />
						<ul className="navbar-nav" id="navbar-nav">
							<li className="menu-title" style={{ padding: "0px 2px" }}>
								{/* <PiListBold /> */}
								<span data-key="t-menu">เมนู</span>
							</li>
							<li className="nav-item">
								<Link
									to="/"
									className="nav-link menu-link link-to"
									href="#sidebarDashboards"
									role="button"
									aria-expanded="false"
									aria-controls="sidebarDashboards"
								>
									<AiOutlineHome size={24} />
									<span data-key="t-dashboards">หน้าแรก</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/user"
									className="nav-link menu-link link-to"
									href="#sidebarDashboards"
									role="button"
									aria-expanded="false"
									aria-controls="sidebarDashboards"
								>
									<AiOutlineUser size={24} />
									<span data-key="t-dashboards">จัดการผู้ใช้งาน</span>
								</Link>
							</li>
							{/* end Dashboard Menu */}
							{/* <li className="nav-item">
								<a
									className="nav-link menu-link "
									href="#sidebarApps"
									data-bs-toggle="collapse"
									role="button"
									aria-expanded="false"
									aria-controls="sidebarApps"
								>
									<i className="fas fa-th-large"></i>
									<span data-key="t-apps">Apps</span>
								</a>
								<div className="collapse menu-dropdown" id="sidebarApps">
									<ul className="nav nav-sm flex-column">
										<li className="nav-item">
											<a className="nav-link link-to" data-key="t-calendar">
												Calendar
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link link-to" data-key="t-chat">
												Chat
											</a>
										</li>
									</ul>
								</div>
							</li> */}
						</ul>
					</div>
					{/* Sidebar */}
				</div>
				<div className="sidebar-background" />
			</div>
		</>
	);
}

export default Navbar;
