import { FC } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { subTotalPrice } from '../../../features/prices/prices.slice';
import { removeFromCart } from '../../../features/products/products.slice';
import { IProduct } from '../../../interfaces/interfaces';
import { useAppDispatch } from './../../../hooks/useStore';
import styles from './ButtonDelete.module.scss';

interface ButtonDeleteProps {
	product: IProduct;
	count: number;
}

const ButtonDelete: FC<ButtonDeleteProps> = ({
	product,
	count,
}): JSX.Element => {
	const dispatch = useAppDispatch();
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
