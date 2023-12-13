import Loader from 'components/loader/Loader';
import ButtonSubmit from 'components/ui/button-submit/ButtonSubmit.js';
import Input from 'components/ui/input/Input.js';
import {
	clearCartList,
	setIsLoading,
	setIsSuccess,
} from 'features/products/products.slice.ts';
import { useAppDispatch, useAppSelector } from 'hooks/useStore.ts';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { cities } from './data.ts';

const OrderForm = () => {
	const {
		register,
		handleSubmit,
		control,
		reset,
		getValues,
		required,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	});

	const isLoading = useAppSelector(state => state.products.isLoading);
	const cartList = useAppSelector(state => state.products.cartList);
	const totalPrice = useAppSelector(state => state.prices.totalPrice);
	const dispatch = useAppDispatch();
	const orderList = cartList.map(value => ({
		productName: value.title,
		price: value.price,
		amount: localStorage.getItem(`count${value.id}`),
	}));

	const onSubmit = data => {
		try {
			const order = { totalPrice, orderList: [...orderList], data };
			dispatch(setIsLoading(true));
			setTimeout(() => {
				dispatch(setIsLoading(false));
				dispatch(setIsSuccess(true));
				dispatch(clearCartList([]));
				localStorage.clear();
				console.log(order);
				reset();
				return order;
			}, 1500);
		} catch (e) {
			dispatch(setIsLoading(false));
			alert(e.message);
		}
	};

	return (
		<div>
			<form
				className='flex gap-3 flex-wrap max-w-[600px]'
				onSubmit={handleSubmit(onSubmit)}
			>
				{JSON.parse(localStorage.getItem('selectReceiving')).value ===
				'delivery' ? (
					<>
						<Controller
							control={control}
							name='city'
							rules={{ required: 'Выберите город' }}
							render={({ field: { onChange, value = '' } }) => (
								<>
									<Select
										placeholder='Выберите город'
										className='sm-max:text-[12px] w-full text-[20px] text-select-color-text'
										options={cities}
										value={getValues(value)}
										onChange={newValue => {
											onChange(newValue.value);
										}}
									/>
									{errors?.city && (
										<div className='sm-max:text-[12px] text-[red] text-[16px]'>
											{errors?.city.message}
										</div>
									)}
								</>
							)}
						/>

						<Input
							inputLabel='Номер получателя'
							placeholder='+7(xxx)-xxx-xx-xx'
							errors={errors}
							label='phone'
							required={{
								required: 'Заполните пустое поле',
								pattern: {
									value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
									message: 'Введите номер в формате +7(xxx)-xxx-xx-xx',
								},
							}}
							message='Введите корректный номер телефона'
							register={register}
						/>
						<Input
							inputLabel='Улица'
							placeholder='Введите название улицы'
							errors={errors}
							label='street'
							required={{
								required: 'Заполните пустое поле',
							}}
							register={register}
						/>
						<Input
							inputLabel='Дом'
							placeholder='Укажите номер дома'
							errors={errors}
							label='homeNumber'
							required={{
								required: 'Заполните пустое поле',
							}}
							register={register}
						/>
						<Input
							inputLabel='Квартира'
							placeholder='Укажите номер квартиры'
							errors={errors}
							label='flatNumber'
							required={{
								required: 'Заполните пустое поле',
							}}
							register={register}
						/>
						<Input
							inputLabel='Подъезд'
							placeholder='Укажите номер подъезда'
							errors={errors}
							label='apartmentEntrance'
							required={{
								required: 'Заполните пустое поле',
							}}
							register={register}
						/>
					</>
				) : (
					<>
						<Input
							inputLabel='Номер получателя'
							placeholder='+7(xxx)-xxx-xx-xx'
							errors={errors}
							label='phone'
							required={{
								required: 'Заполните пустое поле',
								pattern: {
									value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
									message: 'Введите номер в формате +7(xxx)-xxx-xx-xx',
								},
							}}
							message='Введите корректный номер телефона'
							register={register}
						/>
					</>
				)}

				{isLoading ? (
					<div className='h-[50px] flex mx-auto'>
						<Loader />
					</div>
				) : (
					<ButtonSubmit text='Закончить оформление' />
				)}
			</form>
		</div>
	);
};

export default OrderForm;
