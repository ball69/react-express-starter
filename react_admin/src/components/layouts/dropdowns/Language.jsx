// import React from "react";

function DropdownLanguage() {
	return (
		<>
			<div className="dropdown ms-1 topbar-head-dropdown header-item">
				<button
					type="button"
					className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
					data-bs-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<img
						id="header-lang-img"
						src="/assets/images/flags/us.svg"
						alt="Header Language"
						height={20}
						className="rounded"
					/>
				</button>
				<div className="dropdown-menu dropdown-menu-end">
					<a
						className="dropdown-item notify-item language py-2"
						data-lang="en"
						title="English"
					>
						<img
							src="/assets/images/flags/us.svg"
							alt="user-image"
							className="me-2 rounded"
							height={18}
						/>
						<span className="align-middle">English</span>
					</a>

					<a
						className="dropdown-item notify-item language"
						data-lang="sp"
						title="Spanish"
					>
						<img
							src="/assets/images/flags/spain.svg"
							alt="user-image"
							className="me-2 rounded"
							height={18}
						/>
						<span className="align-middle">Española</span>
					</a>

					<a
						className="dropdown-item notify-item language"
						data-lang="gr"
						title="German"
					>
						<img
							src="/assets/images/flags/germany.svg"
							alt="user-image"
							className="me-2 rounded"
							height={18}
						/>
						<span className="align-middle">Deutsche</span>
					</a>

					<a
						className="dropdown-item notify-item language"
						data-lang="it"
						title="Italian"
					>
						<img
							src="/assets/images/flags/italy.svg"
							alt="user-image"
							className="me-2 rounded"
							height={18}
						/>
						<span className="align-middle">Italiana</span>
					</a>

					<a
						className="dropdown-item notify-item language"
						data-lang="ru"
						title="Russian"
					>
						<img
							src="/assets/images/flags/russia.svg"
							alt="user-image"
							className="me-2 rounded"
							height={18}
						/>
						<span className="align-middle">русский</span>
					</a>

					<a
						className="dropdown-item notify-item language"
						data-lang="ch"
						title="Chinese"
					>
						<img
							src="/assets/images/flags/china.svg"
							alt="user-image"
							className="me-2 rounded"
							height={18}
						/>
						<span className="align-middle">中国人</span>
					</a>

					<a
						className="dropdown-item notify-item language"
						data-lang="fr"
						title="French"
					>
						<img
							src="/assets/images/flags/french.svg"
							alt="user-image"
							className="me-2 rounded"
							height={18}
						/>
						<span className="align-middle">français</span>
					</a>

					<a
						className="dropdown-item notify-item language"
						data-lang="ar"
						title="Arabic"
					>
						<img
							src="/assets/images/flags/ae.svg"
							alt="user-image"
							className="me-2 rounded"
							height={18}
						/>
						<span className="align-middle">Arabic</span>
					</a>
				</div>
			</div>
		</>
	);
}

export default DropdownLanguage;
