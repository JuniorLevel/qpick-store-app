import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { subTotalPrice } from '../../../features/prices/prices.slice';
import { removeFromCart } from '../../../features/products/products.slice';
import styles from './ButtonDelete.module.scss';

const ButtonDelete = ({ product, count }) => {
	const dispatch = useDispatch();

	return (
		<div
			className={styles.btnDelete}
			onClick={() => {
				dispatch(removeFromCart(product));
				dispatch(subTotalPrice(product.price * count));
				localStorage.removeItem(`count${product.id}`);
				localStorage.removeItem(`isCartProduct${product.id}id`);
			}}
		>
			<RiDeleteBin6Line />
		</div>
	);
};

export default ButtonDelete;
