import styles from '../Footer.module.scss';
import FooterItem from '../footer-item/FooterItem';

const FooterBlock = ({ data }) => {
	return (
		<div className={styles.footer__block}>
			<ul className={styles.footer__list}>
				{data.map((item, idx) => (
					<FooterItem key={idx} item={item} />
				))}
			</ul>
		</div>
	);
};

export default FooterBlock;
