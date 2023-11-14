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
			<label className='sm:text-[14px] w-full text-[18px] font-[600]'>
				{inputLabel}
			</label>
			<input
				className={`sm:text-[12px] h-[45px] bg-input-bg w-full py-1 px-2  placeholder:text-title-color font-medium rounded-[15px] text-[18px] ${classNames} ${
					errors[label] ? 'border-2 border-[red]' : 'border-transparent'
				}`}
				placeholder={placeholder}
				{...register(label, required)}
			/>
			{errors[label] && errors[label].type === 'required' && (
				<div className='sm:text-[12px] text-[red] text-[16px]'>
					{errors[label].message}
				</div>
			)}
			{errors[label] && errors[label].type === 'pattern' && (
				<div className='sm:text-[12px] text-[red] text-[16px]'>
					{errors[label].message}
				</div>
			)}
		</>
	);
};

export default Input;
