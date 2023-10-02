import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
// import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Button({
	type,
	loading = false,
	value,
	icon,
	color,
	size = "lg",
	onClickCallback,
}) {
	return (
		<>
			<button
				size={size}
				disabled={loading ? true : false}
				type={type}
				className={`btn btn-${size} ${
					loading ? `btn-outline-${color}` : ``
				} btn-${color} btn-load`}
				onClick={onClickCallback}
			>
				{!loading ? (
					<>
						<i className={icon} style={{ marginRight: "10px" }}></i>
						{value}
					</>
				) : (
					<>
						<span className="d-flex align-items-center">
							<span className="spinner-grow flex-shrink-0 me-2" role="status">
								<span className="visually-hidden">Loading...</span>
							</span>
							<span className="flex-grow-1 ">Loading...</span>
						</span>
					</>
				)}
			</button>
		</>
	);
}

function InputCurrency({
	register,
	name,
	type = "text",
	className = "form-control currency",
	errors,
	validates,
}) {
	return (
		<>
			<CurrencyInput
				name={name}
				type={type}
				className={errors ? `${className} is-invalid` : `${className}`}
				{...register(name, validates)}
			/>
			<span className="invalid-feedback">
				{errors && <span role="alert">{errors.message}</span>}
			</span>
		</>
	);
}

function InputText({
	register,
	name,
	className = "form-control",
	errors,
	validates,
	placeholder = "",
	type = "text",
}) {
	return (
		<>
			<input
				placeholder={placeholder}
				type={type}
				className={errors ? `${className} is-invalid` : `${className}`}
				{...register(name, validates)}
			/>
			<span className="invalid-feedback">
				{errors && <span role="alert">{errors.message}</span>}
			</span>
		</>
	);
}

function InputPassword({
	register,
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
				<input
					placeholder={placeholder}
					type={passwordType}
					className={errors ? `${className} is-invalid` : `${className}`}
					{...register(name, validates)}
				/>
				<button
					className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
					type="button"
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

function InputSelect({
	register,
	errors,
	className,
	validates,
	options,
	keyOption,
	valueOption,
	name,
}) {
	return (
		<select
			className={errors ? `${className} is-invalid` : `${className}`}
			{...register(name, validates)}
		>
			<option value="">เลือก</option>
			{options.map((option, key) => {
				return (
					<option value={option[keyOption]} key={key}>
						{option[valueOption]}
					</option>
				);
			})}
		</select>
	);
}
function InputFile({
	register,
	// control,
	name,
	className = "form-control",
	errors,
	validates,
	// placeholder = "",
	onChangeCallback,
}) {
	console.log();
	return (
		<>
			<input
				name={name}
				type={`file`}
				className={errors ? `${className} is-invalid` : `${className}`}
				{...register(name, validates)}
				onChange={onChangeCallback}
			/>
			<span className="invalid-feedback">
				{errors && <span role="alert">{errors.message}</span>}
			</span>
		</>
	);
}

function InputDateTime({ date, setDate, showTime = false }) {
	return (
		<>
			<DatePicker
				selected={date}
				onChange={(date) => setDate(date)}
				className="form-control"
				dateFormat={showTime ? "dd/MM/yyyy HH:mm:ss" : "dd/MM/yyyy"}
				showTimeInput={showTime}
			></DatePicker>
		</>
	);
}

export {
	Button,
	InputText,
	InputCurrency,
	InputFile,
	InputPassword,
	InputSelect,
	InputDateTime,
};
