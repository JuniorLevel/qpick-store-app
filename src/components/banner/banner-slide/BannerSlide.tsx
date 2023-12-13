import { IBannerData } from 'interfaces/interfaces.ts';
import { FC } from 'react';
import 'swiper/css';

const BannerSlide: FC<IBannerData> = ({ img, alt }): JSX.Element => {
	return <img src={img} alt={alt} />;
};

export default BannerSlide;
