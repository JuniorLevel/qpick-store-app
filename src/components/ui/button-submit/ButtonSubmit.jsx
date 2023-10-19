import React from 'react';

const ButtonSubmit = ({ text }) => {
	return (
		<button className='bg-[black] text-[white] shadow-shadow mt-5 p-3 text-[15px] font-medium rounded-[15px] w-full hover:opacity-90'>
			{text}
		</button>
	);
};

export default ButtonSubmit;
