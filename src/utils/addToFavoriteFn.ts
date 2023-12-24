import {
  addToFavorite,
  removeFromFavorite,
} from 'features/products/products.slice';
import { IProduct } from 'interfaces/interfaces';

export function addToFavoriteFn(
  dispatch: (a: unknown) => void,
  isFavorite: boolean,
  setIsFavorite: (a: boolean) => void,
  product: IProduct,
): void {
  if (
    !isFavorite &&
    !localStorage.getItem(`isFavoriteProduct${product.id}id`)
  ) {
    dispatch(addToFavorite(product));
    localStorage.setItem(`isFavoriteProduct${product.id}id`, String(true));
    setIsFavorite(
      Boolean(localStorage.getItem(`isFavoriteProduct${product.id}id`)),
    );
  }

  if (window.location.pathname === '/favorites') {
    dispatch(removeFromFavorite(product));
    localStorage.removeItem(`isFavoriteProduct${product.id}id`);
  }
}
