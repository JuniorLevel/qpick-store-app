import { useSelector } from 'react-redux';
import AddToCartBtn from './../../../ui/add-to-cart-btn/AddToCartBtn';
import AddToFavoriteBtn from './../../../ui/add-to-favorite-btn/AddToFavoriteBtn';
import Title from './../../../ui/title/Title';
import styles from './../Card.module.scss';
import ProductImage from '/images/Image.png';
const CardDetail = () => {
	const product = useSelector(state => state.products.productById);
	return (
		<section>
			<Title title='Страница товара' />
			<div
				className={`${styles.card} relative rounded-[30px] bg-white-bg shadow-shadow w-full py-4 px-8 mb-[25px]`}
			>
				<div className='sm:block flex gap-4 mb-4'>
					<div className='sm:max-w-full sm:mb-5 md:h-[310px] w-full h-full'>
						<img
							src={!product.images ? ProductImage : product.images}
							className='sm:max-h-[500px] w-full h-full object-cover'
						/>
					</div>
					<div className=' max-w-[700px] w-full flex flex-col justify-between'>
						<div className='mb-3'>
							<h3 className='text-[black] font-bold mb-3'>Описание товара</h3>
							<p className='text-[20px] italic'>{product.description}</p>
						</div>
						<AddToCartBtn
							isCart={
								localStorage.getItem(`isCartProduct${product.id}id`)
									? true
									: false
							}
							product={product}
						/>
						<div className='sm:top-0 sm:right-4 absolute top-[-25px] right-[-20px]'>
							<AddToFavoriteBtn
								isFavorite={
									localStorage.getItem(`isFavoriteProduct${product.id}id`)
										? true
										: false
								}
								product={product}
							/>
						</div>
					</div>
				</div>
				<div className='sm:flex-col sm:gap-4 flex justify-between font-bold'>
					<div>
						<p className='sm:mb-4'>Название товара:</p>
						<p className='sm:text-[20px] italic'>
							{product.title ? product.title : 'Some title product'}
						</p>
					</div>
					<span className='italic'>{`Цена: ${product.price}$`}</span>
				</div>
			</div>
		</section>
	);
};

export default CardDetail;
