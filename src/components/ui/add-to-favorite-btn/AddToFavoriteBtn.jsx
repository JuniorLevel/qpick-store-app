import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import {
	addToFavorite,
	removeFromFavorite,
} from '../../../features/products/products.slice.js';
import styles from './../../assortment/card/Card.module.scss';

const AddToFavoriteBtn = ({ product }) => {
	const dispatch = useDispatch();
	const [isFavorite, setIsFavorite] = useState(
		Boolean(localStorage.getItem(`isFavoriteProduct${product.id}id`))
	);

	return (
		<button
			className={
				isFavorite ? styles.card__btnFavoriteActive : styles.card__btnFavorite
			}
			onClick={() => {
				if (
					!isFavorite &&
					!Boolean(localStorage.getItem(`isFavoriteProduct${product.id}id`))
				) {
					dispatch(addToFavorite(product));
					localStorage.setItem(`isFavoriteProduct${product.id}id`, true);
					setIsFavorite(
						Boolean(localStorage.getItem(`isFavoriteProduct${product.id}id`))
					);
				}

				if (window.location.pathname === '/favorites') {
					dispatch(removeFromFavorite(product));
					localStorage.removeItem(`isFavoriteProduct${product.id}id`);
				}
			}}
		>
			{window.location.pathname === '/favorites' ? (
				<IoMdClose color='orange' />
			) : (
				<AiOutlineHeart color='orange' />
			)}
		</button>
	);
};

export default AddToFavoriteBtn;
