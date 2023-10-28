import { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const ArrowUp = () => {
	const [scroll, setScroll] = useState(0);

	const currentScrollY = () => {
		document.addEventListener('scroll', () => {
			setScroll(window.scrollY);
		});
	};

	useEffect(() => {
		currentScrollY();
	}, [scroll]);

	return (
		<button
			className={`fixed z-[99] left-10 bottom-10 rounded-[100%] ${
				scroll > 2000 ? 'block' : 'hidden'
			}`}
			onClick={() => {
				window.scroll({ top: 0, behavior: 'smooth' });
			}}
		>
			<BsFillArrowUpCircleFill className='w-[48px] h-[48px] hover:opacity-80' />
		</button>
	);
};

export default ArrowUp;
