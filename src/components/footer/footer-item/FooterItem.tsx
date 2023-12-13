import { IFooterData } from 'interfaces/interfaces.ts';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Footer.module.scss';

interface IFooterItemProps {
	item: IFooterData;
}

const FooterItem: FC<IFooterItemProps> = ({ item }): JSX.Element => {
	return (
		<li className={styles.footer__item}>
			<Link to={item.link}>{item.text}</Link>
		</li>
	);
};

export default FooterItem;
