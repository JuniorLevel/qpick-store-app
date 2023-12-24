import Loader from 'components/loader/Loader';
import OrderItemFormInputs from 'components/order/order-item/order-item-form/order-item-form-inputs/OrderItemFormInputs';
import ButtonSubmit from 'components/ui/button-submit/ButtonSubmit.js';
import Input from 'components/ui/input/Input.js';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  clearCartList,
  setIsLoading,
  setIsSuccess,
} from 'features/products/products.slice.ts';
import { useReduxState } from 'hooks/useReduxState.ts';
import { useAppDispatch } from 'hooks/useStore.ts';
import { IOrderItemForm } from 'interfaces/interfaces.ts';
import OrderItemSelect from '../order-item-select/OrderItemSelect.tsx';

const OrderItemForm: FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IOrderItemForm>({
    mode: 'onChange',
  });
  const dispatch = useAppDispatch();
  const { cartList, totalPrice, isLoading } = useReduxState();

  const onSubmit: SubmitHandler<IOrderItemForm> = data => {
    const orderList = cartList.map(value => ({
      productName: value.title,
      price: value.price,
      amount: localStorage.getItem(`count${value.id}`),
    }));
    try {
      const order = { totalPrice, orderList: [...orderList], data };
      dispatch(setIsLoading(true));
      const submitTimeout = setTimeout(() => {
        dispatch(setIsLoading(false));
        dispatch(setIsSuccess(true));
        dispatch(clearCartList([]));
        localStorage.clear();
        console.log(order);
        reset();
        return order;
      }, 1500);
      return () => clearTimeout(submitTimeout);
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setIsLoading(false));
        return error.message;
      } else if (error && typeof error === 'object' && 'message' in error) {
        dispatch(setIsLoading(false));
        return String(error.message);
      } else {
        return 'Что-то пошло не так!';
      }
    }
  };

  return (
    <div>
      <form
        className="flex gap-3 flex-wrap max-w-[600px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {JSON.parse(localStorage.getItem('selectReceiving') || '{}').value ===
        'delivery' ? (
          <>
            <OrderItemSelect control={control} errors={errors} />
            <OrderItemFormInputs errors={errors} register={register} />
          </>
        ) : (
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
        )}

        {isLoading ? (
          <div className="h-[50px] flex mx-auto">
            <Loader />
          </div>
        ) : (
          <ButtonSubmit text="Закончить оформление" />
        )}
      </form>
    </div>
  );
};
export default OrderItemForm;
