import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const Success = () => {
	const navigate = useNavigate();
	const nodeRef = useRef(null);
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(!show);
		setTimeout(() => {
			navigate('/');
		}, 3000);
	}, []);

	return (
		<CSSTransition
			nodeRef={nodeRef}
			in={show}
			timeout={3000}
			classNames='main-animation-scale'
			unmountOnExit
		>
			<div
				ref={nodeRef}
				className='sm-max:text-[16px] w-full rounded-[30px] bg-[white] shadow-shadow p-[40px] text-center font-bold bg-block-color-bg border-[1px]'
			>
				Номер вашего заказа №123123, с Вами свяжется наш менеджер.
			</div>
		</CSSTransition>
	);
};

export default Success;
