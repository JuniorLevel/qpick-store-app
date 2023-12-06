import { FC, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Card from '../components/assortment/card/Card';
import Layout from '../components/layout/Layout';
import EmptyItem from '../components/ui/empty-item/EmptyItem';
import Title from '../components/ui/title/Title';
import { useAppSelector } from './../hooks/useStore';

const Favorites: FC = (): JSX.Element => {
	const favoritesList = useAppSelector(state => state.products.favoritesList);

	const nodeRef = useRef<HTMLDivElement | null>(null);
	const [show, setShow] = useState<boolean>(false);

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
