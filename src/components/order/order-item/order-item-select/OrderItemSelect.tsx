import { ICitiesData, IOrderItemForm } from 'interfaces/interfaces';
import { FC } from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import Select from 'react-select';
import { cities } from './data';

interface IOrderItemSelectProps {
  control: Control<IOrderItemForm>;
  errors: FieldErrors<IOrderItemForm>;
}

const getValue = (value: string) =>
  value ? cities.find(city => city.value === value) : '';

const OrderItemSelect: FC<IOrderItemSelectProps> = ({
  control,
  errors,
}): JSX.Element => {
  return (
    <Controller
      control={control}
      name="city"
      rules={{ required: 'Выберите город' }}
      render={({ field: { onChange, value } }) => (
        <>
          <Select
            placeholder="Выберите город"
            className="sm-max:text-[12px] w-full text-[20px] text-select-color-text"
            options={cities}
            value={getValue(value)}
            onChange={newValue => onChange((newValue as ICitiesData).value)}
          />
          {errors?.city && (
            <div className="sm-max:text-[12px] text-[red] text-[16px]">
              {errors?.city.message}
            </div>
          )}
        </>
      )}
    />
  );
};

export default OrderItemSelect;
