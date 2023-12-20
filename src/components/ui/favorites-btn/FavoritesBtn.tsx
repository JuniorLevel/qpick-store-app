import { useAppSelector } from 'hooks/useStore.ts';
import { FC } from 'react';
import { PiHeartStraightLight } from 'react-icons/pi';

const FavoritesBtn: FC = (): JSX.Element => {
  const favoritesList = useAppSelector(state => state.products.favoritesList);

  return (
    <div className="relative w-[30px] h-[30px]">
      <PiHeartStraightLight className="w-full h-full fill-main-text hover:fill-hover-color transition ease-in-out duration-0 hover:duration-500" />
      {favoritesList.length ? (
        <div className="flex justify-center items-center absolute top-[-20px] right-[-20px] w-[25px] h-[25px] p-[10px] rounded-[50%] bg-block-color border-[1px] text-[12px] font-medium text-main-text">
          {favoritesList.length}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FavoritesBtn;
