import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import AccordionItem from './accordion-item/AccordionItem';

const Accordion = ({ accordionData }) => {
	const [isItemId, setIsItemId] = useState(null);
	const nodeRef = useRef(null);
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(!show);
	}, []);

	return (
		<section>
			<CSSTransition
				nodeRef={nodeRef}
				in={show}
				timeout={3000}
				classNames='main-animation-scale'
				unmountOnExit
			>
				<div ref={nodeRef}>
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
				</div>
			</CSSTransition>
		</section>
	);
};

export default Accordion;
