import { FC } from 'react';
import { IFooterData } from '../../../interfaces/interfaces';
import FooterItem from '../footer-item/FooterItem';

interface IFooterBlockProps {
	data: IFooterData[];
}

const FooterBlock: FC<IFooterBlockProps> = ({ data }): JSX.Element => {
	return (
		<div className='mb-5 last:mb-0'>
			<ul>
				{data.map((item, idx) => (
					<FooterItem key={idx} item={item} />
				))}
			</ul>
		</div>
	);
};

export default FooterBlock;
