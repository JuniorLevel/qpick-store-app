import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerSlide from './banner-slide/BannerSlide';
import { bannersData } from './banners.data';

SwiperCore.use([EffectFade]);

const Banner = () => {
	return (
		<Swiper
			effect='fade'
			className='bg-black shadow-shadow rounded-[30px] min-h-[200px]'
			modules={[Autoplay, Pagination, Navigation]}
			pagination={{ clickable: true }}
			navigation={true}
			autoplay={{ delay: 1500 }}
			loop={true}
			spaceBetween={50}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={swiper => console.log(swiper)}
		>
			{bannersData.map(({ path, img, alt }) => (
				<SwiperSlide key={alt}>
					<BannerSlide path={path} img={img} alt={alt} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Banner;
