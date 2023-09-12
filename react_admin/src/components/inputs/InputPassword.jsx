import { useState } from "react";
import { Controller } from "react-hook-form";

function InputPassword({
	register,
	control,
	name,
	className = "form-control password-input",
	errors,
	validates,
	placeholder = "",
}) {
	const [passwordType, setPasswordType] = useState("password");
	return (
		<>
			<div className="position-relative auth-pass-inputgroup mb-3">
				<Controller
					name={name}
					control={control}
					render={({ field }) => (
						<input
							placeholder={placeholder}
							type={passwordType}
							{...field}
							className={errors ? `${className} is-invalid` : `${className}`}
							{...register(name, validates)}
						/>
					)}
				/>
				<button
					className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
					type="button"
					id="password-addon"
				>
					<i
						className={`${
							passwordType === "password" ? "ri-eye-fill" : "ri-eye-off-line"
						} align-middle`}
						onClick={() => {
							if (passwordType === "password") {
								setPasswordType("text");
							} else {
								setPasswordType("password");
							}
						}}
					></i>
				</button>
				<span className="invalid-feedback">
					{errors && <span role="alert">{errors.message}</span>}
				</span>
			</div>
		</>
	);
}

export default InputPassword;
