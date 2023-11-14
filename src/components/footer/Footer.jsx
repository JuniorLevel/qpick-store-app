import { Link } from 'react-router-dom';
import Social from '../ui/social/Social';
import Logo from './../../components/logo/Logo';
import { HOME_ROUTE } from './../../utils/consts.js';
import styles from './Footer.module.scss';
import { data, data2 } from './data.js';
import FooterBlock from './footer-block/FooterBlock.jsx';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='mt-[60px] bg-white-bg p-7 rounded-t-[30px] shadow-shadow'>
				<div className='sm:grid-cols-1 md:flex md:space-between md:gap-9 md-max:text-[20px] md:flex-wrap grid grid-cols-3'>
					<div className='sm:mb-5'>
						<Link to={HOME_ROUTE}>
							<Logo />
						</Link>
						<Social />
					</div>
					<FooterBlock data={data} />
					<FooterBlock data={data2} />
				</div>
				<div className='mt-5 text-[14px]'>
					<p>
						2004-2023 © Qpick — модный интернет-магазин одежды, обуви и
						аксессуаров. Все права защищены. Доставка по всей России.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
