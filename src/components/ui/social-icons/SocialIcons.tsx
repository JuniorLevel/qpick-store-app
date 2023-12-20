import { FC } from 'react';
import styles from './SocialIcons.module.scss';
import { socialData } from './social.data.ts';

interface ISocialIconsProps {
  classes?: string;
}

const SocialIcons: FC<ISocialIconsProps> = ({ classes }): JSX.Element[] => {
  return socialData.map(item => (
    <li key={item.id} className={classes}>
      <a
        className="block mb-3 last:mb-0"
        href={item.url}
        target="_blank"
        rel="noreferrer"
      >
        <item.icon className={styles.icon} />
      </a>
    </li>
  ));
};

export default SocialIcons;
