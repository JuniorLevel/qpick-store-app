import { IFooterData } from '../../interfaces/interfaces.js'
import {
	CART_ROUTE,
	CONTACTS_ROUTE,
	FAVORITES_ROUTE,
	SERVICES_ROUTE,
} from '../../utils/consts.js'

export const data: IFooterData[] = [
	{
		link: FAVORITES_ROUTE,
		text: 'Избранное',
	},
	{
		link: CART_ROUTE,
		text: 'Корзина',
	},
	{
		link: CONTACTS_ROUTE,
		text: 'Контакты',
	},
	{
		link: SERVICES_ROUTE,
		text: 'Условия сервиса',
	},
];

export const data2: IFooterData[] = [
	{
		link: 'qwerty',
		text: 'Лицензии',
	},
	{
		link: 'qwerty',
		text: 'Трудоустройство',
	},
	{
		link: 'qwerty',
		text: 'Для студентов',
	},
	{
		link: 'qwerty',
		text: 'Отзывы',
	},
];