import classNames from 'classnames';
import Image from 'next/image';

import styles from '@/components/Portfolio/Portfolio.module.scss';
import type { IClient } from '@/config/clients';
import { loader } from '@/helpers/helpers';

interface IProps {
  slide: IClient;
  isActive: boolean;
}

export const PortfolioSlide = (props: IProps) => {
  const { isActive, slide } = props;
  const { image, label, title, tags, description, href } = slide;

  return (
    <div className={styles.slide} aria-hidden={!isActive}>
      <div className={styles.brand}>
        <Image src={label} alt={title} width="0" height="0" sizes="100vw" loader={loader} unoptimized />
      </div>

      <div className={styles['slide-body']}>
        <Image src={image} alt={image} width="0" height="0" sizes="100vw" quality={50} />

        <div className={styles.info}>
          <h3 className={classNames(styles.heading, 'headline4')} aria-hidden={!isActive}>
            {title}
          </h3>

          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span className={classNames(styles.tag, 'paragraph2')} key={index} aria-hidden={!isActive}>
                /{tag}/
              </span>
            ))}
          </div>

          <p className={classNames('paragraph1', styles.description)} aria-hidden={!isActive}>
            {description}
          </p>

          <a
            tabIndex={isActive ? 0 : -1}
            className={classNames(styles.link, 'subheadline2')}
            href={href || '#'}
            target="_blank"
            rel="noreferrer"
            aria-hidden={!isActive}
          >
            <span>&#60; Узнать больше &#47; &#62;</span>
          </a>
        </div>
      </div>
    </div>
  );
};
