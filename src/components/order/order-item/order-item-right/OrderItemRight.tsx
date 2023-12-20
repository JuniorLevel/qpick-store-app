import OrderItemList from 'components/order/order-item/order-item-list/OrderItemList';
import OrderTitle from 'components/ui/order-title/OrderTitle';
import TotalAmount from 'components/ui/total-amount/TotalAmount';
import { MdAttachMoney } from 'react-icons/md';

const OrderItemRight = () => {
  return (
    <div className="lg-min:max-w-[350px] w-full">
      <div className="rounded-[30px] shadow-shadow bg-block-color-bg border-[1px] p-4 mb-2">
        <OrderTitle title="Ваш заказ" />
        <OrderItemList />
        <TotalAmount />
      </div>
      <div className="lg-min:max-w-[450px] lg-min:mb-2 rounded-[30px] shadow-shadow bg-block-color-bg border-[1px] p-4">
        <OrderTitle title="Способ оплаты" />
        <div className="flex gap-1 items-center">
          <MdAttachMoney />
          <p className="sm-max:text-[15px] text-sm font-medium">Наличными</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItemRight;
