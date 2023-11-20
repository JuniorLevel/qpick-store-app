import { useSelector } from 'react-redux';
import AddToCartBtn from './../../../ui/add-to-cart-btn/AddToCartBtn';
import AddToFavoriteBtn from './../../../ui/add-to-favorite-btn/AddToFavoriteBtn';
import Title from './../../../ui/title/Title';
import styles from './../Card.module.scss';
import ImageNotFound from '/public/images/image-not-found.jpg';
const CardDetail = () => {
	const product = useSelector(state => state.products.productById);
	const img = new Image();
	img.src = product.images[0];

	return (
		<section>
			<Title title='Страница товара' />
			<div
				className={`${styles.card} relative rounded-[30px] shadow-shadow w-full py-4 px-8 mb-[25px] border-[1px] bg-block-color-bg`}
			>
				<div className='sm-max:block flex gap-4 mb-4'>
					<div className='sm:max-w-full sm-max:mb-5 md:h-[310px] w-full h-full'>
						<img
							src={!img.complete ? ImageNotFound : product.images[0]}
							className='sm:max-h-[500px] w-full h-full object-cover'
						/>
					</div>
					<div className=' max-w-[700px] w-full flex flex-col justify-between'>
						<div className='mb-3'>
							<h3 className='text-[black] font-bold mb-3 text-aqua-color-text'>
								Описание товара
							</h3>
							<p className='text-[20px] italic'>{product.description}</p>
						</div>
						<AddToCartBtn product={product} />
						<div className='sm-max:top-0 sm-max:right-4 absolute top-[-25px] right-[-20px]'>
							<AddToFavoriteBtn product={product} />
						</div>
					</div>
				</div>
				<div className='sm-max:flex-col sm-max:gap-4 flex justify-between font-bold'>
					<div>
						<p className='sm-max:mb-4 text-aqua-color-text'>Название товара:</p>
						<p className='sm-max:text-[20px] italic'>
							{product.title ? product.title : 'Some title product'}
						</p>
					</div>
					<span className='italic text-aqua-color-text'>
						Цена: <span className='text-main-text'>{`${product.price}$`}</span>
					</span>
				</div>
			</div>
		</section>
	);
};

export default CardDetail;
