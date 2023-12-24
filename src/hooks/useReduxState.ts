import { useAppSelector } from './useStore';

export function useReduxState() {
  const isLoading = useAppSelector(state => state.products.isLoading);
  const cartList = useAppSelector(state => state.products.cartList);
  const totalPrice = useAppSelector(state => state.prices.totalPrice);
  const inputValue = useAppSelector(state => state.products.searchProduct);
  const productsList = useAppSelector(state => state.products.productsList);
  const filteredProducts = useAppSelector(
    state => state.products.filteredProducts,
  );
  const isSuccess = useAppSelector(state => state.products.isSuccess);
  const product = useAppSelector(state => state.products.productById);
  const favoritesList = useAppSelector(state => state.products.favoritesList);
  const searchProduct = useAppSelector(state => state.products.searchProduct);
  const productsCategories = useAppSelector(
    state => state.products.productsCategories,
  );
  const error = useAppSelector(state => state.products.error);
  return {
    isLoading,
    cartList,
    totalPrice,
    inputValue,
    productsList,
    filteredProducts,
    product,
    isSuccess,
    favoritesList,
    searchProduct,
    productsCategories,
    error,
  };
}
