import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTotalPrice } from '../../../features/prices/prices.slice.js';
import { addToCart } from '../../../features/products/products.slice.js';
import { CART_ROUTE } from './../../../utils/consts';
import styles from './../../assortment/card/Card.module.scss';

const AddToCartBtn = ({ product }) => {
	const dispatch = useDispatch();
	const [isCart, setIsCart] = useState(
		Boolean(localStorage.getItem(`isCartProduct${product.id}id`))
	);

	return (
		<button
			className={isCart ? styles.card__btnCartClicked : styles.card__btnCart}
			onClick={() => {
				if (!isCart) {
					dispatch(addToCart(product));
					dispatch(addTotalPrice(product.price));
					localStorage.setItem(`count${product.id}`, 1);
					localStorage.setItem(`isCartProduct${product.id}id`, true);
					setIsCart(
						Boolean(localStorage.getItem(`isCartProduct${product.id}id`))
					);
				}
			}}
		>
			{isCart ? <Link to={CART_ROUTE}>Перейти в корзину</Link> : 'В корзину'}
		</button>
	);
};

export default AddToCartBtn;
