import { Link } from 'react-router-dom';
import 'swiper/css';

const BannerSlide = ({ path, img, alt }) => {
	return (
		<Link to={path}>
			<img src={img} alt={alt} />
		</Link>
	);
};

export default BannerSlide;
