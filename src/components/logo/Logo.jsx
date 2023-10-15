import logo from '/images/logo.svg';
const Logo = () => {
	return (
		<div>
			<div className='w-full hover:cursor-pointer'>
				<img src={logo} alt='logo' />
			</div>
		</div>
	);
};

export default Logo;
