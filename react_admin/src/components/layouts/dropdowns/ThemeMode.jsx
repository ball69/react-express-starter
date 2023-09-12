import { useState } from "react";
import { Helpers } from "../../../helpers";

function DropdownThemeMode() {
	const [themeMode, setThemeMode] = useState("sun");

	const handleThemeMode = () => {
		if (themeMode === "sun") {
			Helpers.setThemeMode("light");
			setThemeMode("moon");
		} else {
			Helpers.setThemeMode("dark");
			setThemeMode("sun");
		}
	};

	return (
		<>
			<div className="ms-1 header-item d-sm-flex">
				<button
					type="button"
					className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
					onClick={() => {
						handleThemeMode();
					}}
				>
					<i className={`bx bx-${themeMode} fs-22`} />
				</button>
			</div>
		</>
	);
}

export default DropdownThemeMode;
