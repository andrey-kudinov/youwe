import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/base/Button/Button';
import styles from '@/components/HeroAbout/HeroAbout.module.scss';
import { Video } from '@/components/Video/Video';

export const HeroAbout = () => {
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
    <section className={`${styles['hero-about']} container`} ref={blockRef}>
      <div className={styles.main}>
        <h2 className="display2">Make success possible with scalable web solutions</h2>

        <p className={`${styles.description} paragraph1`}>
          Achieve the goals and add value to your projects with our innovative customer-driven development that can
          skyrocket your business on the market.
        </p>

        <Button variant="primary" iconName="mail" title="Contact Us" onClick={handleContact} />
      </div>

      <Video
        className={classNames(styles.animation, { [styles['small-display']]: isSmallDisplay })}
        name="about"
        autoplay
      />
    </section>
  );
};
