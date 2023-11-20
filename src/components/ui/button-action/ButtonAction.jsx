const ButtonAction = ({ action, onClick }) => {
	return (
		<button
			onClick={() => onClick()}
			className='bg-button-color-bg text-black p-1 rounded-[50%] w-[35px] h-[35px] flex justify-center items-center hover:bg-main-text hover:text-button-color-bg'
		>
			{action}
		</button>
	);
};

export default ButtonAction;
