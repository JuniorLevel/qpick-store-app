import React, { FC, useRef } from 'react';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import styles from './AccordionItem.module.scss';

interface IAccordionItemProps {
  title: string;
  text: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: FC<IAccordionItemProps> = ({
  title,
  text,
  isOpen,
  onClick,
}): JSX.Element => {
  const accordionItemRef = useRef<HTMLDivElement>(null);
  const clickHandler: React.MouseEventHandler = (): void => {
    onClick();
  };

  return (
    <div className="text-[20px] bg-block-color-bg shadow-shadow mb-2 p-4 last:mb-0 hover:border-[1px]">
      <div
        className="text-[32px] text-black font-semibold flex justify-between items-center hover:cursor-pointer text-main-text"
        onClick={clickHandler}
      >
        <h2 className="sm-max:text-sm md:base">{title}</h2>
        {isOpen ? (
          <FaLockOpen className="sm-max:w-[20px] sm-max:h-[20px] w-[25px] h-[25px]" />
        ) : (
          <FaLock className="sm-max:w-[20px] sm-max:h-[20px] w-[25px] h-[25px]" />
        )}
      </div>
      <div
        className={`pl-3 font-normal text-black overflow-hidden text-main-text ${styles.accordionItem__body}`}
        ref={accordionItemRef}
        style={
          isOpen
            ? { height: accordionItemRef.current?.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className="sm-max:text-[15px] md:text-[20px] mt-2">{text}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
