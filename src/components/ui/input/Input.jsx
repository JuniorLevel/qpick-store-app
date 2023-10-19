import React from 'react';

const Input = ({ type, placeholder, classNames }) => {
	return (
		<input
			className={`bg-input-bg w-full py-1 px-2  placeholder:text-title-color font-medium rounded-[15px] ${classNames}`}
			type={type}
			placeholder={placeholder}
		/>
	);
};

export default Input;
