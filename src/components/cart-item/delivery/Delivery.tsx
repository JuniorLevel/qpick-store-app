import { FC, useEffect, useState } from 'react';
import { CiGift } from 'react-icons/ci';
import { FaCarSide } from 'react-icons/fa';
import Select from 'react-select';
import {
  addDeliveryPrice,
  subDeliveryPrice,
} from '../../../features/prices/prices.slice.js';
import { IOptionsData } from '../../../interfaces/interfaces.js';
import YandexMap from '../../ui/yandex-map/YandexMap.js';
import { useAppDispatch } from './../../../hooks/useStore';
import { optionsData } from './options.data.js';

const Delivery: FC = (): JSX.Element => {
  const [selectValue, setSelectValue] = useState<IOptionsData | null>(
    localStorage.getItem('selectReceiving')
      ? JSON.parse(localStorage.getItem('selectReceiving') ?? '{}')
      : optionsData.find(item => item.value === 'pickup'),
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem('selectReceiving', JSON.stringify(selectValue));
  }, [selectValue]);

  return (
    <div className="rounded-[30px] bg-block-color-bg border-[1px] shadow-shadow p-4">
      <h2 className="mb-4 text-main-text text-[20px] font-semibold">
        Доставка
      </h2>
      <div className="h-[300px]">
        <YandexMap
          src={
            'https://yandex.ru/map-widget/v1/?ll=76.877407%2C43.252906&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCggyNDIwMDYwMRJI0prQsNC30LDSm9GB0YLQsNC9LCDQkNC70LzQsNGC0YssINCV0YHQtdC9INCU0q_QudGB0LXQvdC-0LIg0LrTqdGI0LXRgdGWIgoNq8CZQhUCAy1C&utm_source=share&z=18'
          }
        />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {selectValue?.value === 'delivery' ? (
            <FaCarSide className="w-[30px] h-[30px]" />
          ) : (
            <CiGift className="w-[30px] h-[30px]" />
          )}
          {typeof selectValue !== String(null) ? (
            <Select
              className="sm-max:text-[10px] text-[15px] text-select-color-text"
              value={selectValue}
              options={optionsData}
              onChange={selectValue => {
                setSelectValue(selectValue);
                localStorage.setItem(
                  'selectReceiving',
                  JSON.stringify(selectValue),
                );
                if (selectValue?.value === 'delivery') {
                  dispatch(addDeliveryPrice(50));
                }
                if (selectValue?.value === 'pickup') {
                  dispatch(subDeliveryPrice(50));
                }
              }}
            />
          ) : (
            <></>
          )}
        </div>
        <span className="sm-max:text-[17px] text-sm font-semibold">{`${selectValue?.price}$`}</span>
      </div>
    </div>
  );
};

export default Delivery;
