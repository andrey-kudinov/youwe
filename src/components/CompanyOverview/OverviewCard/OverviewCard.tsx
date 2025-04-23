import cn from 'classnames';

import { Video } from '@/components/Video/Video';

import { Button } from '../../base/Button/Button';
import styles from './OverviewCard.module.scss';

interface ILink {
  text: string;
  href: string;
}

export interface IOverviewCard {
  title: string;
  description: string;
  illustration: string;
  links: ILink[];
}

interface Props {
  overviewCard: IOverviewCard;
}

export const OverviewCard = (props: Props) => {
  const {
    overviewCard: { title, illustration, description, links },
  } = props;

  return (
    <article className={styles.card}>
      <h3 className={cn('subheadline1', styles.title)}>{title}</h3>

      <figure className={styles.illustration}>
        <Video name={illustration} width="100%" autoplay />
      </figure>

      <p className={cn('paragraph1', styles.description)}>{description}</p>

      {links.map(({ text, href }, index) => (
        <Button title={text} iconName="arrow-right" href={href} key={index} />
      ))}
    </article>
  );
};
