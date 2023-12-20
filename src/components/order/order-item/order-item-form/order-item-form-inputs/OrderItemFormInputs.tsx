import Input from 'components/ui/input/Input';
import { IOrderItemForm } from 'interfaces/interfaces';
import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface IOrderItemFormInputsProps {
  errors: FieldErrors<IOrderItemForm>;
  register: UseFormRegister<IOrderItemForm>;
}

const OrderItemFormInputs: FC<IOrderItemFormInputsProps> = ({
  errors,
  register,
}): JSX.Element => {
  return (
    <>
      <Input
        inputLabel="Номер получателя"
        placeholder="+7 xxx xxx xx xx"
        errors={errors}
        label="phone"
        required={{
          required: 'Заполните пустое поле',
          pattern: {
            value: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
            message: 'Введите номер в формате +7 xxx xxx xx xx',
          },
        }}
        register={register}
      />
      <Input
        inputLabel="Улица"
        placeholder="Введите название улицы"
        errors={errors}
        label="street"
        required={{
          required: 'Заполните пустое поле',
        }}
        register={register}
      />
      <Input
        inputLabel="Дом"
        placeholder="Укажите номер дома"
        errors={errors}
        label="homeNumber"
        required={{
          required: 'Заполните пустое поле',
        }}
        register={register}
      />
      <Input
        inputLabel="Квартира"
        placeholder="Укажите номер квартиры"
        errors={errors}
        label="flatNumber"
        required={{
          required: 'Заполните пустое поле',
        }}
        register={register}
      />
      <Input
        inputLabel="Подъезд"
        placeholder="Укажите номер подъезда"
        errors={errors}
        label="apartmentEntrance"
        required={{
          required: 'Заполните пустое поле',
        }}
        register={register}
      />
    </>
  );
};

export default OrderItemFormInputs;
