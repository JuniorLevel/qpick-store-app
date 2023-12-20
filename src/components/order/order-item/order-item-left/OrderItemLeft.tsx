import YandexMap from 'components/ui/yandex-map/YandexMap';
import { FC } from 'react';
import OrderForm from '../order-item-form/OrderItemForm';

const OrderItemLeft: FC = (): JSX.Element => {
  return (
    <div className="md-max:mx-auto max-w-[600px] rounded-[30px] shadow-shadow py-4 px-8 w-full h-full bg-block-color-bg border-[1px]">
      <div className="flex justify-between items-center mb-3 font-semibold">
        <p className="sm-max:text-[14px] text-[17px]">
          {JSON.parse(localStorage.getItem('selectReceiving') ?? '{}').label}
        </p>
        <span className="text-[15px]">{`${
          JSON.parse(localStorage.getItem('selectReceiving') ?? '{}').price
        }$`}</span>
      </div>
      {JSON.parse(localStorage.getItem('selectReceiving') ?? '{}').value ===
      'delivery' ? (
        <></>
      ) : (
        <div className="mb-3 h-[300px]">
          <YandexMap
            src={
              'https://yandex.ru/map-widget/v1/?ll=76.877407%2C43.252906&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCggyNDIwMDYwMRJI0prQsNC30LDSm9GB0YLQsNC9LCDQkNC70LzQsNGC0YssINCV0YHQtdC9INCU0q_QudGB0LXQvdC-0LIg0LrTqdGI0LXRgdGWIgoNq8CZQhUCAy1C&utm_source=share&z=18'
            }
          />
        </div>
      )}
      <OrderForm />
    </div>
  );
};

export default OrderItemLeft;
