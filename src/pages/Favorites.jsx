import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Layout from '../components/layout/Layout';
import EmptyItem from '../components/ui/empty-item/EmptyItem';
import Card from './../components/assortment/card/Card';
import Title from './../components/ui/title/Title';
const Favorites = () => {
	const favoritesList = useSelector(state => state.products.favoritesList);

	const nodeRef = useRef(null);
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(!show);
	}, []);

	return (
		<Layout>
			<section>
				<Title title='Избранное' />
				<CSSTransition
					nodeRef={nodeRef}
					in={show}
					timeout={3000}
					classNames='main-animation-scale'
					unmountOnExit
				>
					{favoritesList.length ? (
						<div
							ref={nodeRef}
							className='sm-max:grid-cols-1 md:grid-cols-2 grid gap-5 grid-cols-3'
						>
							{favoritesList.map(product => (
								<Card key={product.id} product={product} />
							))}
						</div>
					) : (
						<EmptyItem title='Избранные товары отсутствуют' />
					)}
				</CSSTransition>
			</section>
		</Layout>
	);
};

export default Favorites;
