import { FC } from 'react';
import 'swiper/css';
import { IBannerData } from '../../../interfaces/interfaces';

const BannerSlide: FC<IBannerData> = ({ img, alt }): JSX.Element => {
	return (
		<>
			<img src={img} alt={alt} />
		</>
	);
};

export default BannerSlide;