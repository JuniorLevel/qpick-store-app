import { useDispatch } from 'react-redux';
import {
	addTotalPrice,
	subTotalPrice,
} from '../../../features/prices/prices.slice.js';
import {
	addToCart,
	removeFromCart,
	removeFromFavorite,
} from '../../../features/products/products.slice.js';
import styles from './../../assortment/card/Card.module.scss';

const AddToCartBtn = ({ isCart, product }) => {
	const dispatch = useDispatch();
	return (
		<button
			className={isCart ? styles.card__btnCartClicked : styles.card__btnCart}
			onClick={() => {
				if (isCart) {
					dispatch(removeFromCart(product));
					dispatch(subTotalPrice(product.price));
					localStorage.removeItem(`count${product.id}`);
					localStorage.removeItem(`isCartProduct${product.id}id`);
				} else {
					dispatch(addToCart(product));
					dispatch(removeFromFavorite(product));
					dispatch(addTotalPrice(product.price));
					localStorage.setItem(`count${product.id}`, 1);
					localStorage.setItem(`isCartProduct${product.id}id`, true);
					localStorage.removeItem(`isFavoriteProduct${product.id}id`);
				}
			}}
		>
			{isCart ? 'Убрать с корзины' : 'В корзину'}
		</button>
	);
};

export default AddToCartBtn;
