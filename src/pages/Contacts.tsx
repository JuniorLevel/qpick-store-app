import ContactsItem from 'components/contacts-item/ContactsItem';
import Layout from 'components/layout/Layout';
import SocialIcons from 'components/ui/social-icons/SocialIcons';

import Title from 'components/ui/title/Title';
import { FC } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contacts: FC = (): JSX.Element => {
  return (
    <Layout>
      <section>
        <Title title="Контакты" />
        <div className="sm-max:flex-col flex justify-between gap-5">
          <ContactsItem />
          <div className="sm-max:hidden">
            <ul>
              <SocialIcons classes="p-3 border-[1px] rounded-[20%] mb-3" />
            </ul>
          </div>
        </div>
        <div className="flex gap-7 items-center">
          <div>
            <BsFillTelephoneFill />
          </div>
          <a
            className="sm-max:text-[25px] text-2xl font-semibold hover:text-hover-color"
            href="tel:+79888888890"
          >
            +7 988 888 88 90
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
