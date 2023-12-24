import Success from 'components/ui/success/Success';
import { useReduxState } from 'hooks/useReduxState';
import { FC, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import OrderItemLeft from './order-item-left/OrderItemLeft';
import OrderItemRight from './order-item-right/OrderItemRight';

const OrderItem: FC = (): JSX.Element => {
  const { isSuccess } = useReduxState();
  const [show, setShow] = useState<boolean>(false);
  const nodeRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    setShow(!show);
  }, []);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      timeout={3000}
      classNames="main-animation-scale"
      unmountOnExit
    >
      <section ref={nodeRef}>
        {!isSuccess && localStorage.getItem('selectReceiving') ? (
          <div className="md-max:flex-col flex justify-between gap-5">
            <OrderItemLeft />
            <OrderItemRight />
          </div>
        ) : (
          <Success />
        )}
      </section>
    </CSSTransition>
  );
};

export default OrderItem;
