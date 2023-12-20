import { useAppSelector } from 'hooks/useStore.ts';
import { FC } from 'react';
import OrderListItem from './order-item-list-elem/OrderItemListElem';
const OrderItemList: FC = (): JSX.Element => {
  const cartList = useAppSelector(state => state.products.cartList);
  return (
    <ul className="mb-5">
      {cartList.map(item => (
        <OrderListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default OrderItemList;
