import { IFooterData } from '../../interfaces/interfaces.js'
import {
	CART_ROUTE,
	CONTACTS_ROUTE,
	FAVORITES_ROUTE,
	SERVICES_ROUTE,
} from '../../utils/consts.js'

export const data: IFooterData[] = [
	{
		id:1,
		link: FAVORITES_ROUTE,
		text: 'Избранное',
	},
	{
		id:2,
		link: CART_ROUTE,
		text: 'Корзина',
	},
	{
		id:3,
		link: CONTACTS_ROUTE,
		text: 'Контакты',
	},
	{
		id:4,
		link: SERVICES_ROUTE,
		text: 'Условия сервиса',
	},
];

export const data2: IFooterData[] = [
	{
		id:5,
		link: 'qwerty',
		text: 'Лицензии',
	},
	{
		id:6,
		link: 'qwerty',
		text: 'Трудоустройство',
	},
	{
		id:7,
		link: 'qwerty',
		text: 'Для студентов',
	},
	{
		id:8,
		link: 'qwerty',
		text: 'Отзывы',
	},
];
