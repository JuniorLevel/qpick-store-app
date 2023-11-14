import React from 'react';
import { Link } from 'react-router-dom';
const Button = ({ text, path }) => {
	return (
		<Link to={path}>
			<button className='md-max:text-[15px] w-full h-[65px] rounded-[20px] bg-black shadow-shadow mt-7 text-[white] hover:opacity-70 text-[20px]'>
				{text}
			</button>
		</Link>
	);
};

export default Button;
