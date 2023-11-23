import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Card from './../card/Card';
const CardList = ({ products }) => {
	const isLoading = useSelector(state => state.products.isLoading);
	const nodeRef = useRef(null);
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(!show);
	}, [isLoading]);

	return (
		<>
			<CSSTransition
				nodeRef={nodeRef}
				in={show}
				timeout={3000}
				classNames='main-animation-opacity'
				unmountOnExit
			>
				<div
					ref={nodeRef}
					className='sm-max:grid-cols-1 md:grid-cols-2 md-max:gap-5 lg:grid-cols-3 lg:gap-2 grid grid-cols-3 gap-5'
				>
					{products.map(product => (
						<Card key={product.id} product={product} />
					))}
				</div>
			</CSSTransition>
		</>
	);
};

export default CardList;
