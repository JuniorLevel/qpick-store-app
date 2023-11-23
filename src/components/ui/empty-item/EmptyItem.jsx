import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HOME_ROUTE } from '../../../utils/consts';
import Button from '../button/Button';
const EmptyItem = ({ title }) => {
	const [show, setShow] = useState(false);
	const nodeRef = useRef(null);
	useEffect(() => {
		setShow(!show);
	}, []);
	return (
		<CSSTransition
			nodeRef={nodeRef}
			in={show}
			timeout={3000}
			classNames='main-animation-scale'
			unmountOnExit
		>
			<div ref={nodeRef} className='mx-auto max-w-[400px]'>
				<div className='flex justify-center'>
					<img
						className='w-full h-full object-cover'
						src='/images/empty-cart.png'
						alt='empty-cart'
					/>
				</div>
				<div className='text-center mt-7'>
					<p className='mb-4 text-[30px] font-medium'>{title}</p>
					<p className='text-title-color text-[20px] font-medium'>
						Но это никогда не поздно исправить! :)
					</p>
					<Button text='В каталог товаров' path={HOME_ROUTE} />
				</div>
			</div>
		</CSSTransition>
	);
};

export default EmptyItem;
