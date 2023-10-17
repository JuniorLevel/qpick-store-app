import { useRef } from 'react';
import styles from './AccordionItem.module.scss';

const AccordionItem = ({ title, text, isOpen, onClick }) => {
	const accordionItemRef = useRef(null);

	return (
		<li className={styles.accordionItem}>
			<div
				className={styles.accordionItem__title}
				onClick={() => {
					onClick();
				}}
			>
				<h2>{title}</h2>
				<img
					width={25}
					height={25}
					src={isOpen ? '/public/images/unlock.png' : '/public/images/lock.png'}
					alt={isOpen ? 'unlock.png' : 'lock.png'}
				/>
			</div>
			<div
				className={styles.accordionItem__body}
				ref={accordionItemRef}
				style={
					isOpen
						? { height: accordionItemRef.current.scrollHeight }
						: { height: '0px' }
				}
			>
				<div>{text}</div>
			</div>
		</li>
	);
};

export default AccordionItem;
