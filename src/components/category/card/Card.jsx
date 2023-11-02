import { FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AddToCartBtn from '../../ui/add-to-cart-btn/AddToCartBtn.jsx';
import AddToFavoriteBtn from '../../ui/add-to-favorite-btn/AddToFavoriteBtn.jsx';
import { PRODUCT_ROUTE } from './../../../utils/consts.js';
import styles from './Card.module.scss';
import ProductImage from '/images/Image.png';
const Card = ({ isSale, product }) => {
	return (
		<article
			className={`${styles.card} max-w-[320px] rounded-[30px] bg-white-bg shadow-shadow`}
		>
			<div className='p-5'>
				<Link to={PRODUCT_ROUTE + `/${product.id}`}>
					<div className='mb-5 h-[257px]'>
						<img
							className='w-full h-full object-cover'
							src={!product.images ? ProductImage : product.images}
							alt={`product${product.id}`}
						/>
					</div>
					<div className='text-[20px] mb-4'>
						<h3 className='text-black font-bold text-center mb-3 min-h-[60px]'>
							{product.title ? product.title : 'Some title product'}
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
				<AddToCartBtn
					isCart={
						localStorage.getItem(`isCartProduct${product.id}id`) ? true : false
					}
					product={product}
				/>
				<AddToFavoriteBtn product={product} />
			</div>
		</article>
	);
};

export default Card;
