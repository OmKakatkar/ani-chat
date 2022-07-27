function Input({
	type,
	label,
	name,
	autoComplete,
	value,
	handleChange,
	classNames,
	required,
}) {
	return (
		<div className="input-container">
			<label htmlFor={name}> {label}</label>
			<input
				type={type}
				name={name}
				className={`input text-md ${classNames}`}
				value={value}
				onChange={handleChange}
				required={required}
				autoComplete={autoComplete}
			/>
		</div>
	);
}

export default Input;
