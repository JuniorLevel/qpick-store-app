import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { addTotalPrice } from '../../../features/prices/prices.slice.js';
import { addToCart } from '../../../features/products/products.slice.js';
import { IProduct } from '../../../interfaces/interfaces.js';
import { CART_ROUTE } from '../../../utils/consts.js';
import { useAppDispatch } from './../../../hooks/useStore';
import styles from './../../assortment/card/Card.module.scss';

interface IAddToCartBtnProps {
	product: IProduct;
}

const AddToCartBtn: FC<IAddToCartBtnProps> = ({ product }): JSX.Element => {
	const dispatch = useAppDispatch();
	const [isCart, setIsCart] = useState<boolean>(
		Boolean(localStorage.getItem(`isCartProduct${product.id}id`))
	);

	return (
		<button
			className={isCart ? styles.card__btnCartClicked : styles.card__btnCart}
			onClick={() => {
				if (!isCart) {
					dispatch(addToCart(product));
					dispatch(addTotalPrice(product.price));
					localStorage.setItem(`count${product.id}`, String(1));
					localStorage.setItem(`isCartProduct${product.id}id`, String(true));
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
