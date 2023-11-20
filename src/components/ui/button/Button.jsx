import React from 'react';
import { Link } from 'react-router-dom';
const Button = ({ text, path }) => {
	return (
		<Link to={path}>
			<button className='md-max:text-[15px] w-full h-[65px] rounded-[20px] bg-button-color-bg shadow-shadow mt-7 text-main-text text-[20px] hover:bg-main-text hover:text-button-color-bg transition ease delay-50'>
				{text}
			</button>
		</Link>
	);
};

export default Button;
