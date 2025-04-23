import cn from 'classnames';
import Image from 'next/image';

import { ITechnology } from '@/config/clients';
import { loader } from '@/helpers/helpers';

import styles from './TechList.module.scss';

interface Props {
  className?: string;
  technologies: ITechnology[];
}

export const TechList = (props: Props) => {
  const { className, technologies } = props;

  return (
    <ul className={cn(styles.list, className)}>
      {technologies.map((technology, index) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        <li key={index} tabIndex={0} className={styles.item}>
          <Image src={technology.icon} alt="" width="0" height="0" sizes="100vw" loader={loader} unoptimized />

          <p className={styles.name}>{technology.name}</p>
        </li>
      ))}
    </ul>
  );
};
