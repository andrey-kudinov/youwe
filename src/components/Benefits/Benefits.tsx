import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

import { ReactComponent as Checkbox } from '@/assets/svg/checkbox.svg';

import styles from './Benefits.module.scss';

interface Props {
  heading: string;
  benefits: string[];
}

function Benefits({ heading = 'Benefits', benefits = [] }: Props) {
  const [visible, setVisible] = useState(false);
  const section = useRef<HTMLElement>(null);
  const intersectionObserver = useRef<IntersectionObserver | null>(null);

  // TODO: Move this into a custom hook
  useEffect(() => {
    if (section.current) {
      intersectionObserver.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        },
        {
          rootMargin: '0px',
          threshold: 0.1,
        },
      );

      intersectionObserver.current.observe(section.current);
    }

    return () => {
      if (intersectionObserver.current) {
        intersectionObserver.current.disconnect();
      }
    };
  });

  return (
    <section
      ref={section}
      className={cn(styles.wrapper, {
        [styles.visible]: visible,
      })}
    >
      <div className="container">
        <h4 className={`headline3 ${styles.heading}`}>{heading}</h4>

        <div className={styles.benefits}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.checkbox}>
              <Checkbox width="22px" height="22px" />
              <span className="subheadline1">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
