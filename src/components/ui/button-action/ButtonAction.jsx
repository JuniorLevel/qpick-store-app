const ButtonAction = ({ action, onClick }) => {
	return (
		<button
			onClick={() => onClick()}
			className='bg-orange-text text-black p-1 rounded-[50%] w-[35px] h-[35px] flex justify-center items-center hover:opacity-70'
		>
			{action}
		</button>
	);
};

export default ButtonAction;
