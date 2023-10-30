import AddToCartBtn from './../../../ui/add-to-cart-btn/AddToCartBtn';
import AddToFavoriteBtn from './../../../ui/add-to-favorite-btn/AddToFavoriteBtn';
import Title from './../../../ui/title/Title';
import styles from './../Card.module.scss';
import ProductImage from '/images/Image.png';
const CardDetail = ({ product }) => {
	return (
		<section>
			<Title title='Страница товара' />
			<div
				className={`${styles.card} rounded-[30px] bg-white-bg shadow-shadow w-full py-4 px-8 mb-[25px]`}
			>
				<div className='flex justify-between gap-4 mb-4'>
					<div className='max-w-[400px]'>
						<img
							src={!product.images ? ProductImage : product.images}
							className='w-full object-cover bg-orange-text'
						/>
					</div>
					<div className=' max-w-[700px] flex flex-col justify-between'>
						<div className='mb-3'>
							<h3 className='text-[black] font-bold mb-3'>Описание товара</h3>
							<p className='text-[20px]'>{product.description}</p>
						</div>
						<AddToCartBtn
							isCart={
								localStorage.getItem(`isCartProduct${product.id}id`)
									? true
									: false
							}
							product={product}
						/>
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
				<div className='flex justify-between font-bold'>
					<div>
						<span>{'Название товара:'}</span>
						<span className='italic ml-2'>
							{product.title ? product.title : 'Some title product'}
						</span>
					</div>
					<span className='italic'>{`Цена: ${product.price}$`}</span>
				</div>
			</div>
		</section>
	);
};

export default CardDetail;
