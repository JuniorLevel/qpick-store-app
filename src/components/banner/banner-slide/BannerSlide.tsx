import { FC } from 'react';
import 'swiper/css';

interface IBannerDataProps {
  img: string;
  alt: string;
}

const BannerSlide: FC<IBannerDataProps> = ({ img, alt }): JSX.Element => {
  return <img src={img} alt={alt} />;
};

export default BannerSlide;
