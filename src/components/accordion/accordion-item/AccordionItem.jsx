import { useRef } from 'react';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import styles from './AccordionItem.module.scss';

const AccordionItem = ({ title, text, isOpen, onClick }) => {
	const accordionItemRef = useRef(null);

	return (
		<li className='text-[20px] bg-block-color-bg shadow-shadow mb-2 p-4 last:mb-0 hover:border-[1px]'>
			<div
				className='text-[32px] text-black font-semibold flex justify-between items-center hover:cursor-pointer text-main-text'
				onClick={() => {
					onClick();
				}}
			>
				<h2 className='sm-max:text-sm md:base'>{title}</h2>
				{isOpen ? (
					<FaLockOpen className='sm-max:w-[20px] sm-max:h-[20px] w-[25px] h-[25px]' />
				) : (
					<FaLock className='sm-max:w-[20px] sm-max:h-[20px] w-[25px] h-[25px]' />
				)}
			</div>
			<div
				className={`pl-3 font-normal text-black overflow-hidden text-main-text ${styles.accordionItem__body}`}
				ref={accordionItemRef}
				style={
					isOpen
						? { height: accordionItemRef.current.scrollHeight }
						: { height: '0px' }
				}
			>
				<div className='sm-max:text-[15px] md:text-[20px] mt-2'>{text}</div>
			</div>
		</li>
	);
};

export default AccordionItem;
