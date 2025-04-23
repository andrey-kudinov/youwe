import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import styles from './Solutions.module.scss';

interface ISolutions {
  title: string;
  description: string;
}

interface IProps {
  title: string;
  subtitle: string;
  solutions: ISolutions[];
}

export const Solutions = ({ title, subtitle, solutions }: IProps) => {
  const [visible, setVisible] = useState(false);

  const list = useRef<HTMLUListElement>(null);
  const intersectionObserver = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (list.current) {
      intersectionObserver.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        {
          rootMargin: '0px',
          threshold: 0.1,
        },
      );

      intersectionObserver.current.observe(list.current);
    }

    return () => {
      if (intersectionObserver.current) {
        intersectionObserver.current.disconnect();
      }
    };
  });

  return (
    <section className={styles.wrapper}>
      <div className={`${styles.block} container ${visible ? styles.visible : ''}`}>
        <p className="subheadline3 color-subtitle">{subtitle}</p>
        <h2 className={classNames('headline1', styles.title)}>{title}</h2>

        <ul className={styles.list} ref={list}>
          {solutions.map(({ title, description }: ISolutions) => (
            <li key={title} className={styles.item}>
              <h4 className="subheadline1">{title}</h4>
              <p className="paragraph1">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
