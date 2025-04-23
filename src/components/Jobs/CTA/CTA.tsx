import { ReactComponent as Arrows } from '@/assets/svg/arrows.svg';

import styles from './CTA.module.scss';

export const CTA = () => (
  <div className={styles.cta}>
    <h3 className={`${styles.title} headline3`}>Can’t find your role? Drop us an email</h3>

    <a className={styles.button} href="#contact">
      <Arrows width="18px" height="19px" />
      <span className={`${styles.text} subheadline1`}>Email Us</span>
    </a>
  </div>
);
