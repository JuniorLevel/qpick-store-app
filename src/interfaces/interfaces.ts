export interface IAccordionData {
  id: number;
  title: string;
  text: string;
}

export interface ICategory {
  id: number;
  name: string;
  image: string;
  creationAt?: string;
  updatedAt?: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[] | string;
  creationAt?: string;
  updatedAt?: string;
  category?: ICategory;
}

export interface IBannerData {
  img: string;
  alt: string;
}

export interface IOptionsData {
  value: string;
  label: string;
  price: number;
}

export interface IFooterData {
  id: number;
  link: string;
  text: string;
}

export interface ICitiesData {
  value: string;
  label: string;
}

export interface ISocialData {
  id: number;
  icon: React.ElementType;
  url: string;
}

export interface IOrderItemForm {
  city: string;
  phone: string;
  street: string;
  homeNumber: string;
  flatNumber: string;
  apartmentEntrance: string;
}

export type TInputLabel =
  | 'city'
  | 'phone'
  | 'street'
  | 'homeNumber'
  | 'flatNumber'
  | 'apartmentEntrance';
