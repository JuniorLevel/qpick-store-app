import { AiOutlineHeart } from 'react-icons/ai';
import { FiStar } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	addToCart,
	addToFavorite,
	removeFromCart,
	removeFromFavorite,
} from '../../../features/products/products.slice.js';
import { PRODUCT_ROUTE } from './../../../utils/consts.js';
import styles from './Card.module.scss';
import ProductImage from '/images/Image.png';
const Card = ({ isSale, product, isFavorite, isCart }) => {
	const dispatch = useDispatch();

	return (
		<article className={styles.card}>
			<div className='p-5'>
				<Link to={PRODUCT_ROUTE + '/:id'}>
					<div className='mb-5 h-[257px]'>
						<img
							className='w-full object-cover'
							src={
								product.images.length === 1 ? ProductImage : product.images[0]
							}
							alt='product'
						/>
					</div>
					<div className='text-[20px] mb-4'>
						<h3 className='text-black font-bold text-center mb-3 min-h-[60px]'>
							{product.title}
						</h3>
						{isSale ? (
							<p
								className={isSale ? styles.card__priceSale : styles.card__price}
							>
								<span className='mr-3 text-title-color'>300 000₽</span>
								<span className='text-[red] font-bold'>25 300₽</span>
								<span className='@apply absolute top-[-10px] right-[5px] text-[red]'>
									-40%
								</span>
							</p>
						) : (
							<div className={styles.card__price}>
								<div className='flex gap-1 items-center'>
									<span>4.5</span> <FiStar color='rgb(255, 196, 0)' />
								</div>
								<span>{product.price}$</span>
							</div>
						)}
					</div>
				</Link>
				<button
					className={
						isCart ? styles.card__btnCartClicked : styles.card__btnCart
					}
					onClick={() => {
						if (isCart) {
							dispatch(removeFromCart(product));
						} else {
							dispatch(addToCart(product));
							dispatch(removeFromFavorite(product));
						}
					}}
				>
					{isCart ? 'Убрать с корзины' : 'В корзину'}
				</button>
				<button
					className={
						isFavorite
							? styles.card__btnFavoriteActive
							: styles.card__btnFavorite
					}
					onClick={() => {
						if (isFavorite) {
							dispatch(removeFromFavorite(product));
						} else {
							dispatch(addToFavorite(product));
							dispatch(removeFromCart(product));
						}
					}}
				>
					<AiOutlineHeart />
				</button>
			</div>
		</article>
	);
};

export default Card;
