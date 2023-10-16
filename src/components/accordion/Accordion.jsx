import AccordionItem from './accordion-item/AccordionItem';
const Accordion = ({ accordionData }) => {
	return (
		<section>
			<ul>
				{accordionData.map(data => (
					<AccordionItem
						key={data.id}
						title={data.title}
						text={data.text}
						id={data.id}
					/>
				))}
			</ul>
		</section>
	);
};

export default Accordion;
