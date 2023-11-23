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
			<label
				htmlFor={label}
				className='sm-max:text-[14px] w-full text-[18px] font-[600]'
			>
				{inputLabel}
			</label>
			<input
				id={label}
				className={`sm-max:text-[12px] h-[45px] w-full py-1 px-2 placeholder:text-main-text focus:placeholder:text-[0px] font-medium rounded-[15px] text-[16px] ${classNames} bg-block-color-bg border-[1px] ${
					errors[label] ? 'border-2 border-[red]' : 'border-transparent'
				}`}
				placeholder={placeholder}
				{...register(label, required)}
			/>
			{errors[label] && errors[label].type === 'required' && (
				<div className='sm-max:text-[12px] text-[red] text-[16px]'>
					{errors[label].message}
				</div>
			)}
			{errors[label] && errors[label].type === 'pattern' && (
				<div className='sm-max:text-[12px] text-[red] text-[16px]'>
					{errors[label].message}
				</div>
			)}
		</>
	);
};

export default Input;
