const SocialItem = ({ children }) => {
	return (
		<ul className='w-[97px] h-[97px] rounded-[30px] bg-white-bg flex justify-center items-center mb-3'>
			<li>{children}</li>
		</ul>
	);
};

export default SocialItem;
