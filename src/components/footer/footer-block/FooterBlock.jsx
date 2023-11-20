import FooterItem from '../footer-item/FooterItem';

const FooterBlock = ({ data }) => {
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
