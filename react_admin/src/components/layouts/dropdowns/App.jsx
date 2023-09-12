// import React from "react";

function DropdownApp() {
	return (
		<>
			<div className="dropdown topbar-head-dropdown ms-1 header-item">
				<button
					type="button"
					className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
					data-bs-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<i className="bx bx-category-alt fs-22" />
				</button>
				<div className="dropdown-menu dropdown-menu-lg p-0 dropdown-menu-end">
					<div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
						<div className="row align-items-center">
							<div className="col">
								<h6 className="m-0 fw-semibold fs-15">Web Apps</h6>
							</div>
							<div className="col-auto">
								<a href="#!" className="btn btn-sm btn-soft-info">
									View All Apps
									<i className="ri-arrow-right-s-line align-middle" />
								</a>
							</div>
						</div>
					</div>
					<div className="p-2">
						<div className="row g-0">
							<div className="col">
								<a className="dropdown-icon-item" href="#!">
									<img src="/assets/images/brands/github.png" alt="Github" />
									<span>GitHub</span>
								</a>
							</div>
							<div className="col">
								<a className="dropdown-icon-item" href="#!">
									<img
										src="/assets/images/brands/bitbucket.png"
										alt="bitbucket"
									/>
									<span>Bitbucket</span>
								</a>
							</div>
							<div className="col">
								<a className="dropdown-icon-item" href="#!">
									<img
										src="/assets/images/brands/dribbble.png"
										alt="dribbble"
									/>
									<span>Dribbble</span>
								</a>
							</div>
						</div>
						<div className="row g-0">
							<div className="col">
								<a className="dropdown-icon-item" href="#!">
									<img src="/assets/images/brands/dropbox.png" alt="dropbox" />
									<span>Dropbox</span>
								</a>
							</div>
							<div className="col">
								<a className="dropdown-icon-item" href="#!">
									<img
										src="/assets/images/brands/mail_chimp.png"
										alt="mail_chimp"
									/>
									<span>Mail Chimp</span>
								</a>
							</div>
							<div className="col">
								<a className="dropdown-icon-item" href="#!">
									<img src="/assets/images/brands/slack.png" alt="slack" />
									<span>Slack</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default DropdownApp;
