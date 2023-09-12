import CurrencyInput from "react-currency-input-field";

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

export default InputCurrency;
