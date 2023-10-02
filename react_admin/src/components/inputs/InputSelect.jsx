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

export default InputSelect;
