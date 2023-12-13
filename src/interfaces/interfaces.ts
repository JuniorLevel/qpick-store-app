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

export interface IInput {
  placeholder: string;
  classNames: string;
  register: (a: string, b: object) => object;
  label: string;
  required: object;
  errors: object;
  inputLabel: string;
}
