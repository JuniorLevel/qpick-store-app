import { IFooterData } from 'interfaces/interfaces.ts';
import { FC } from 'react';
import FooterItem from '../footer-item/FooterItem';

interface IFooterBlockProps {
  data: IFooterData[];
}

const FooterBlock: FC<IFooterBlockProps> = ({ data }): JSX.Element => {
  return (
    <div className="mb-5 last:mb-0">
      <ul>
        {data.map(item => (
          <FooterItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default FooterBlock;
