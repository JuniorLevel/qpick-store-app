import { useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import {
	addToFavorite,
	removeFromCart,
	removeFromFavorite,
} from '../../../features/products/products.slice.js';
import styles from './../../category/card/Card.module.scss';
const AddToFavoriteBtn = ({ product }) => {
	const dispatch = useDispatch();
	const [isFavorite, setIsFavorite] = useState(
		localStorage.getItem(`isFavoriteProduct${product.id}id`)
	);
	useEffect(() => {
		setIsFavorite(localStorage.getItem(`isFavoriteProduct${product.id}id`));
	}, [localStorage.getItem(`isFavoriteProduct${product.id}id`)]);
	return (
		<button
			className={
				isFavorite ? styles.card__btnFavoriteActive : styles.card__btnFavorite
			}
			onClick={() => {
				if (isFavorite) {
					dispatch(removeFromFavorite(product));
					localStorage.removeItem(`isFavoriteProduct${product.id}id`);
					setIsFavorite(
						localStorage.getItem(`isFavoriteProduct${product.id}id`)
					);
				} else {
					dispatch(addToFavorite(product));
					dispatch(removeFromCart(product));
					localStorage.removeItem(`isCartProduct${product.id}id`);
					localStorage.setItem(`isFavoriteProduct${product.id}id`, true);
					setIsFavorite(
						localStorage.getItem(`isFavoriteProduct${product.id}id`)
					);
				}
			}}
		>
			<AiOutlineHeart color='orange' />
		</button>
	);
};

export default AddToFavoriteBtn;
