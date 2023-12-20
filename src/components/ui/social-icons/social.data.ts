import { ISocialData } from 'interfaces/interfaces';
import { ImWhatsapp } from 'react-icons/im';
import { SiTelegram } from 'react-icons/si';
import { SlSocialVkontakte } from 'react-icons/sl';
import { TiSocialInstagram } from 'react-icons/ti';

export const socialData: ISocialData[] = [
  {
    id: 1,
    icon: SlSocialVkontakte,
    url: 'https://vk.com',
  },
  {
    id: 2,
    icon: TiSocialInstagram,
    url: 'https://www.instagram.com',
  },
  {
    id: 3,
    icon: SiTelegram,
    url: 'https://telegram.org/',
  },
  {
    id: 4,
    icon: ImWhatsapp,
    url: 'https://web.whatsapp.com/',
  },
];
