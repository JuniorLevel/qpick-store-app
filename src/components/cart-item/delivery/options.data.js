import CarIcon from '/images/car.svg';
import GiftIcon from '/images/gift.svg';

export const optionsData = [
	{
		value: 'delivery',
		label: 'Доставка курьером',
		price: 50,
		img: CarIcon,
		alt: 'car-icon',
	},
	{
		value: 'pickup',
		label: 'Самовывоз',
		price: 0,
		img: GiftIcon,
		alt: 'gift-icon',
	},
];
