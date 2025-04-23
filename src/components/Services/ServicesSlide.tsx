import classNames from 'classnames';
import Link from 'next/link';

import styles from '@/components/Services/Services.module.scss';
import { Video } from '@/components/Video/Video';

export interface ISlide {
  title: string;
  description: string;
  animation: string;
  href: string;
}

interface IProps {
  slide: ISlide;
}

export const ServicesSlide = (props: IProps) => {
  const { title, description, animation, href } = props.slide;
  return (
    <div className={styles.slide}>
      <Video name={animation} autoplay />
      <div className={styles.info}>
        <div>
          <h3 className={classNames(styles.heading, 'subheadline2')}>{title}</h3>
          <p className={classNames(styles.description, 'paragraph1')}>{description}</p>
        </div>
        <Link href={href} className={classNames(styles.link, 'subheadline2')}>
          <span>&#60; Read more &#47; &#62;</span>
        </Link>
      </div>
    </div>
  );
};
