import { useState } from 'react';
import AccordionItem from './accordion-item/AccordionItem';

const Accordion = ({ accordionData }) => {
	const [isItemId, setIsItemId] = useState(null);

	return (
		<section>
			<h1>Условия сервиса</h1>
			<ul className='mt-[50px]'>
				{accordionData.map(data => (
					<AccordionItem
						key={data.id}
						title={data.title}
						text={data.text}
						isOpen={isItemId === data.id}
						onClick={() =>
							data.id === isItemId ? setIsItemId(null) : setIsItemId(data.id)
						}
					/>
				))}
			</ul>
		</section>
	);
};

export default Accordion;
