import { useState } from 'react';
import styles from './AccordionItem.module.scss';

const AccordionItem = ({ title, text, id }) => {
	const [isSelected, setIsSelected] = useState(null);

	const actionAccordion = id => {
		isSelected === id ? setIsSelected(null) : setIsSelected(id);
	};

	return (
		<li className={styles.accordionItem}>
			<div
				className={styles.accordionItem__title}
				onClick={() => {
					actionAccordion(id);
					console.log(isSelected, id);
				}}
			>
				<h2>{title}</h2>
				<span>{isSelected === id ? '-' : '+'}</span>
			</div>
			<div
				className={
					isSelected === id
						? styles.accordionItem__bodyOpen
						: styles.accordionItem__body
				}
			>
				{text}
			</div>
		</li>
	);
};

//TODO: Закрытие предыдущего аккордеона, смена значка + анимация

export default AccordionItem;
