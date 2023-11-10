const Input = ({
	placeholder,
	classNames,
	register,
	label,
	required,
	errors,
	inputLabel,
}) => {
	return (
		<>
			<div className='w-full text-[18px] font-[600]'>{inputLabel}</div>
			<input
				className={`h-[45px] bg-input-bg w-full py-1 px-2  placeholder:text-title-color font-medium rounded-[15px] text-[18px] ${classNames} ${
					errors[label] ? 'border-2 border-[red]' : 'border-transparent'
				}`}
				placeholder={placeholder}
				{...register(label, required)}
			/>
			{errors[label] && errors[label].type === 'required' && (
				<div className='text-[red] text-[16px]'>{errors[label].message}</div>
			)}
			{errors[label] && errors[label].type === 'pattern' && (
				<div className='text-[red] text-[16px]'>{errors[label].message}</div>
			)}
		</>
	);
};

export default Input;
