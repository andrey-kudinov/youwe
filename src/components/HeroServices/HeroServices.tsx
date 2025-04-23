import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/base/Button/Button';
import styles from '@/components/HeroServices/HeroServices.module.scss';
import { Video } from '@/components/Video/Video';

interface IProps {
  title: string;
  description: string;
  animation: string;
  smallMobileTitle?: boolean;
}

export const HeroServices = ({ title, description, animation, smallMobileTitle }: IProps) => {
  const blockRef = useRef<HTMLElement>(null);
  const [isSmallDisplay, setSmallDisplay] = useState(false);

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    if (blockRef?.current) {
      blockRef.current.style.setProperty('--vh', `${vh}px`);

      if (vh < 6.2) {
        blockRef.current.style.height = 'auto';
        setSmallDisplay(true);
      }
    }
  }, []);

  const handleContact = () => {
    const selector = '.contact-form';
    document.querySelector(selector)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      className={classNames(styles['hero-block'], 'container', { [styles['small-mobile-title']]: smallMobileTitle })}
      ref={blockRef}
    >
      <div className={styles.main}>
        <h2 className="display2">{title}</h2>
        <p className={`${styles.subtitle} color-subtitle subheadline3`}>avalon service</p>
        <p className={`${styles.text} paragraph1`}>{description}</p>
        <Button iconName="mail" title="Contact Us" onClick={handleContact} />
      </div>
      <Video
        name={animation}
        autoplay
        className={classNames(styles.animation, { [styles['small-display']]: isSmallDisplay })}
      />
      <Video name="grid" autoplay className={styles.grid} />
    </section>
  );
};
