import Logo from 'components/logo/Logo';
import SocialIcons from 'components/ui/social-icons/SocialIcons.js';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from 'utils/consts.js';
import { data, data2 } from './data.js';
import FooterBlock from './footer-block/FooterBlock.js';

const Footer: FC = (): JSX.Element => {
  return (
    <footer>
      <div className="mt-[60px] p-7 rounded-t-[30px] shadow-shadow bg-block-color-bg border-[1px]">
        <div className="sm-max:grid-cols-1 md:flex md:space-between md:gap-9 md-max:text-[20px] md:flex-wrap grid grid-cols-3">
          <div className="sm-max:mb-5">
            <Link to={HOME_ROUTE}>
              <Logo />
            </Link>
            <ul className="flex flex-wrap gap-5 mt-8">
              <SocialIcons />
            </ul>
          </div>
          <FooterBlock data={data} />
          <FooterBlock data={data2} />
        </div>
        <div className="mt-5 text-[14px]">
          <p>
            2004-2023 © Qpick — модный интернет-магазин одежды, обуви и
            аксессуаров. Все права защищены. Доставка по всей России.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
