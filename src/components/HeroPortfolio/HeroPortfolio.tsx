import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import { ReactComponent as Checkbox } from '@/assets/svg/checkbox.svg';
import { Button } from '@/components/base/Button/Button';
import styles from '@/components/HeroPortfolio/HeroPortfolio.module.scss';
import { Video } from '@/components/Video/Video';

const checkboxes = ['Years of experience', 'Wide tech stack expertise', 'Trusted clients'];

export const HeroPortfolio = () => {
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
    <section className={`${styles['hero-block']} container`} ref={blockRef}>
      <div className={styles.main}>
        <h2 className="display2">Our portfolio speaks for itself. We build globally</h2>

        <p className={`${styles.description} paragraph1`}>
          Is there anything clearer that shows professionals’ expertise and skills than a real piece of work? We are
          proud of each and every achievement in our portfolio. Take a look to get inspired!
        </p>

        <div className={styles.checkboxes}>
          {checkboxes.map((checkbox, index) => (
            <div className={styles.checkbox} key={index}>
              <Checkbox width="22px" height="22px" /> <p className="color-subtitle subheadline3">{checkbox}</p>{' '}
            </div>
          ))}
        </div>

        <Button variant="primary" iconName="mail" title="Contact Us" onClick={handleContact} />
      </div>

      <Video
        className={classNames(styles.animation, { [styles['small-display']]: isSmallDisplay })}
        name="hero-block-work"
        autoplay
      />
    </section>
  );
};
