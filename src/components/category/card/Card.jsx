import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from './../../../utils/consts.js';
import styles from './Card.module.scss';
const Card = ({ isSale }) => {
	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<article className={styles.card}>
			<div className='p-5'>
				<Link to={PRODUCT_ROUTE + '/:id'}>
					<div className='mb-5'>
						<img
							className='w-full object-cover'
							src='/images/Image.png'
							alt='product'
						/>
					</div>
					<div className='text-[20px] mb-4'>
						<h3 className='text-black font-bold text-center mb-3'>
							Apple BYZ S852I
						</h3>
						{isSale ? (
							<p
								className={isSale ? styles.card__priceSale : styles.card__price}
							>
								<span className='mr-3 text-title-color'>300 000₽</span>
								<span className='text-[red] font-bold'>25 300₽</span>
								<span className={styles.card__priceDiscount}>-40%</span>
							</p>
						) : (
							<p className={styles.card__price}>
								<span>300 000₽</span>
							</p>
						)}
					</div>
				</Link>
				<button className={styles.card__btnCart}>В корзину</button>
				<button
					className={
						isFavorite
							? styles.card__btnFavorite
							: styles.card__btnFavoriteActive
					}
					onClick={() => {
						setIsFavorite(!isFavorite);
					}}
				>
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 19'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z' />
					</svg>
				</button>
			</div>
		</article>
	);
};

export default Card;
