import styles from 'components/assortment/card/Card.module.scss';
import {
  addToFavorite,
  removeFromFavorite,
} from 'features/products/products.slice.ts';
import { useAppDispatch } from 'hooks/useStore.ts';
import { IProduct } from 'interfaces/interfaces.ts';
import { FC, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

interface IAddToFavoriteBtnProps {
  product: IProduct;
}

const AddToFavoriteBtn: FC<IAddToFavoriteBtnProps> = ({
  product,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState<boolean>(
    Boolean(localStorage.getItem(`isFavoriteProduct${product.id}id`)),
  );

  return (
    <button
      className={
        isFavorite ? styles.card__btnFavoriteActive : styles.card__btnFavorite
      }
      onClick={() => {
        if (
          !isFavorite &&
          !localStorage.getItem(`isFavoriteProduct${product.id}id`)
        ) {
          dispatch(addToFavorite(product));
          localStorage.setItem(
            `isFavoriteProduct${product.id}id`,
            String(true),
          );
          setIsFavorite(
            Boolean(localStorage.getItem(`isFavoriteProduct${product.id}id`)),
          );
        }

        if (window.location.pathname === '/favorites') {
          dispatch(removeFromFavorite(product));
          localStorage.removeItem(`isFavoriteProduct${product.id}id`);
        }
      }}
    >
      {window.location.pathname === '/favorites' ? (
        <IoMdClose color="orange" />
      ) : (
        <AiOutlineHeart color="orange" />
      )}
    </button>
  );
};

export default AddToFavoriteBtn;
