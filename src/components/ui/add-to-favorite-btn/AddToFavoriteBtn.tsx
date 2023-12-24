import styles from 'components/assortment/card/Card.module.scss';
import { useAppDispatch } from 'hooks/useStore.ts';
import { IProduct } from 'interfaces/interfaces.ts';
import { FC, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { addToFavoriteFn } from 'utils/addToFavoriteFn';

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
        addToFavoriteFn(dispatch, isFavorite, setIsFavorite, product);
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
