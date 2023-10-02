// import React from "react";
import { Controller } from "react-hook-form";

function InputText({
	register,
	control,
	name,
	className = "form-control",
	errors,
	validates,
	placeholder = "",
}) {
	return (
		<>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<input
						placeholder={placeholder}
						type={`file`}
						{...field}
						className={errors ? `${className} is-invalid` : `${className}`}
						{...register(name, validates)}
					/>
				)}
			/>
			<span className="invalid-feedback">
				{errors && <span role="alert">{errors.message}</span>}
			</span>
		</>
	);
}

export default InputText;
